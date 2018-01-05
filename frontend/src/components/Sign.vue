<template>
  <div id="sign">
      <img id="octocat" src="../assets/octocat.png">
      <a href="https://github.com/login/oauth/authorize?client_id=a5c2da2210e767081a5e&redirect_uri=http://localhost:8080/"><div id="btn-sign">Sign in with github</div></a>
  </div>
</template>

<script>
export default {
  methods: {
    sign: function () {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
div#sign {
    padding-top: 70px;
    padding-bottom: 40px;
    height: 100vh;
    text-align: center;
}
img#octocat {
    width: 200px;
    margin-top: 20vh;
}
div#btn-sign {
    width: 200px;
    height: 30px;
    background-color: #232323;
    border-radius: 5px;
    color: white;
    line-height: 30px;
    margin: auto;
}
a:active {
    color: white;
    text-decoration: none;
}
</style>


