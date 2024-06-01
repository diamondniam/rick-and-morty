<script>
export default {
  props: ['card']
}
</script>

<template>
  <div class="card">
    <img :src="this.card.image" alt="">
    <div class="content">
      <div class="main">
        <div class="name">{{ this.card.name }}</div>
        <div class="status">- {{ this.card.status }}</div>
      </div>

      <div class="last-location">
        <div class="last-title">Last known location:</div>
        <div class="last-text">{{ this.card.origin.name }}</div>
      </div>

      <div class="first-location">
        <div class="last-title">First seen in:</div>
        <div class="last-text">{{ this.card.location.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 40%;
  border: .5px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  padding: 20px;
  gap: 20px;

  img {
    align-self: center;
    height: 200px;
    border-radius: 10px;
    border: .5px solid rgba(255, 255, 255, 0.2);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .name {
      font-size: 25px;
      color: #56dcd7;
    }

    .last-location, .first-location {
      color: rgba(255, 255, 255, 0.6);
    }

    .last-title, .first-title {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}

@media screen and (max-width: 800px) {
  .card {
    width: 80%;
  }
}
</style>