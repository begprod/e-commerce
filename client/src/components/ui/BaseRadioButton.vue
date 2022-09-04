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
  justify-content: flex-start;
  align-items: center;
}

.radio__label {
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  color: rgb(0 0 0 / 60%);
  background-color: #e4e4e4;
  border: 1px solid rgb(0 0 0 / 20%);
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgb(0 0 0 / 30%), 0 1px rgb(255 255 255 / 10%);
  transition: all .1s ease-in-out;
  cursor: pointer;
}

.radio__input {
  position: absolute !important;
  overflow: hidden;
  width: 1px;
  height: 1px;
  border: 0;
  clip: rect(0, 0, 0, 0);
}

.radio__input:checked + .radio__label {
  color: white;
  background-color: #42b983;
}
</style>
