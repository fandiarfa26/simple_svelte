<script lang="ts">
  import { titleApp } from "../../constants";
  import LogoutButton from "./LogoutButton.svelte";
</script>

<header>
  <h1>{titleApp}</h1>
  <LogoutButton />
</header>

<style lang="scss">
  @import "../../styles/variables.scss";

  header {
    width: 100%;
    background-color: #fff;
    filter: $drop-shadow;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 1em;

    h1 {
      font-size: x-large;
    }
  }
</style>
