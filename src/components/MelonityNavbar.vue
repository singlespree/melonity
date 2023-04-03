<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container">
      <a class="navbar-brand text-white" href="#">Melonity</a>
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
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <DropdownMenu>
              <template #trigger>
                <a class="nav-link text-white" href="#">О компании</a>
              </template>
              <a class="dropdown-item" href="#">История</a>
              <a class="dropdown-item" href="#">Команда</a>
              <a class="dropdown-item" href="#">Ценности</a>
            </DropdownMenu>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Контакты</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Приобрести</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

// MelonityNavbar.vue
<script>
import DropdownMenu from './DropdownMenu.vue';

export default {
  components: {
    DropdownMenu,
  },
};
</script>


<style>
.navbar {
  background-color: #8000ff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-brand {
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
}

.nav-link {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #e65100;
  text-decoration: none;
}

.navbar-toggler {
  border-color: #ffffff;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

@media (max-width: 991.98px) {
  .navbar-nav {
    background-color: #ff9800;
    padding: 10px;
  }
}
</style>
