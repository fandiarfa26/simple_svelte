<script lang="ts">
  import AccessDeniedImage from "../../assets/access_denied.svg";
  import { titleApp } from "../../constants";
  import ErrorLayout from "./ErrorLayout.svelte";

  $: {
    document.title = '403 - ' + titleApp;
  }
</script>

<ErrorLayout
  image={AccessDeniedImage}
  title={`Access Denied`}
  description={`Sorry, but you don't have permission to access this page.`}
/>
