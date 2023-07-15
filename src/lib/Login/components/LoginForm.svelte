<script lang="ts">
  import { navigate } from "svelte-routing";
  import { validUser } from "../../../constants";
  import LoginTitle from "./LoginTitle.svelte";
  import EmailInput from "./EmailInput.svelte";
  import PasswordInput from "./PasswordInput.svelte";
  import LoginButton from "./LoginButton.svelte";

  let emailInput:string = '';
  let passwordInput:string = ''; 
  
  const onChangePassword = (e) => {
    passwordInput = e.target.value;
  };

  const login = () => {
    let isValid = emailInput === validUser.email && passwordInput === validUser.password;
    if (isValid) {
      navigate('/users', {replace: true});
    } else {
      alert('Email and password not match! Please try again!');
    }
  };
</script>

<form method="POST" on:submit|preventDefault={login} class="login-form">
  <LoginTitle/>
  <EmailInput value={emailInput}/>
  <PasswordInput 
    value={passwordInput}
    onChange={onChangePassword}/>
  <LoginButton/>
</form>

<style lang="scss">
  .login-form {
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>