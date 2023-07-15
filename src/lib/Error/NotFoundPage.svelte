<script lang="ts">
  import NotFoundImage from "../../assets/page_not_found.svg";
  import { titleApp } from "../../constants";
  import ErrorLayout from "./components/ErrorPageLayout.svelte";

  $: {
    document.title = "404 - " + titleApp;
  }
</script>

<ErrorLayout
  image={NotFoundImage}
  title={`Page Not Found`}
  description={`The page you're looking for can't be found.`}
/>
