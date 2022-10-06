<template>
  <div
    v-if="isVisible"
    class="toast"
  >
    <div class="toast__inner">
      <div class="toast__content">
        {{ message || errorMessage }}
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
const message = computed(() => useCommonStore().getToastMessage);
const errorMessage = computed(() => useCommonStore().getErrorMessages);
</script>

<style lang="postcss" scoped>
.toast {
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

.toast__inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
}

.toast__content {
  text-align: center;
}
</style>
