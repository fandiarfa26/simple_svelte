<script lang="ts">
  export let onChange;
  export let value: string;
</script>

<label for="email">
  <span>Email</span>
  <input
    on:input={onChange}
    {value}
    type="email"
    name="email"
    placeholder="example@mail.com"
  />
</label>
