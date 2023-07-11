import type { PageLoad } from './$types';
import { fetchRefresh } from '$helpers';

export const load: PageLoad = async ({ fetch: _fetch }) => {
	const fetch = (path: string) => fetchRefresh(_fetch, path);

	const newReleases = fetch('/api/spotify/browse/new-releases?limit=6');
	const featuredPlaylists = fetch('/api/spotify/browse/featured-playlists?limit=6');
	const myPlaylists = fetch('/api/spotify/me/playlists?limit=6');

	const catsRes = await fetch('/api/spotify/browse/categories');
	const catsResJSON: SpotifyApi.MultipleCategoriesResponse | undefined = catsRes.ok
		? await catsRes.json()
		: undefined;

	const randomCats = catsResJSON
		? catsResJSON.categories.items.sort(() => Math.random() - 0.5).slice(0, 3)
		: [];

	const randomCatPromises = randomCats.map((cat) =>
		fetch(`/api/spotify/browse/categories/${cat.id}/playlists?limit=6`)
	);

	const [newReleasesRes, featuredPlaylistsRes, myPlaylistsRes, ...randomCatsRes] =
		await Promise.all([newReleases, featuredPlaylists, myPlaylists, ...randomCatPromises]);

	return {
		newReleases: newReleasesRes.ok
			? (newReleasesRes.json() as Promise<SpotifyApi.ListOfNewReleasesResponse>)
			: undefined,
		featuredPlaylists: featuredPlaylistsRes.ok
			? (featuredPlaylistsRes.json() as Promise<SpotifyApi.ListOfFeaturedPlaylistsResponse>)
			: undefined,
		myPlaylists: myPlaylistsRes.ok
			? (myPlaylistsRes.json() as Promise<SpotifyApi.ListOfCurrentUsersPlaylistsResponse>)
			: undefined,
		homeCategories: randomCats,
		categoriesPlaylists: Promise.all(
			randomCatsRes.map((res) =>
				res.ok ? (res.json() as Promise<SpotifyApi.CategoryPlaylistsResponse>) : undefined
			)
		)
	};
};
