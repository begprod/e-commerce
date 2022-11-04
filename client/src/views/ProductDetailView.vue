<template>
  <div
    v-if="!useCommonStore().isLoading"
    class="product-view"
  >
    <div class="product-view__image">
      <img
        :src="`http://localhost:8080/${product.img}`"
        :alt="`${product.name}`">
    </div>
    <div class="product-view__info">
      <h1>{{ product.name }}</h1>
      <h2>Price: {{ product.price }}</h2>
      <div class="product-view__controls">
        <BaseButton
          v-if="isAuth"
          text="Add to cart"
        />
        <router-link
          v-else
          to="/signup">
          Sign up to buy product →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMeta } from 'vue-meta';
import useUserStore from '@/stores/user';
import useProductsStore from '@/stores/products';
import useCommonStore from '@/stores/common';
import BaseButton from '@/components/ui/forms/BaseButton.vue';

useMeta({
  title: 'Product Detail',
});

const router = useRouter();
const route = useRoute();
const isAuth = computed(() => useUserStore().isAuthenticated);
const product = reactive({});

onBeforeMount(async () => {
  useCommonStore().setIsLoading(true);

  await useProductsStore().setCurrentProduct(route.params.deviceId)
    .then(() => {
      if (useProductsStore().getCurrentProduct === null) {
        router.push('/');
      }

      Object.assign(product, useProductsStore().getCurrentProduct);
    });

  useCommonStore().setIsLoading(false);
});
</script>

<style lang="postcss" scoped>
.product-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.product-view__image {
  text-align: center;
}

.product-view__image img {
  max-width: 450px;
}
</style>
