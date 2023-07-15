<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="expanded">
  <div class="tile-title">{title}</div>
  <div class="tile-subtitle">{subtitle}</div>
</div>

<style lang="scss">
  .expanded {
    flex-grow: 1;
  }

  .tile-title {
    font-size: large;
    font-weight: 700;
  }

  .tile-subtitle {
    font-size: small;
  }
</style>
