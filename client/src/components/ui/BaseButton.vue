<template>
  <button
    :type="type"
    class="button"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: false,
    default: 'button',
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #40b883;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
</style>
