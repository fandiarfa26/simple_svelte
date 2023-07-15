<script lang="ts">
  import { onMount } from "svelte";
  import {TwitterIcon, FacebookIcon, LinkedinIcon, GithubIcon} from "svelte-feather-icons";
  import Header from '../components/Header.svelte';
  import Card from '../components/Card.svelte';
  import Loading from '../components/Loading.svelte';
  import ContainerWrapper from "../components/ContainerWrapper.svelte";
  import Breadcrumb from "../components/Breadcrumb.svelte";
  import ErrorFetch from "../Error/ErrorFetch.svelte";
  import { titleApp } from "../../constants";

  export let id;

  let user;
  let errorMessage;

  const fetchUser = async () => {
    errorMessage = undefined;
    try {
      const res = await fetch (`https://reqres.in/api/users/${id}`);
      const data = await res.json();
      user = data.data;
    } catch (error) {
      errorMessage = error.message
    }
  };

  onMount(() => fetchUser());

  $: {
    document.title = 'Detail User - ' + titleApp;
  }
</script>

<main>
  <Header />
  <ContainerWrapper>
    <Breadcrumb items={[{path: '/users', label: 'List User'}, {label: 'Detail User'}]}/>
    <Card>
      {#if user}
        <div class="profile">
          <img class="profile-image" src={user.avatar} alt={`Avatar of ${user.first_name}`}>
          <div class="profile-list">
            <div class="profile-name">{user.first_name} {user.last_name}</div>
            <div class="profile-email">{user.email}</div>
            <div class="profile-quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, inventore!</div>
            <div class="icons">
              <a href="#!" aria-label="twitter"><TwitterIcon/></a>
              <a href="#!" aria-label="facebook"><FacebookIcon/></a>
              <a href="#!" aria-label="linkedin"><LinkedinIcon/></a>
              <a href="#!" aria-label="github"><GithubIcon/></a>
            </div>
          </div>
        </div>
        {:else}
        {#if errorMessage}
          <ErrorFetch message={errorMessage}/>
        {:else}
          <Loading />
        {/if}
      {/if}
    </Card>
  </ContainerWrapper>
</main>

<style lang="scss">
  @import "../../styles/variables.scss";

  $img-size: 7em;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 1em;

    @media screen and (min-width: $largeDeviceSize) {
      flex-direction: row;
      align-items: start;
      gap: 2em;
    }

    .profile-image {
      width: $img-size;
      height: $img-size;
      border-radius: 50%;
    }

    .profile-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;

      @media screen and (min-width: $largeDeviceSize) {
        flex-grow: 1;
        align-items: start;
      }
    }

    .profile-name {
      font-weight: 700;
      font-size: x-large;
    }

    .profile-email {
      font-weight: 700;
      font-size: medium;
      color: $primary-color;
    }

    .profile-quote {
      text-align: center;
      font-style: italic;

      @media screen and (min-width: $largeDeviceSize) {
        text-align: left;
      }
    }

    .icons {
      margin-top: 1em;
      display: flex;
      gap: 2em;

      a{
        color: #333;

        &:hover {
          color:$primary-color;
        }
      }
    }
  }
</style>