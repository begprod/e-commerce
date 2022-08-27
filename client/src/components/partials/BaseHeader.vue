<template>
  <div class="header">
    <router-link
      to="/"
      class="header__logo"
    >
      <img src="@/assets/logo.png" alt="logo">
    </router-link>

    <BaseNavigation/>

    <router-link
      v-if="isAuthenticated"
      to="/cart/1">
      Cart
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import userStore from '@/stores/user';
import BaseNavigation from '@/components/partials/BaseNavigation.vue';

const isAuthenticated = computed(() => userStore().isAuthenticated);
</script>

<style lang="postcss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  min-height: 80px;
  border-bottom: 1px solid #ccc;
}

.header__logo {
  max-width: 50px;
}
</style>
