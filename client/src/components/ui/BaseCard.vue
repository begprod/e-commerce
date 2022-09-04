<template>
  <component
    :is="tag"
    :to="to"
    class="card"
  >
    <div class="card__image">
      <img
        :src="img"
        :alt="name">
    </div>
    <div class="card__content">
      <div class="card__name">
        {{ name }}
      </div>
      <div class="card__price">
        {{ price }}
      </div>
    </div>
<!--  TODO: add to card button  -->
  </component>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: [String, Number],
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: false,
    default: 'div',
  },
  to: {
    type: Object,
    required: false,
  },
});
</script>

<style lang="postcss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
}

.card__image {
  width: 100%;
  max-height: 300px;
  margin-bottom: 10px;
  padding: 20px;
  text-align: center;
  background-color: #ececec;
}

.card__image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}

.card__content {
  width: 100%;
  text-align: left;
  color: #000;
}

.card__name {
  font-size: 20px;
  font-weight: bold;
}
</style>
