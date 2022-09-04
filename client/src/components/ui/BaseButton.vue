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
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #40b883;
  border: none;
  border-radius: 4px;
  transition: background-color .3s ease-in-out;
  cursor: pointer;
}

.button:hover {
  background-color: #2f9c68;
}
</style>
