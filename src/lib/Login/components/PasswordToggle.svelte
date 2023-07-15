<script lang="ts">
  export let onToggle;
  export let isShow:boolean;
</script>

<a href="#!" on:click={onToggle}>{isShow ? 'Hide' : 'Show'} Password</a>

<style lang="scss">
  @import "../../../styles/variables.scss";

  a {
    align-self: end;
    text-decoration: none;
    color: $primary-color;
    margin: 0.5em 0;
    font-size: smaller;

    @media screen and (min-width: $largeDeviceSize) {
      font-size: medium;
    }

    &:hover {
      text-decoration: underline;
    }
  }
</style>