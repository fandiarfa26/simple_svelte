<script lang="ts">
  import PasswordToggle from "./PasswordToggle.svelte";

  export let onChange;
  export let value: string;

  let isShow: boolean = false;

  const onToggleShow = () => {
    isShow = !isShow;
  };

  $: passwordType = isShow ? "text" : "password";
</script>

<label for="password">
  <span>Password</span>
  <input
    on:input={onChange}
    {value}
    type={passwordType}
    name="password"
    placeholder="password"
    required
  />
  <PasswordToggle onToggle={onToggleShow} {isShow} />
</label>
