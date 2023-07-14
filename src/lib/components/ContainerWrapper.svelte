<div class="container">
  <slot/>
</div>

<style lang="scss">
  @import '../../styles/variables.scss';

  .container {
    width: 95%;
    margin: 0 auto;
    padding: 1em 0;

    @media screen and (min-width: $largeDeviceSize) {
      width: 40%;
    }
  }
</style>