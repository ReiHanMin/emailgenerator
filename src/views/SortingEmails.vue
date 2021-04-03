<template>
   <div>
      <div v-for="email in transferredEmails" key="email.id">
     <SingleEmail :email="email" />
      </div>

    
    </div>
</template>

<script>
import SingleEmail from '../components/SingleEmail.vue'

export default {
    props: [ 'transferredEmails' ],
    components: { SingleEmail },
    
    
}
</script>

<style>

</style>