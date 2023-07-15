<script lang="ts">
  export let value:string;
</script>

<label for="email">
  <span>Email</span>
  <input bind:value={value} type="email" name="email" placeholder="example@mail.com" />
</label>