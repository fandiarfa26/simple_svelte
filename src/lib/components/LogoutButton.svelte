<script>
  import { LogOutIcon } from "svelte-feather-icons";
  import { navigate } from "svelte-routing";
  import { userAuth } from "../../stores/auth";

  const logout = () => {
    localStorage.clear();
    userAuth.set(localStorage.getItem("auth"));
    navigate("/", { replace: true });
  };
</script>

<button type="button" on:click={logout}>
  <LogOutIcon />
  <span>Logout</span>
</button>

<style lang="scss">
  @import "../../styles/variables.scss";

  button {
    display: flex;
    align-items: center;
    gap: 0.5em;
    background-color: $danger-color;

    &:hover {
      background-color: mix($danger-color, #000, 80%);
    }
  }
</style>
