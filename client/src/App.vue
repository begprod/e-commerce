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
import BaseHeader from '@/components/partials/BaseHeader.vue';
import BaseFooter from '@/components/partials/BaseFooter.vue';
import BaseToast from '@/components/ui/BaseToast.vue';
</script>
