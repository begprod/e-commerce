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
import useUserStore from '@/stores/user';
import BaseNavigation from '@/components/partials/BaseNavigation.vue';

const isAuthenticated = computed(() => useUserStore().isAuthenticated);
</script>

<style lang="postcss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  min-height: 80px;
  border-bottom: 1px solid #cccccc;
}

.header__logo {
  max-width: 50px;
}
</style>
