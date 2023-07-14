
<script lang="ts">
  import { navigate } from "svelte-routing";
  import { user } from "../../stores/auth";
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";
  import { titleApp, validUser } from "../../constants";

  let emailInput:string = '';
  let passInput:string = ''; 
  let showPassword:boolean = false;

  const changePassword = (e) => {
    passInput = e.target.value;
  };

  const toggleShowPassword = () => {
    showPassword = !showPassword;
  };

  const login = () => {
    if (emailInput === validUser.email && passInput === validUser.password) {
      localStorage.setItem('user', emailInput);
      user.set(localStorage.getItem('user'));

      navigate('/users', {replace: true});
    } else {
      alert('Email and password not match! Please try again!');
    }
  };

  onMount(() => {
    if ($user === 'admin@mail.com') {
      navigate('/users', {replace: true});
    }
  });

  $: {
    document.title = 'Login - ' + titleApp;
  }

  $: passwordType = showPassword ? 'text' : 'password'

</script>

<main>
  <Card>
    <div class="card-body">
      <h1>Login to Your Account</h1>
      <form method="POST" on:submit|preventDefault={login}>
        <label for="email">
          <span>Email</span>
          <input bind:value={emailInput} type="email" name="email" placeholder="example@mail.com" />
        </label>
        <label for="password">
          <span>Password</span>
          <input 
            on:input={changePassword}
            value={passInput}
            type={passwordType} 
            name="password" 
            placeholder="password" 
          />
          <a href="#!" on:click={toggleShowPassword}>{showPassword ? 'Hide' : 'Show'} Password</a>
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

      a {
        align-self: end;
        text-decoration: none;
        color: $primary-color;
        margin: 0.5em 0;

        &:hover {
          text-decoration: underline;
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