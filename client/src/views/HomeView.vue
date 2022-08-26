<template>
  <h1>HomePage</h1>
  <BaseCardGrid>
    <BaseCard/>
    <BaseCard/>
    <BaseCard/>
    <BaseCard/>
    <BaseCard/>
  </BaseCardGrid>
</template>

<script setup>
// @ is an alias to /src
import { useStore } from 'vuex';
import BaseCardGrid from '@/components/ui/BaseCardGrid.vue';
import BaseCard from '@/components/ui/BaseCard.vue';

const store = useStore();
console.log(store.getters['auth/isAuthenticated']);
</script>
