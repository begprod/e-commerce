<template>
  <div
    class="grid column-gap-60 row-gap-40"
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
