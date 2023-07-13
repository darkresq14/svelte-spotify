import { fetchRefresh } from '$helpers';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
	const limit = 18;
	const page = url.searchParams.get('page');

	const searchParams = new URLSearchParams({
		limit: `${limit}`,
		offset: page ? `${(Number(page) - 1) * limit}` : '0'
	}).toString();

	const playlistsRes = await fetchRefresh(fetch, `/api/spotify/me/playlists?${searchParams}`);

	if (!playlistsRes.ok) {
		throw error(playlistsRes.status, 'Failed to load playlists!');
	}

	const playlistsResJSON: SpotifyApi.ListOfCurrentUsersPlaylistsResponse =
		await playlistsRes.json();

	return {
		playlists: playlistsResJSON,
		title: 'Your Playlists'
	};
};
