<script lang="ts">
  import { onMount } from "svelte";
  import { titleApp, validUser } from "../../constants";
  import LoginCard from "./components/LoginCard.svelte";
  import { userAuth } from "../../stores/auth";
  import { navigate } from "svelte-routing";

  $: {
    document.title = "Login - " + titleApp;
  }

  onMount(() => {
    let auth = localStorage.getItem("auth");
    if (auth === validUser.email) {
      navigate("/users", { replace: true });
    }
  });
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
