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
  }
}
</script>