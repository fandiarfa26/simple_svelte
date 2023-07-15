<script lang="ts">
  export let name: string;
</script>

<div class="profile-name">{name}</div>

<style lang="scss">
  @import "../../../../styles/variables.scss";

  .profile-name {
    font-weight: 700;
    font-size: x-large;
  }
</style>
