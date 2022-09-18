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
      @click="setCurrentType(type)"
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
      @click="setCurrentBrand(brand)"
      name="brand"
    />
  </BaseBar>
  <BaseCardGrid>
      <BaseCard
        v-for="(product) in products"
        :name="product.name"
        :price="product.price"
        :img="product.img"
        :key="product.id"
        :to="{
          name: 'device-detail',
          params: {
            deviceId: product.id,
          },
        }"
        tag="router-link"
      />
  </BaseCardGrid>
</template>

<script setup>
import { useMeta } from 'vue-meta';
import useProductStore from '@/stores/products';
import BaseBar from '@/components/ui/BaseBar.vue';
import BaseRadioButton from '@/components/ui/forms/BaseRadioButton.vue';
import BaseCardGrid from '@/components/ui/BaseCardGrid.vue';
import BaseCard from '@/components/ui/BaseCard.vue';

import apiClient from '@/api/api';

useMeta({
  title: 'HomePage',
});

const products = useProductStore().getProducts;
const types = useProductStore().getTypes;
const brands = useProductStore().getBrands;

const { setCurrentType } = useProductStore();
const { setCurrentBrand } = useProductStore();

apiClient.get('/api/user/auth')
  .then((response) => {
    console.log(response);
  });
</script>
