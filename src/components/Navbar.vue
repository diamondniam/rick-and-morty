<script setup>
import Logo from "../assets/Logo.vue";
</script>

<template>
  <div class="navbar">
    <Logo />
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: .5px solid rgba(255, 255, 255, 0.2);
}
</style>