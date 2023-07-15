<script lang="ts">
  import {ChevronRightIcon} from 'svelte-feather-icons';
  import { link } from 'svelte-routing';

  export let user;

  $: fullname = `${user.first_name} ${user.last_name}`;
</script>

<a href={`/users/${user.id}`} class="tile" use:link>
  <img src={user.avatar} alt="Image of ${user.first_name}">
  <div class="expanded">
    <div class="tile-title">{fullname}</div>
    <div class="tile-subtitle">{user.email}</div>
  </div>
  <ChevronRightIcon size="1.5x"/>
</a>

<style lang="scss">

  .tile {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 0.5em;
    border-radius: 0.5em;
    color: #000;
    text-decoration: none;
    
    &:hover {
      background-color: mix(#fff, #000, 95%);
    }

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    .tile-title {
      font-size: large;
      font-weight: 700;
    }

    .tile-subtitle {
      font-size: small;
    }
    
    .expanded {
      flex-grow: 1;
    }
  }
</style>