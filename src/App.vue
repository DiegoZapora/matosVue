<template>
  <NavBar :logo="logo_src" :app-name="app_name" />
  <RouterView />

</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      logo_src: "/300.png",
      app_name: "Matos Burguer"
    }
  }
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.mainContainer {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
