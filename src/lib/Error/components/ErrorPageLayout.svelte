<script lang="ts">
  import ErrorPageImage from "./ErrorPageImage.svelte";
  import ErrorPageTitle from "./ErrorPageTitle.svelte";
  import ErrorPageDesc from "./ErrorPageDesc.svelte";
  import BackToHomeButton from "./BackToHomeButton.svelte";

  export let image;
  export let title;
  export let description;
</script>

<main>
  <div>
    <ErrorPageImage imageSrc={image} />
    <ErrorPageTitle text={title} />
    <ErrorPageDesc text={description} />
    <BackToHomeButton />
  </div>
</main>

<style lang="scss">
  main {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
</style>
