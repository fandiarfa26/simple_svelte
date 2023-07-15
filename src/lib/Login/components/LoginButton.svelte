<button type="submit" class="login-button">Login</button>

<style lang="scss">
  @import "../../../styles/variables.scss";
  
  .login-button {
    width: 100%;
    background: $primary-color;
    
    &:hover {
      background-color: mix($primary-color, #000, 80%);
    }
  }
</style>