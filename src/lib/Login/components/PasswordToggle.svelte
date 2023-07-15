<script lang="ts">
  export let onToggle;
  export let isShow: boolean;
</script>

<a href="#!" on:click={onToggle}>{isShow ? "Hide" : "Show"} Password</a>

<style lang="scss">
  @import "../../../styles/variables.scss";

  a {
    align-self: end;
    text-decoration: none;
    color: $primary-color;
    margin: 0.5em 0;
    font-size: medium;

    @media screen and (min-width: $largeDeviceSize) {
      font-size: smaller;
    }

    &:hover {
      text-decoration: underline;
    }
  }
</style>
