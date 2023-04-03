<template>
    <div
      class="dropdown"
      @mouseenter="openMenu"
      @mouseleave="delayedCloseMenu"
    >
      <slot name="trigger"></slot>
      <div
        class="dropdown-menu"
        :class="{ show: isOpen }"
        aria-labelledby="navbarDropdown"
        @mouseenter="openMenu"
        @mouseleave="delayedCloseMenu"
      >
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const isOpen = ref(false);
      let closeMenuTimeout;
  
      function openMenu() {
        clearTimeout(closeMenuTimeout);
        isOpen.value = true;
      }
  
      function delayedCloseMenu() {
        closeMenuTimeout = setTimeout(() => {
          isOpen.value = false;
        }, 200);
      }
  
      return { isOpen, openMenu, delayedCloseMenu };
    },
  };
  </script>
  
  
  <style scoped>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-menu {
    position: absolute;
    display: none;
    min-width: 160px;
    padding: 12px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    z-index: 1000;
  }
  
  .dropdown-menu.show {
    display: block;
  }
  
  .dropdown-menu a {
    display: block;
    padding: 8px 16px;
    color: #333;
    text-decoration: none;
    transition: all 0.3s;
  }
  
  .dropdown-menu a:hover {
    background-color: #f8f9fa;
    color: #e65100;
  }

  .dropdown:hover > .dropdown-menu {
  display: block;
}
  </style>
  