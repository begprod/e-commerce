<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link
      v-if="!isLoggedIn"
      to="/login">
      Sign in
    </router-link>
    <router-link
      v-if="isAdmin"
      to="/admin"
    >
      Admin panel
    </router-link>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isLoggedIn = computed(() => store.getters['auth/isAuthenticated']);
const isAdmin = computed(() => store.getters['auth/user'].role === 'ADMIN');
</script>

<style lang="postcss" scoped>
nav {
  padding: 30px;
}

a {
  margin-right: 30px;
}
</style>
