<script>
import CardHolder from "./components/CardHolder.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, CardHolder, Footer }
}
</script>

<template>
  <Navbar />
  <CardHolder />
  <Footer />
</template>