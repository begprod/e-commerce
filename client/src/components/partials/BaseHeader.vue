<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__logo">
        <img src="@/assets/logo.png" alt="logo">
      </div>
      <BaseNavigation/>
<!--      TODO: show if user is logged in-->
      <router-link to="/cart/1">Cart</router-link>
    </div>
  </div>
</template>

<script setup>
import BaseNavigation from '@/components/partials/BaseNavigation.vue';
</script>

<style lang="postcss" scoped>
.header {
  border-bottom: 1px solid #ccc;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
}

.header__logo {
  max-width: 50px;
}
</style>
