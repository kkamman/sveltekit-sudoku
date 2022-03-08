<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let slug = '';

	onMount(async () => {
		const res = await fetch('/clues');
		const json = await res.json();
		slug = json.clues;
	});
</script>

{#if slug}
	<a sveltekit:prefetch href="/{slug}">sudoku</a>
{/if}
