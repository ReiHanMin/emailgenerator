<template>
  <div>

  <h3> {{ selectedEmail }} </h3>
  </div>
</template>

<script>
 import { projectFirestore } from '../firebase/config'
export default {
  props: [ 'id' ],
  data() {
      return {
          selectedEmail: null
      }
  },
 
mounted(){
    this.postEmail()
},
  methods: {

    async postEmail () {
    try {
        const newRes = await projectFirestore.collection('emails').doc(this.id).get()
       
           this.selectedEmail = newRes.data().text
          return this.selectedEmail
        
        
    } catch(err) {
        console.log(err.message)
    }

},


     mounted(){
        postEmail()
  }
  }
}
  
</script>

<style>

</style>