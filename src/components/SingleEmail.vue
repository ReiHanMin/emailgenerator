<template>
  <div class="email">
   <router-link :to="{ name: 'Details', params: { id: email.id}}">
     <h2> {{ snippet }}</h2>
   </router-link>
  
  </div>
</template>

<script>
export default {
  props: [ 'email' ],
  
  
    computed: {
      snippet() {
        return this.email.text.substring(0, 200) + '...'
      }
    }
  }

</script>

<style>
  .email {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .email h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .email h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);}
</style>