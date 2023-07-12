<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { Button } from '$components';

	const logoutHandler = async () => {
		const response = await fetch('api/auth/logout', {
			method: 'POST',
			headers: { accept: 'application/json' }
		});
		if (response.ok) {
			invalidateAll();
		}
	};
</script>

<form method="post" action="/api/auth/logout" on:submit|preventDefault={logoutHandler}>
	<Button element="button" type="submit">Logout</Button>
</form>
