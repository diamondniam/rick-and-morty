<script>
export default {
  name: "Buttons",
  props: ['api', 'cards', 'getData'],
  methods: {
    backPage() {
      this.api.decreasePageNumber()
      this.api.getData().then(res => this.api.cards = res.results)
    },
    nextPage() {
      this.api.increasePageNumber()
      this.api.getData().then(res => this.api.cards = res.results)
    }
  }
}
</script>

<template>
  <div class="pagination">
    <button @click="backPage()" class="back">Back</button>
    <button @click="nextPage()" class="next">Next</button>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 0 10%;

  button {
    height: 40px;
    width: 150px;
    border-radius: 15px;
    background: #1b1b1b;
    border: .5px solid rgba(255, 255, 255, 0.2);
    outline: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: #353535;
    }
  }
}
</style>