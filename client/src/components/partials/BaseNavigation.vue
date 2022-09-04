<template>
  <nav>
    <router-link
      v-if="!isAuthenticated"
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
import useUserStore from '@/stores/user';

const isAuthenticated = computed(() => useUserStore().isAuthenticated);
const isAdmin = computed(() => useUserStore().isAdmin);
</script>

<style lang="postcss" scoped>
nav {
  padding: 30px;
}

a {
  margin-right: 30px;
}
</style>
