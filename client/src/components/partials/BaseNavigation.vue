<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/detail/1">Detail</router-link> |
    <router-link to="/signup">Sign up</router-link> |
<!--TODO: show if user is logged in and role is admin-->
    <router-link to="/admin">Admin</router-link> |
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
