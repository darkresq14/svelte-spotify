<script lang='ts'>
	import { invalidateAll } from "$app/navigation";

  const logoutHandler = async () => {
    const response = await fetch('api/auth/logout', { method: 'POST', headers: { 'accept': 'application/json' } });
    if (response.ok) {
      invalidateAll()
    }
  }
</script>

<form method="post" action="/api/auth/logout" on:submit|preventDefault = {logoutHandler}>
    <button type="submit">Logout</button>
</form>