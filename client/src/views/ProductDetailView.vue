<template>
  <div class="product-view">
    <div class="product-view__image">
      <img src="https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png" alt="iPhone 13 pro max">
    </div>
    <div class="product-view__info">
      <h1>iPhone 13 pro max</h1>
      <h2>Price: 1000$</h2>
      <h3>Add to cart</h3>
    </div>
  </div>
</template>

<script setup>
import { useMeta } from 'vue-meta';

useMeta({
  title: 'Product Detail',
});
</script>

<style lang="postcss" scoped>
.product-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
</style>
