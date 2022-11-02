<template>
  <div class="product-view">
    <div class="product-view__image">
      <img
        :src="`http://localhost:8080/${currentProduct.img}`"
        :alt="`${currentProduct.name}`">
    </div>
    <div class="product-view__info">
      <h1>{{ currentProduct.name }}</h1>
      <h2>Price: {{ currentProduct.price }}</h2>
      <h3>Add to cart</h3>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMeta } from 'vue-meta';
import useProductsStore from '@/stores/products';

useMeta({
  title: 'Product Detail',
});

const route = useRoute();
const router = useRouter();
const product = ref([]);
const currentProduct = reactive(product);

onBeforeMount(async () => {
  const getProduct = await useProductsStore().getProduct(route.params.deviceId);

  if (getProduct.data === null) {
    router.push({ name: 'home' });
  }

  product.value = getProduct.data;
});
</script>

<style lang="postcss" scoped>
.product-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
</style>
