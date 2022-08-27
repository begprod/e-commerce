<template>
  <BaseHeader/>
  <main>
    <div class="container">
      <router-view/>
    </div>
  </main>
  <BaseFooter/>
</template>

<script setup>
import BaseHeader from '@/components/partials/BaseHeader.vue';
import BaseFooter from '@/components/partials/BaseFooter.vue';
</script>

<style>
html {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *:before, *:after {
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
  padding: 40px 40px 80px 40px;
}

img {
  max-width: 100%;
}
</style>
