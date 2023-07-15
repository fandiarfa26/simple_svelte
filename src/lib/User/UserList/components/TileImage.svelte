<script lang="ts">
  export let imageSrc: string;
  export let imageAlt: string;
</script>

<img src={imageSrc} alt={imageAlt} />

<style lang="scss">
  $img-size: 56px;

  img {
    width: $img-size;
    height: $img-size;
    border-radius: 50%;
  }
</style>
