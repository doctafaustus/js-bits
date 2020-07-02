<template>
  <div id="app">
    <Header></Header>

    <div class="wrapper">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }, 
  data() {
    return {
    };
  },
}
</script>

<style lang="scss">
@import '@/styles/_reset.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Inter', sans-serif;

  .wrapper {
    padding: 0 40px;
    max-width: 1400px;
    margin: 0 auto;
  }
}
</style>
