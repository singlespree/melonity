<template>
  <div>
    <div id="carouselExample" class="carousel slide" data-bs-interval="true">
      <ol class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="4"></button>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/zeus-carousel.jpg" class="d-block w-100" alt="Image 1">
        </div>
        <div class="carousel-item">
          <img src="/cm-carousel.png" class="d-block w-100" alt="Image 2">
        </div>
        <div class="carousel-item">
          <img src="/zeus-carousel.jpg" class="d-block w-100" alt="Image 3">
        </div>
        <div class="carousel-item">
          <img src="/cm-carousel.png" class="d-block w-100" alt="Image 4">
        </div>
        <div class="carousel-item">
          <img src="/zeus-carousel.jpg" class="d-block w-100" alt="Image 5">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MelonityCarousel',
};
</script>

<style>
  .hero-carousel {
    margin: 30px 0;
  }

  .carousel-item img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #bbb;
    border: none;
    margin-left: 3px;
    margin-right: 3px;
  }

  .carousel-indicators .active {
    background-color: rgb(177, 60, 255);
  }

  .carousel-item {
    display: block;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
  }

  .carousel-item.active {
    opacity: 1;
  }
</style>
