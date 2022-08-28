<template>
  <div
    class="radio"
  >
    <label
      :for="id"
    >
      <input
        :id="id"
        :value="value"
        :name="name"
        :checked="checked"
        type="radio"
        @click="onClick"
      />
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: false,
    default: false,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const onClick = (event) => {
  const { value } = event.target;

  emit('update:modelValue', value);
};
</script>

<style lang="postcss" scoped>
/* TODO: add styles */
</style>
