<script>
  import { link } from "svelte-routing";
</script>

<a href={`/`} use:link>Back to Home</a>

<style lang="scss">
  @import "../../../styles/variables.scss";

  a {
    text-decoration: none;
    padding: 0.75em;
    background: $primary-color;
    color: #fff;
    font-weight: 700;
    border-radius: $border-radius;

    &:hover {
      background: mix($primary-color, #000, 80%);
    }
  }
</style>
