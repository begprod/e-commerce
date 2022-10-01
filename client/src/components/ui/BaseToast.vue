<template>
  <div
    v-if="isVisible"
    class="tooltip"
  >
    <div class="tooltip__inner">
      <div class="tooltip__content">
        {{ errorMessage }}
      </div>
      <BaseButton
        text="Close"
        @click="useCommonStore().setToastMessageIsVisible(false)"
      />
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import useCommonStore from '@/stores/common';
import BaseButton from '@/components/ui/forms/BaseButton.vue';

const isVisible = computed(() => useCommonStore().getToastMessageIsVisible);
const errorMessage = computed(() => useCommonStore().getErrorMessages);
</script>

<style lang="postcss" scoped>
.tooltip {
  position: fixed;
  z-index: 100;
  bottom: 30px;
  left: 50%;
  width: 300px;
  height: 150px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 20%);
  transform: translateX(-50%);
}

.tooltip__inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
}

.tooltip__content {
  text-align: center;
}
</style>
