<template>
  <div class="cart-list">
    <div class="cart-list__inner">
      <div class="cart-list__item">
        <div class="cart-list__item-image">
          <img src="https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png" alt="iPhone 13">
        </div>
        <div class="cart-list__item-content">
          <h3>iPhone 13</h3>
          <h4>200000</h4>
        </div>
        <div class="cart-list__item-controls">
          <BaseButton text="Delete" />
        </div>
      </div>
      <div class="cart-list__item">
        <div class="cart-list__item-image">
          <img src="https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png" alt="iPhone 13">
        </div>
        <div class="cart-list__item-content">
          <h3>iPhone 13</h3>
          <h4>200000</h4>
        </div>
        <div class="cart-list__item-controls">
          <BaseButton text="Delete" />
        </div>
      </div>
      <div class="cart-list__item">
        <div class="cart-list__item-image">
          <img src="https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png" alt="iPhone 13">
        </div>
        <div class="cart-list__item-content">
          <h3>iPhone 13</h3>
          <h4>200000</h4>
        </div>
        <div class="cart-list__item-controls">
          <BaseButton text="Delete" />
        </div>
      </div>
    </div>
    <div class="cart-list__footer">
      <h3>Total: 3000000</h3>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/forms/BaseButton.vue';
</script>

<style lang="postcss" scoped>
.cart-list {
  display: flex;
  flex-direction: column;
}

.cart-list__inner {
  display: flex;
  flex-direction: column;
}

.cart-list__footer {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.cart-list__item {
  display: flex;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
}

.cart-list__item-image {
  margin-right: 20px;
  padding: 10px;
  width: 200px;
  height: 200px;
}

.cart-list__item-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cart-list__item-content {
  flex-grow: 1;
}
</style>
