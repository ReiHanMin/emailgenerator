<template>
  <div id="app">
 
   <Database @gathered="gatheredEmails" />
   <SortingEmails :transferredEmails="transferredEmails"/>
</div>
</template>

<script>
import Database from '../components/Database.vue'
import SortingEmails from'./SortingEmails.vue'
export default {
  name: 'Home',
  components: { Database, SortingEmails },
data() {
        return {
            transferredEmails: undefined
        }
    },
    methods: {
        gatheredEmails(emails) {
           this.transferredEmails = emails
           console.log(this.transferredEmails)
        }
    } 
}
</script>

<style>

* {
    box-sizing: border-box;
}
body {
  background-color:#fff; 
  color: #fff;
  font-family: 'Kosugi Maru', sans-serif;
}
</style>