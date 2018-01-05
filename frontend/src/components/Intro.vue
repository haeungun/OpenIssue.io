<template>
  <div class="intro">
    <img id="intro-logo" src="../assets/logo.png"/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  methods: {
    showMain: function () {
      setTimeout(() => {
        this.$router.replace('main')
      }, 3000)
    }
  },
  mounted () {
    this.showMain()
  },
  data () {
    return {
      msg: 'Welcome to Open Issue'
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div.intro {
  width: 100vw;
  height: 100vh;
  background-color: $baseColor;
  text-align: center;
}
#intro-logo {
  width: 300px;
  padding-top: 40vh;
}
</style>
