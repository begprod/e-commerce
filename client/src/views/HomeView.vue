<template>
  <h1>HomePage</h1>
<!-- TODO: added top bar with filter -->
  <BaseRadioButton
    v-for="(type) in types"
    :key="type.name"
    :id="type.name"
    :value="type.name"
    :label="type.name"
    name="type"
  />
  <BaseRadioButton
    v-for="(brand) in brands"
    :key="brand.name"
    :id="brand.name"
    :value="brand.name"
    :label="brand.name"
    name="brand"
  />
  <BaseCardGrid>
    <BaseCard
      v-for="(product) in products"
      :key="product.id"
      :name="product.name"
      :price="product.price"
      :img="product.img"
    />
  </BaseCardGrid>
</template>

<script setup>
import { useMeta } from 'vue-meta';
import productStore from '@/stores/products';
import BaseCardGrid from '@/components/ui/BaseCardGrid.vue';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseRadioButton from '@/components/ui/BaseRadioButton.vue';

useMeta({
  title: 'HomePage',
});

const products = productStore().getProducts;
const types = productStore().getTypes;
const brands = productStore().getBrands;
</script>
