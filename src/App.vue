<template>
  <div>
    <Navbar />
  <router-link to="/"></router-link>
  <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
   name: 'App',
   components: { Navbar }
}   

</script>

<style>
@font-face {
  font-family: "Kosugi Maru";
  src: local("Kosugi Maru"),
   url(./fonts/KosugiMaru/KosugiMaru-Regular.ttf) format("truetype");
}
</style>
