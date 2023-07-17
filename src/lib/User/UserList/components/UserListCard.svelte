<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../../../components/Card.svelte";
  import UserTile from "./UserTile.svelte";
  import ErrorFetch from "../../../Error/ErrorFetch.svelte";
  import Loading from "../../../components/Loading.svelte";
  import Pagination from "./Pagination.svelte";

  let usersResponse;
  let isLoading: boolean = false;
  let errorMessage: string;

  const fetchUsers = async (page: number) => {
    isLoading = true;
    errorMessage = undefined;
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await res.json();
      usersResponse = data;
      isLoading = false;
    } catch (error) {
      errorMessage = error.message;
      isLoading = false;
    }
  };

  const onChangePage = (page: number) => {
    fetchUsers(page);
  };

  onMount(() => fetchUsers(1));
</script>

<Card>
  {#if isLoading}
    <Loading />
  {:else if usersResponse}
    {#each usersResponse.data as user}
      <UserTile {user} />
    {/each}
    <Pagination
      totalPages={usersResponse.total_pages}
      activePage={usersResponse.page}
      {onChangePage}
    />
  {:else if errorMessage}
    <ErrorFetch message={errorMessage} />
  {/if}
</Card>
