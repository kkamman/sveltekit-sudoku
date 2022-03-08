<script lang="ts">
	export let clues: string;

	const initialGrid: number[][] = [...clues]
		.map((clue) => parseInt(clue, 10))
		.reduce((rows, clue, clueIndex) => {
			const rowIndex = Math.floor(clueIndex / 9);
			if (!rows[rowIndex]) {
				rows[rowIndex] = [];
			}
			rows[rowIndex].push(clue);
			return rows;
		}, []);

	let grid = [...initialGrid];

	const onCellClicked = (row, column) => {
		grid[row][column] = grid[row][column] + 1;
		if (grid[row][column] > 9) {
			grid[row][column] = 0;
		}
		grid = grid;
	};
</script>

<div class="grid">
	{#each grid as row, rowIndex}
		<div class="grid__row">
			{#each row as cell, columnIndex}
				{#if !initialGrid[rowIndex][columnIndex]}
					<div
						class="grid__cell grid__cell--clickable"
						on:click={() => onCellClicked(rowIndex, columnIndex)}
					>
						{cell || ''}
					</div>
				{:else}
					<div class="grid__cell grid__cell--not-clickable">{cell || ''}</div>
				{/if}
			{/each}
		</div>
	{/each}
</div>

<style>
	.grid {
		display: flex;
		flex-direction: column;
	}

	.grid__row {
		display: flex;
		flex-direction: row;
	}

	.grid__cell {
		width: 2em;
		height: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
		border: solid 0.1rem rgb(235, 235, 235);
		margin: 0.1rem;
		background-color: rgb(255, 255, 255);
	}

	.grid__cell--clickable {
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.grid__cell--not-clickable {
		background-color: rgb(0, 0, 0);
		color: rgb(235, 235, 235);
	}

	.grid__cell:nth-child(3),
	.grid__cell:nth-child(6) {
		margin-right: 0.5rem;
	}

	.grid__row:nth-child(3) .grid__cell,
	.grid__row:nth-child(6) .grid__cell {
		margin-bottom: 0.5rem;
	}
</style>
