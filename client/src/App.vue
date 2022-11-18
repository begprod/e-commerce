<template>
  <BaseHeader/>
  <main>
    <div class="container">
      <router-view/>
    </div>
  </main>
  <BaseToast/>
  <BaseFooter/>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import useCommonStore from '@/stores/common';
import useUserStore from '@/stores/user';
import useProductsStore from '@/stores/products';
import BaseHeader from '@/components/partials/BaseHeader.vue';
import BaseFooter from '@/components/partials/BaseFooter.vue';
import BaseToast from '@/components/ui/BaseToast.vue';

const userStore = useUserStore();

onBeforeMount(async () => {
  useCommonStore().setIsLoading(true);

  await useProductsStore().setProducts();
  await useProductsStore().setTypes();
  await useProductsStore().setBrands();
  await useUserStore().setCart(userStore.currentUser.id);
});
</script>
