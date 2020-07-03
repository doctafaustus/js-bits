<template>
  <div id="home">
    <Hero></Hero>
    <SnippetList></SnippetList>
  </div>
</template>

<script>
import Hero from '@/components/Hero';
import SnippetList from '@/components/SnippetList';

export default {
  name: 'Home',
  components: {
    SnippetList,
    Hero
  }, 
  data() {
    return {
    };
  },
  created() {
      fetch('http://localhost:8081/api/test', {
        method: 'GET',
        headers: { 'Content-Type': 'text/html' },
      })
      .then(html => console.log('?', html) || html.text())
      .then(data => {
        console.log('api/place-order response: \n', data);
      });
  }
}
</script>