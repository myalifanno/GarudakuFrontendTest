<script>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Sidebar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <div>
    <Navbar />
  </div>
  <div class="content">
    <header class="fixed-header">
      <h1 style="color: aliceblue;">GarudaKu Frontend Test</h1>
      <p style="color: aliceblue;">This Dashboard was made as a Frontend - test project for PT.Garuda Produksi Kreatif</p>
    </header>
    <RouterView class="scroll-content" />
    <footer class="fixed-footer">
      <p style="color: aliceblue;">&copy; 2023 My Website. All rights reserved.</p>
    </footer>
  </div>
</template>


