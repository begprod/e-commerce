<template>
  <form
    class="form"
    @submit.prevent="onSubmit"
  >
    <div class="form__title">
      <slot name="title"/>
    </div>
    <div class="form__fields">
      <slot name="fields"/>
    </div>
    <div class="form__controls">
      <slot name="controls"/>
    </div>
  </form>
</template>

<script setup>
const emit = defineEmits(['submit']);

const onSubmit = (event) => {
  emit('submit', event);
};
</script>

<style lang="postcss" scoped>
.form {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  border: 1px solid var(--color-gray);
  border-radius: 5px;
}

.form__title {
  margin-bottom: 30px;
}

.form__fields {
  margin-bottom: 30px;
}

.form__controls {
  display: flex;
  flex-direction: column;
  align-items: center;
}

:deep(h2) {
  margin: 0;
}

:deep(fieldset) {
  margin: 0;
  padding: 0;
  border: none;
}

:deep(button) {
  margin-bottom: 10px;
}
</style>
