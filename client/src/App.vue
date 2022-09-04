<template>
  <metainfo>
    <template v-slot="{ content }">{{ content }}</template>
  </metainfo>
  <BaseHeader/>
  <main>
    <div class="container">
      <router-view/>
    </div>
  </main>
  <BaseFooter/>
</template>

<script setup>
import { useMeta } from 'vue-meta';
import BaseHeader from '@/components/partials/BaseHeader.vue';
import BaseFooter from '@/components/partials/BaseFooter.vue';

useMeta({
  title: 'Hello',
});
</script>
