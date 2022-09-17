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
    >
      <slot />
    </select>
  </div>
</template>

<script setup>
defineProps({
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
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style>
.select {
  display: flex;
  flex-direction: column;
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
