<template>
  <div class="card">
    <div class="card__image">
      <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-5_large.png?format=jpg&quality=90&v=1530129199" alt="">
    </div>
    <div class="card__content">
      <div class="card__title">
        name
      </div>
      <div class="card__price">
        price
      </div>
    </div>
  </div>
</template>

<script setup>
// name
// img
// price
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
  margin-bottom: 10px;
  padding: 20px;
  background-color: #ececec;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card__content {
  width: 100%;
  text-align: left;
}

.card__title {
  font-size: 20px;
  font-weight: bold;
}
</style>
