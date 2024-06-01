<script>
import { Api } from "../stores/api.js";
import Card from "./Card.vue";
import Buttons from "./Buttons.vue";
import Filter from "./Filter.vue"

export default {
  components: {Buttons, Card, Filter },
  data() {
    return {
      api: Api()
    }
  },
  methods: {
    getInfo() {
      this.api.getData().then(res => this.api.pagesQuantity = res.info.pages)
    },
    getData() {
      this.api.getData().then(res => this.api.cards = res.results)
    }
  },
  mounted() {
    this.getInfo()
    this.getData()
  }
}
</script>

<template>
  <div class="container">
    <Filter :api="api" :getInfo="getInfo" />
    <div class="card-wrapper">
      <Card v-for="card in api.cards" :key="card" :card="card" />
    </div>
    <Buttons :api="api" :cards="api.cards"/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}

.card-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin: 40px 0;
}

@media screen and (max-width: 800px) {
  .card-wrapper {
    flex-direction: column;
  }
}
</style>