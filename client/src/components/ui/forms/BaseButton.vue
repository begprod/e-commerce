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

<style lang="postcss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: var(--color-white);
  background-color: var(--color-green);
  border: none;
  border-radius: 4px;
  transition: opacity .3s ease-in-out;
  cursor: pointer;
}

.button:hover {
  opacity: .9;
}
</style>
