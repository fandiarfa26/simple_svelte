<script lang="ts">
  export let email: string;
</script>

<div class="profile-email">{email}</div>

<style lang="scss">
  @import "../../../../styles/variables.scss";

  .profile-email {
    font-weight: 700;
    font-size: medium;
    color: $primary-color;
  }
</style>
