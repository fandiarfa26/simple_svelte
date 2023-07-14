<script lang="ts">
  import { navigate } from "svelte-routing";
  import { user } from "../../stores/auth";
  import {LogOutIcon} from "svelte-feather-icons";

  function logout() {
    localStorage.clear();
    user.set(localStorage.getItem('user'));
    navigate('/', {replace: true});
  }
</script>

<header>
  <h1>SimpleApp</h1>
  <button type="button" on:click={logout}>
    <LogOutIcon/>
    <span>Logout</span>
  </button>
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

    button {
      display: flex;
      align-items: center;
      gap: 0.5em;
      padding: 0.7em;
      background-color: $danger-color;
      color: #fff;
      font-weight: 700;
      font-size: medium;
      border-radius: 0.5em;
      border: 0;
      box-shadow: none;
      cursor: pointer;
      
      &:hover {
        background-color: mix($danger-color, #000, 80%);
      }
    }
  }
</style>