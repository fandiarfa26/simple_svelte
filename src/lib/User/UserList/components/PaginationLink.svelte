<script lang="ts">
  export let onClick;
  export let isActive: boolean = false;
  export let isDisabled: boolean = false;
  export let label: string;
</script>

{#if isDisabled || isActive}
  <span class={isActive ? "active" : ""}>{label}</span>
{:else}
  <a href="#!" on:click={onClick}>
    {label}
  </a>
{/if}

<style lang="scss">
  @import "../../../../styles/variables.scss";

  span {
    padding: 0.5em 1em;
    color: #555;
    font-weight: 700;

    &.active {
      border-radius: $border-radius;
      background-color: $primary-color;
      color: #fff;
    }
  }

  a {
    text-decoration: none;
    padding: 0.5em 1em;
    color: #000;
    border-radius: $border-radius;
    font-weight: 700;

    &:hover {
      background-color: $secondary-color;
    }
  }
</style>
