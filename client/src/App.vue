<template>
  <metainfo>
    <template v-slot="{ content }">{{ content }}</template>
  </metainfo>
  <BaseHeader/>
  <main>
    <div class="container">
      <router-view/>
    </div>
  </main>
  <BaseFooter/>
</template>

<script setup>
import { useMeta } from 'vue-meta';
import BaseHeader from '@/components/partials/BaseHeader.vue';
import BaseFooter from '@/components/partials/BaseFooter.vue';

useMeta({
  title: 'Hello',
});
</script>

<style>
html {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex-grow: 1;
}

.container {
  padding: 40px 40px 80px;
}

img {
  max-width: 100%;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: dodgerblue;
  transition: color .3s ease-in-out;
}

a:last-child {
  margin-right: 0;
}

a:visited {
  color: dodgerblue;
}

a.router-link-exact-active {
  color: #42b983;
}

a:hover {
  color: cornflowerblue;
}
</style>
