<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ params }) => {
		if (params.slug.length !== 81) {
			return {
				status: 302,
				redirect: '/'
			};
		} else {
			return {
				status: 200
			};
		}
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import SudokuGrid from './_SudokuGrid.svelte';

	$: clues = $page.params.slug;

	const getNewSudoku = async () => {
		const res = await fetch('/clues');
		const json = await res.json();
		await goto(`/${json.clues}`);
	};
</script>

<div class="container">
	<button class="new-sudoku-button" on:click={() => getNewSudoku()}>get new sudoku</button>
	{#key clues}
		<SudokuGrid {clues} />
	{/key}
</div>

<style>
	.container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.new-sudoku-button {
		margin-bottom: 2rem;
	}
</style>
