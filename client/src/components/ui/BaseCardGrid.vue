<template>
  <div
    class="grid"
    :class="classObject"
  >
    <slot/>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  columns: {
    type: Number,
    default: 3,
  },
});

const classObject = computed(() => ({
  'grid-columns-1': props.columns === 1,
  'grid-columns-3': props.columns === 3,
}));
</script>

<style lang="postcss" scoped>
.grid {
  display: grid;
  grid-gap: 60px 40px;
}

.grid-columns-1 {
  grid-template-columns: 1fr;
}

.grid-columns-3 {
  grid-template-columns: repeat(3, 1fr);
}
</style>
