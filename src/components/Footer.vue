<script setup>
import Logo from "../assets/Logo.vue";
</script>

<template>
  <div class="footer">
    <Logo />
    <div class="diamondniam">
      Developed by <div>Diamond Niam</div> for Data Heroes.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 40px 0;

  .diamondniam {
    color: rgba(255, 255, 255, 0.5);
    width: 220px;
    text-align: center;

    div {
      display: inline;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 600;
    }
  }
}
</style>