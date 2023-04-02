<template>
    <nav>
      <!-- Ваш код для навигационной панели -->
    </nav>
  </template>
  
  <script>
  export default {
    name: 'MelonityNavbar',
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
  