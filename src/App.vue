<template>
  <div id="app">
    <MelonityNavbar />
    <MelonityCarousel />
    <MelonityProductCards />
    <MelonityTestimonials />
    <MelonityFooter />
  </div>
</template>

<script>
import MelonityNavbar from "./components/MelonityNavbar.vue";
import MelonityCarousel from "./components/MelonityCarousel.vue";
import MelonityProductCards from "./components/MelonityProductCards.vue";
import MelonityTestimonials from "./components/MelonityTestimonials.vue";
import MelonityFooter from "./components/MelonityFooter.vue";

export default {
  components: {
    MelonityNavbar,
    MelonityCarousel,
    MelonityProductCards,
    MelonityTestimonials,
    MelonityFooter,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 600;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
