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
  <BaseToast
    :isVisible="isError"
  >
    <template v-slot:content>
      {{ errorMessage }}
    </template>
  </BaseToast>
  <BaseFooter/>
</template>

<script setup>
import { useMeta } from 'vue-meta';
import BaseHeader from '@/components/partials/BaseHeader.vue';
import BaseFooter from '@/components/partials/BaseFooter.vue';
import BaseToast from '@/components/ui/BaseToast.vue';

useMeta({
  title: 'Hello',
});
</script>
