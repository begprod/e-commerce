<template>
  <h1>HomePage</h1>
</template>

<script setup>
// @ is an alias to /src
import { useStore } from 'vuex';

const store = useStore();
console.log(store.getters['auth/isAuthenticated']);
</script>
