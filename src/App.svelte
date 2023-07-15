<script lang="ts">
  import {Router, Route} from 'svelte-routing';
  import {MetaTags} from 'svelte-meta-tags';
  import LoginPage from './lib/Login/LoginPage.svelte';
  import UserListPage from './lib/User/UserListPage.svelte';
  import UserDetailPage from './lib/User/UserDetailPage.svelte';
  import NotFoundPage from './lib/Error/NotFoundPage.svelte';
  import { titleApp } from './constants';

  $: {
    document.title = titleApp;
  }

</script>

<MetaTags title={titleApp} description="Simple SPA website created with Svelte." />

<Router>
  <Route path="/">
    <LoginPage/>
  </Route>

  <Route path="/users">
    <UserListPage/>
  </Route>
  
  <Route path="/users/:id" let:params>
    <UserDetailPage id={params.id}/>
  </Route>

  <Route path="*">
    <NotFoundPage/>
  </Route>
</Router>