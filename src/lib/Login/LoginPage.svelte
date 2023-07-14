
<script lang="ts">
  import { navigate } from "svelte-routing";
  import { user } from "../../stores/auth";
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";
  import { titleApp, validUser } from "../../constants";

  let emailInput:string = '';
  let passInput:string = ''; 

  function login() {
    if (emailInput === validUser.email && passInput === validUser.password) {
      localStorage.setItem('user', emailInput);
      user.set(localStorage.getItem('user'));

      navigate('/users', {replace: true});
    } else {
      alert('Email and password not match! Please try again!');
    }
  }

  onMount(() => {
    if ($user === 'admin@mail.com') {
      navigate('/users', {replace: true});
    }
  });

  $: {
    document.title = 'Login - ' + titleApp;
  }

</script>

<main>
  <Card>
    <div class="card-body">
      <h1>Login to Your Account</h1>
      <form on:submit={login}>
        <label for="email">
          <span>Email</span>
          <input bind:value={emailInput} type="email" name="email" placeholder="example@mail.com" />
        </label>
        <label for="password">
            <span>Password</span>
          <input bind:value={passInput} type="password" name="password" placeholder="password" />
          
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  </Card>
</main>

<style lang="scss">
  @import "../../styles/variables.scss";
  main {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }

  .card-body {
    padding: 1em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;

    label {
      display: flex;
      flex-direction: column;

      span {
        margin-bottom: 0.3em;
      }

      input{
        padding: 0.7em;
        border-radius: 0.5em;
        border-width: 2px;
        border-color: $secondary-color;
        font-size:large;
        border-style: solid;

        &:focus {
          background: mix($primary-color, #fff, 5%);
        }
      }
    }

    button {
      width: 100%;
      border-radius: 0.5em;
      border: 0;
      background: $primary-color;
      box-shadow: none;
      padding: 0.8em 0;
      font-size:medium;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      
      &:hover {
        background-color: mix($primary-color, #000, 80%);
      }
    }
  }

  
</style>