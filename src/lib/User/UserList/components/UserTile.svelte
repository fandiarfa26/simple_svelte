<script lang="ts">
  import { ChevronRightIcon } from "svelte-feather-icons";
  import { link } from "svelte-routing";
  import TileImage from "./TileImage.svelte";
  import TileContent from "./TileContent.svelte";

  export let user;

  $: fullname = `${user.first_name} ${user.last_name}`;
</script>

<a href={`/users/${user.id}`} class="tile" use:link>
  <TileImage imageSrc={user.avatar} imageAlt={`Image of ${user.first_name}`} />
  <TileContent title={fullname} subtitle={user.email} />
  <ChevronRightIcon />
</a>

<style lang="scss">
  @import "../../../../styles/variables.scss";

  .tile {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 0.5em;
    border-radius: $border-radius;
    color: #000;
    text-decoration: none;

    &:hover {
      background-color: mix(#fff, #000, 95%);
    }
  }
</style>
