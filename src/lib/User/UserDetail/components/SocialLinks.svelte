<script>
  import {
    FacebookIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
  } from "svelte-feather-icons";
</script>

<div class="icons">
  <a href="#!" aria-label="twitter"><TwitterIcon /></a>
  <a href="#!" aria-label="facebook"><FacebookIcon /></a>
  <a href="#!" aria-label="linkedin"><LinkedinIcon /></a>
  <a href="#!" aria-label="github"><GithubIcon /></a>
</div>

<style lang="scss">
  @import "../../../../styles/variables.scss";

  .icons {
    margin-top: 1em;
    display: flex;
    gap: 2em;

    a {
      color: #000;

      &:hover {
        color: $primary-color;
      }
    }
  }
</style>
