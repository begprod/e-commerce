<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__item header__item_align-left">
        <div class="header__logo">
          <img src="@/assets/logo.png" alt="logo">
        </div>
      </div>

      <div class="header__item">
        <BaseNavigation/>
      </div>

      <div
        v-if="isAuthenticated"
        class="header__item header__item_align-right"
      >
        <router-link to="/cart/1">Cart</router-link>
      </div>
    </div>
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
  border-bottom: 1px solid #ccc;
}

.header__inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 30px;
}

.header__item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__item_align-left {
  justify-content: flex-start;
}

.header__item_align-right {
  justify-content: flex-end;
}

.header__logo {
  max-width: 50px;
}
</style>
