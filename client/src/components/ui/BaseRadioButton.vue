<template>
  <div
    class="radio"
  >
    <input
      :id="id"
      :value="value"
      :name="name"
      type="radio"
      class="radio__input"
      @click="onClick"
    />
    <label
      :for="id"
      class="radio__label"
    >
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
.radio {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
}

.radio__label {
  padding: 8px 16px;
  background-color: #e4e4e4;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  line-height: 1;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgb(0 0 0 / 30%), 0 1px rgb(255 255 255 / 10%);
  transition: all 0.1s ease-in-out;
  cursor: pointer;
}

.radio__input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.radio__input:checked + .radio__label {
  color: white;
  background-color: #42b983;
}
</style>
