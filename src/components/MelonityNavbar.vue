<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#">Melonity</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">О компании</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Контакты</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-cart cart-icon"></i>
              <span class="cart-count">1</span>
              Корзина
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MelonityNavbar",
};
</script>

<style>
.navbar {
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-link {
  color: #333333;
  font-size: 14px;
  font-weight: 500;
}

.nav-link:hover {
  color: #007bff;
  text-decoration: none;
}

.cart-icon {
  font-size: 24px;
  color: #333333;
  position: relative;
}

.cart-count {
  position: absolute;
  top: -5px;
  right: -8px;
  background-color: #007bff;
  color: #ffffff;
  border-radius: 50%;
  font-size: 12px;
  padding: 2px 5px;
}
</style>
