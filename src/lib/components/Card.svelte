<script lang="ts">

</script>

<div class="card">
  <slot/>
</div>

<style lang="scss">
  @import "../../styles/variables.scss";

  .card {
    padding: 1em;
    border-radius: 1em;
    background-color: #fff;
    filter: $drop-shadow;
  }
</style>