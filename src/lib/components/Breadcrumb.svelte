<script lang="ts">
  import { link} from "svelte-routing";
  import {HomeIcon, ChevronRightIcon} from "svelte-feather-icons";
  import Card from "./Card.svelte";

  interface BreadcrumbItem {
    path?: string;
    label: string;
  }

  export let items:Array<BreadcrumbItem>;
</script>

<div class="wrapper">
  <Card>
    <div class="breadcrumb">
      <HomeIcon/>
      {#each items as item}
        <ChevronRightIcon />
        {#if item.path}
          <a href={item.path} use:link>{item.label}</a>
        {:else}
          <span>{item.label}</span>
        {/if}
      {/each}
    </div>
  </Card>
</div>

<style lang="scss">
  @import "../../styles/variables.scss";

  .wrapper {
    padding-bottom: 1em;
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0 0.5em;

    a {
      text-decoration: none;
      color: $primary-color;
      
      &:hover {
        text-decoration: underline;
      }
    }

    span {
      font-weight: 700;
    }
  }
</style>
