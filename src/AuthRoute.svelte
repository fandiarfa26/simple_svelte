<script lang="ts">
  import {Route} from 'svelte-navigator';
  import AccessDenied from './lib/Error/AccessDenied.svelte';
  import {user} from './stores/auth';
  import { validUser } from './constants';

  export let path;
  export let component;

  $: isAuthenticated = $user === validUser.email;
</script>

{#if isAuthenticated}
  <Route path={path} component={component} />
{:else}
  <Route path={path} component={AccessDenied} />
{/if}