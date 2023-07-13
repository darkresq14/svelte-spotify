<script lang="ts">
	import { Button, Card } from '$components';
	import type { PageData } from './$types';

	export let data: PageData;
	$: playlists = data.playlists;
</script>

<div class="content">
	{#if playlists.items.length > 0}
		<div class="title">
			<h1>{data.title}</h1>
			<Button element="a">+ Add New</Button>
		</div>
		<div class="grid-items">
			{#each playlists.items as item}
				<div class="grid-item">
					<Card {item} />
				</div>
			{/each}
		</div>
	{:else}
		<div class="empty">
			<p>No Playlists yet.</p>
			<Button element="a">+ Add New</Button>
		</div>
	{/if}
</div>

<style lang="scss">
	.content {
		padding: 60px;
		.title {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.grid-items {
			margin-bottom: 40px;
		}
		.empty {
			text-align: center;
			margin-top: 40px;
			p {
				font-size: functions.toRem(22);
				font-weight: 600;
			}
		}
	}
</style>
