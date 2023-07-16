<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { MetaTags } from "svelte-meta-tags";
  import LoginPage from "./lib/Login/LoginPage.svelte";
  import UserListPage from "./lib/User/UserList/UserListPage.svelte";
  import UserDetailPage from "./lib/User/UserDetail/UserDetailPage.svelte";
  import NotFoundPage from "./lib/Error/NotFoundPage.svelte";
  import { titleApp, validUser } from "./constants";
  import { userAuth } from "./stores/auth";
  import AccessDeniedPage from "./lib/Error/AccessDeniedPage.svelte";

  $: {
    document.title = titleApp;
  }

  $: isAuthenticated = $userAuth === validUser.email;
</script>

<MetaTags
  title={titleApp}
  description="Simple SPA website created with Svelte + Vite + Typescript + SCSS."
/>

<Router>
  <Route path="/">
    <LoginPage />
  </Route>

  <Route path="/users">
    {#if isAuthenticated}
      <UserListPage />
    {:else}
      <AccessDeniedPage />
    {/if}
  </Route>

  <Route path="/users/:id" let:params>
    {#if isAuthenticated}
      <UserDetailPage id={params.id} />
    {:else}
      <AccessDeniedPage />
    {/if}
  </Route>

  <Route path="*">
    <NotFoundPage />
  </Route>
</Router>
