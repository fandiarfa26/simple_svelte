<script lang="ts">
  import {Router, Route} from 'svelte-navigator';
  import LoginPage from './lib/Login/LoginPage.svelte';
  import UserListPage from './lib/User/UserListPage.svelte';
  import UserDetailPage from './lib/User/UserDetailPage.svelte';
  import NotFoundPage from './lib/Error/NotFoundPage.svelte';
  import AuthRoute from './AuthRoute.svelte';
  import { titleApp } from './constants';

  $: {
    document.title = titleApp;
  }
</script>

<Router>
  <Route path="/" component={LoginPage}/>
  <Route path="users/*">
    <AuthRoute path="/" component={UserListPage}/>
    <AuthRoute path=":id"  component={UserDetailPage}/>
  </Route>
  <Route path="*" component={NotFoundPage}/>
</Router>