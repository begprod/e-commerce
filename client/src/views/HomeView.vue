<template>
  <h1>Devices</h1>
  <BaseBar
    title="Type"
  >
    <BaseRadioButton
      v-for="(type) in types"
      :key="type.name"
      :id="type.name"
      :value="type.name"
      :label="type.name"
      name="type"
    />
  </BaseBar>
  <BaseBar
    title="Brand"
  >
    <BaseRadioButton
      v-for="(brand) in brands"
      :key="brand.name"
      :id="brand.name"
      :value="brand.name"
      :label="brand.name"
      name="brand"
    />
  </BaseBar>
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
import BaseBar from '@/components/ui/BaseBar.vue';
import BaseRadioButton from '@/components/ui/BaseRadioButton.vue';
import BaseCardGrid from '@/components/ui/BaseCardGrid.vue';
import BaseCard from '@/components/ui/BaseCard.vue';

useMeta({
  title: 'HomePage',
});

const products = productStore().getProducts;
const types = productStore().getTypes;
const brands = productStore().getBrands;
</script>
