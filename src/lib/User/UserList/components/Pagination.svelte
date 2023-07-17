<script lang="ts">
  import PaginationLink from "./PaginationLink.svelte";

  export let totalPages: number;
  export let activePage: number;
  export let onChangePage;
</script>

<div class="pagination">
  <PaginationLink
    onClick={() => onChangePage(activePage - 1)}
    isDisabled={activePage === 1}
    label="Previous"
  />

  {#each Array(totalPages) as _, i}
    <PaginationLink
      onClick={() => onChangePage(i + 1)}
      isActive={activePage === i + 1}
      label={`${i + 1}`}
    />
  {/each}
  <PaginationLink
    onClick={() => onChangePage(activePage + 1)}
    isDisabled={activePage === totalPages}
    label="Next"
  />
</div>

<style lang="scss">
  @import "../../../../styles/variables.scss";

  .pagination {
    margin-top: 1em;
    display: flex;
    gap: 0.3em;
    justify-content: center;
    align-items: center;
  }
</style>
