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
import { useMeta } from 'vue-meta';
import BaseCardGrid from '@/components/ui/BaseCardGrid.vue';
import BaseCard from '@/components/ui/BaseCard.vue';

useMeta({
  title: 'HomePage',
});
</script>
