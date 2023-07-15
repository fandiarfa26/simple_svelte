<script lang="ts">
  import { titleApp } from "../../constants";
  import LoginCard from "./components/LoginCard.svelte";

  $: {
    document.title = "Login - " + titleApp;
  }
</script>

<main>
  <div class="wrapper">
    <LoginCard />
  </div>
</main>

<style lang="scss">
  @import "../../styles/variables.scss";

  main {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    width: 95%;
    margin: 0 auto;

    @media screen and (min-width: $mediumDeviceSize) {
      width: 50%;
    }

    @media screen and (min-width: $largeDeviceSize) {
      width: 30%;
    }
  }
</style>
