<script lang="ts">
  import ErrorBugImage from "../../assets/error_bug.svg";
  export let message: string;
</script>

<div>
  <img src={ErrorBugImage} alt={`Error Image`} width="300" height="200" />
  <h2>Oops..</h2>
  <p>{message}</p>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    padding-bottom: 1em;

    h2,
    p {
      text-align: center;
    }
  }
</style>
