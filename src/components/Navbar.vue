<template>
  <header>
    <nav>
    <div class="center">
    <h1>マイ・メール</h1>
    </div>
    <div class="links">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create</router-link>
     </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10 auto;
}
.links {
  justify-content: space-between;
}
h1 {
color: #000;
font-size: 34px;
}

</style>