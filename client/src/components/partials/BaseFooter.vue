<template>
  <div class="footer">
    <div class="footer__inner">
      2022 - {{ year }}
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style lang="postcss" scoped>
.footer {
  border-top: 1px solid #cccccc;
}

.footer__inner {
  padding: 15px 30px;
  text-align: center;
}
</style>
