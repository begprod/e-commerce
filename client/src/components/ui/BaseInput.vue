<template>
<div
  class="input"
>
  <label
    :for="id"
    class="input__label"
  >
    <span>
      {{ label }}
      {{ required ? '– required' : '' }}
    </span>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      class="input__field"
      :required="required"
    />
  </label>
</div>
</template>

<script setup>
import { defineEmits } from 'vue';

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
  console.log(event.target.value);
  const { value } = event.target;

  emit('update:modelValue', value);
};
</script>

<style>
.input {
  margin-bottom: 20px;
}

.input__label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
  font-size: 16px;
}

.input__field {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 18px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
}

.input__field:hover,
.input__field:focus {
  border: 1px solid #aaa;
}

.input__field:focus:invalid {
  border: 1px solid #f00;
}

.input__field:valid {
  border: 1px solid #40b883;
}
</style>
