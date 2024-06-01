<script>
export default {
  props: ['api', 'getInfo'],
  data() {
    return {
      name: '',
      status: ''
    }
  },
  methods: {
    applyFilter() {
      this.api.resetPageNumber()
      this.api.setFilters(`&name=${this.name}`, this.status)
      this.getInfo()
      this.api.getData().then(res => this.api.cards = res.results)
    }
  }
}
</script>

<script setup>
import {onMounted} from "vue";

onMounted(() => {
  const buttons = document.querySelectorAll('.filter .status button')

  function clearSelected() {
    buttons.forEach(button => {
      button.classList.remove('active')
    })
  }

  buttons.forEach(button => {
    button.onclick = () => {
      clearSelected()
      button.classList.toggle('active')
    }
  })
})
</script>

<template>
  <div class="filter">
    <div class="input">
      <input v-model="name" type="text" placeholder="Search...">
      <button @click="applyFilter()">Применить</button>
    </div>
    <div class="status">
      <button class="active" @click="status = ''">All</button>
      <button @click="status = '&status=alive'">Alive</button>
      <button @click="status = '&status=dead'">Dead</button>
      <button @click="status = '&status=unknown'">Unknown</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter {
  max-width: 700px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  .input {
    width: 100%;
    display: flex;
    gap: 40px;

    input {
      width: 100%;
      outline: none;
      border-radius: 15px;
      background: #1b1b1b;
      border: .5px solid rgba(255, 255, 255, 0.2);
      font-size: 20px;
      color: rgba(255, 255, 255, 0.9);
      padding: 0 20px;
    }

    button {
      width: 70%;
      font-size: 20px;
    }
  }

  .status {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10%;

    .active {
      background: #353535;
    }
  }
}
</style>