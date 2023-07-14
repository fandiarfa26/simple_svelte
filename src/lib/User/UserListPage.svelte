<script lang="ts">
  import {onMount} from 'svelte';
  import Header from '../components/Header.svelte';
  import Card from '../components/Card.svelte';
  import Loading from '../components/Loading.svelte';
  import ContainerWrapper from '../components/ContainerWrapper.svelte';
  import Breadcrumb from '../components/Breadcrumb.svelte';
  import ErrorFetch from '../Error/ErrorFetch.svelte';
  import UserTile from './UserTile.svelte';
  import { titleApp } from '../../constants';

  let users;
  let errorMessage;

  const fetchUsers = async () => {
    errorMessage = undefined;
    try {
      const res = await fetch (`https://reqres.in/api/users`);
      const data = await res.json();
      users = data.data;
    } catch (error) {
      errorMessage = error.message
    }
  };

  onMount(() => fetchUsers());

  $: {
    document.title = 'List User - ' + titleApp;
  }
</script>

<main>
  <Header />
  <ContainerWrapper>
    <Breadcrumb 
      items={[
        {label: 'List User'}
      ]}
    />
    <Card>
      <div class="listview">
          {#if users}
            {#each users as user}
              <UserTile user={user} />
            {/each}
          {:else}
            {#if errorMessage}
              <ErrorFetch message={errorMessage}/>
            {:else}
              <Loading />
            {/if}
          {/if}
        
      </div>
    </Card>
  </ContainerWrapper>
</main>