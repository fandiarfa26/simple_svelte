<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../../../components/Card.svelte";
  import ErrorFetch from "../../../Error/ErrorFetch.svelte";
  import Loading from "../../../components/Loading.svelte";
  import Profile from "./Profile.svelte";

  export let id;

  let user;
  let errorMessage: string;

  const fetchUser = async () => {
    errorMessage = undefined;
    try {
      const res = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await res.json();
      user = data.data;
    } catch (error) {
      errorMessage = error.message;
    }
  };

  onMount(() => fetchUser());
</script>

<Card>
  {#if user}
    <Profile {user} />
  {:else if errorMessage}
    <ErrorFetch message={errorMessage} />
  {:else}
    <Loading />
  {/if}
</Card>
