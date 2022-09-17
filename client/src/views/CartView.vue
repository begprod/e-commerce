<template>
  <h1>Cart</h1>
  <BaseCartList />
</template>

<script setup>
import { useMeta } from 'vue-meta';
import BaseCartList from '@/components/ui/BaseCartList.vue';

useMeta({
  title: 'Cart',
});
</script>
