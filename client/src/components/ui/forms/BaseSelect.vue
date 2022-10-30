<template>
  <div class="select">
    <label
      class="select__label"
      :for="id"
    >
      {{ label }}
      {{ required ? '– required' : '' }}
    </label>
    <select
      class="select__field"
      :id="id"
      :name="name"
      :required="required"
      @change="updateSelect"
    >
      <option disabled selected value> -- select an option -- </option>
      <option
        v-for="option in optionsList"
        :key="option.name"
        :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  options: {
    type: [Array, Object],
    required: true,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const optionsList = ref(props.options);

const emit = defineEmits(['update:modelValue']);

const updateSelect = (event) => {
  const { value } = event.target;

  emit('update:modelValue', value);
};
</script>

<style>
.select {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.select__label {
  margin-bottom: 10px;
}

.select__field {
  padding: 0 10px;
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  outline: none;
  transition: border-color .3s ease-in-out;
}

.select__field:hover,
.select__field:focus {
  border: 1px solid var(--color-gray-dark);
}

.select__field:valid {
  border: 1px solid var(--color-green);
}

.select__field:focus:invalid {
  border: 1px solid var(--color-red);
}
</style>
