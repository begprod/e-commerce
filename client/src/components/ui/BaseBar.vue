<template>
  <div class="bar">
    <h3 class="bar__title">
      {{ title }}
    </h3>
    <div class="bar__tags">
      <slot/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<style lang="postcss" scoped>
.bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.bar__title {
  margin: 0 20px 0 0;
}

.bar__tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

:deep(.radio) {
  margin-right: 10px;
}
</style>
