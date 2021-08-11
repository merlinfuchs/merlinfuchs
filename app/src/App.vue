<template>
  <div id="app" class="bg-gray-100 h-screen w-screen overflow-auto">
    <Main/>
  </div>
</template>

<script>
import Main from "./components/Main";

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
