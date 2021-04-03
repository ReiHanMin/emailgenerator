<template>
  <header>
    <h1>マイ・メール</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create</router-link>
     
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
h1 {
color: #000;
}

</style>