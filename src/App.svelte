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

<MetaTags 
  title={titleApp} 
  description="Simple SPA website created with Svelte." 
  robotsProps={{
    noarchive: true,
    nosnippet: true,
    maxSnippet: -1,
    maxImagePreview: 'none',
    maxVideoPreview: -1,
    notranslate: true,
    noimageindex: true,
    unavailableAfter: '25 Jun 2010 15:00:00 PST'
  }}
/>

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