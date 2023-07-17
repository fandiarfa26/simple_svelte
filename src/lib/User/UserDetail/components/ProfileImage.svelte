<script lang="ts">
  export let imageSrc: string;
  export let imageAlt: string;
</script>

<img class="profile-image" src={imageSrc} alt={imageAlt} />

<style lang="scss">
  $img-size: 7em;

  .profile-image {
    width: $img-size;
    height: $img-size;
    object-fit: cover;
    border-radius: 50%;
  }
</style>
