<template>
  <div
    v-if="!isLoading"
  >
    <h1>Devices</h1>
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
    <BaseCardGrid>
      <BaseCard
        v-for="(product) in products"
        :name="product.name"
        :price="product.price"
        :img="`http://localhost:8080/${product.img}`"
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
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useCommonStore from '@/stores/common';
import useProductsStore from '@/stores/products';
import BaseBar from '@/components/ui/BaseBar.vue';
import BaseRadioButton from '@/components/ui/forms/BaseRadioButton.vue';
import BaseCardGrid from '@/components/ui/BaseCardGrid.vue';
import BaseCard from '@/components/ui/BaseCard.vue';

const isLoading = computed(() => useCommonStore().isLoading);

const products = computed(() => useProductsStore().products);
const types = computed(() => useProductsStore().types);
const brands = computed(() => useProductsStore().brands);

const { setCurrentType } = useProductsStore();
const { setCurrentBrand } = useProductsStore();
</script>
