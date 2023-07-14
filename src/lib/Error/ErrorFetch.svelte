<script lang="ts">
  import ErrorBugImage from "../../assets/error_bug.svg";
  export let message:string;
</script>

<div>
  <img src={ErrorBugImage} alt={`Error Image`}>
  <h2>Oops..</h2>
  <p>{message}</p>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding-bottom: 1em;

    img {
      height: 12em;
    }

    h2, p {
      text-align: center;
    }
  }
</style>