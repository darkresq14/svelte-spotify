// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface Window {
		refreshPromise: Promise<Response> | null;
	}
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			user: SpotifyApi.CurrentUsersProfileResponse | null;
			title?: string;
			color?: string | null;
		}
		// interface Platform {}
	}
}

export {};
