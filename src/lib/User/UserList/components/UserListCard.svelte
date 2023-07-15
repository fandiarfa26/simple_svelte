<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../../../components/Card.svelte";
  import UserTile from "./UserTile.svelte";
  import ErrorFetch from "../../../Error/ErrorFetch.svelte";
  import Loading from "../../../components/Loading.svelte";

  let users;
  let errorMessage: string;

  const fetchUsers = async () => {
    errorMessage = undefined;
    try {
      const res = await fetch(`https://reqres.in/api/users`);
      const data = await res.json();
      users = data.data;
    } catch (error) {
      errorMessage = error.message;
    }
  };

  onMount(() => fetchUsers());
</script>

<Card>
  {#if users}
    {#each users as user}
      <UserTile {user} />
    {/each}
  {:else if errorMessage}
    <ErrorFetch message={errorMessage} />
  {:else}
    <Loading />
  {/if}
</Card>
