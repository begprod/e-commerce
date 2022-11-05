<template>
  <div class="header">
    <div class="container header__inner">
      <router-link
        to="/"
        class="header__logo"
      >
        <img src="@/assets/logo.png" alt="logo">
      </router-link>

      <BaseNavigation/>

      <div
        v-if="isAuthenticated"
        class="header__item"
      >
        <div>Hello,{{ currentUser.email }}</div>
        <router-link
          to="/cart/1">
          Cart({{ cart.length }})
        </router-link>
        <BaseButton
          text="Logout"
          type="button"
          class="header__logout"
          @click="logout"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import useUserStore from '@/stores/user';
import BaseButton from '@/components/ui/forms/BaseButton.vue';
import BaseNavigation from '@/components/partials/BaseNavigation.vue';

const router = useRouter();

const currentUser = computed(() => useUserStore().currentUser);
const isAuthenticated = computed(() => useUserStore().isAuthenticated);
const cart = computed(() => useUserStore().currentCart);

const logout = () => {
  router.push({ name: 'home' })
    .then(() => {
      useUserStore().setCurrentUser({});
      useUserStore().setAuthenticated(false);

      localStorage.removeItem('token');
    });
};
</script>

<style lang="postcss" scoped>
.header {
  padding: 0 40px;
  border-bottom: 1px solid #cccccc;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  min-height: 80px;
}

.header__item {
  display: flex;
  align-items: center;
}

.header__item > * {
  margin-right: 20px;
}

.header__item > *:last-child {
  margin-right: 0;
}

.header__logo {
  max-width: 50px;
}

.header__logout {
  margin-left: 15px;
}
</style>
