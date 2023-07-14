<script lang="ts">
  import { link } from "svelte-navigator";
  export let image;
  export let title;
  export let description;
</script>

<main>
  <div>
    <img src={image} alt={`Error Image`}/>
    <h1>{title}</h1>
    <p>{description}</p>
    <a href={`/`} use:link>Back to Home</a>
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

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }

  a {
    text-decoration: none;
    padding: 0.5em 1em;
    background: $primary-color;
    color:#fff;
    font-weight: 700;
    border-radius: 0.5em;

    &:hover {
      background: mix($primary-color, #000, 80%);
    }
  }
</style>