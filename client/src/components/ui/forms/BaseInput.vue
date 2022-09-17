<template>
<div
  class="input"
>
  <label
    :for="id"
    class="input__label"
  >
      {{ label }}
      {{ required ? '– required' : '' }}
  </label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :value="modelValue"
      :required="required"
      @input="updateInput"
      class="input__field"
    />
</div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const updateInput = (event) => {
  const { value } = event.target;

  emit('update:modelValue', value);
};
</script>

<style lang="postcss" scoped>
.input {
  margin-bottom: 20px;
}

.input__label {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
  font-size: 16px;
}

.input__field {
  padding: 0 10px;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  outline: none;
  transition: border-color .3s ease-in-out;
}

.input__field[type="file"] {
  padding: 0;
  border: none !important;
}

.input__field:hover,
.input__field:focus {
  border: 1px solid var(--color-gray-dark);
}

.input__field:valid {
  border: 1px solid var(--color-green);
}

.input__field:focus:invalid {
  border: 1px solid var(--color-red);
}
</style>
