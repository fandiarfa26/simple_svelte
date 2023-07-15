<script lang="ts">
  import SocialLinks from "./SocialLinks.svelte";
  import ProfileQuote from "./ProfileQuote.svelte";
  import ProfileEmail from "./ProfileEmail.svelte";
  import ProfileName from "./ProfileName.svelte";
  import ProfileImage from "./ProfileImage.svelte";

  export let user;

  $: fullname = `${user.first_name} ${user.last_name}`;
</script>

<div class="profile">
  <ProfileImage
    imageSrc={user.avatar}
    imageAlt={`Image of ${user.first_name}`}
  />
  <div class="profile-body">
    <ProfileName name={fullname} />
    <ProfileEmail email={user.email} />
    <ProfileQuote />
    <SocialLinks />
  </div>
</div>

<style lang="scss">
  @import "../../../../styles/variables.scss";

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1em;

    @media screen and (min-width: $largeDeviceSize) {
      flex-direction: row;
      align-items: start;
      gap: 2em;
    }

    .profile-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;

      @media screen and (min-width: $largeDeviceSize) {
        flex-grow: 1;
        align-items: start;
      }
    }
  }
</style>
