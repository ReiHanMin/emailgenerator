<template>
<div class="container">
 <form class="form" id="form" action="/details">
        <div class="form-control">
     <select name="" id="addressee">
         <option value="Internal email">社内メール</option>
         <option value="Client/Business partner">顧客・ビジネスパートナーへのメール</option>
     </select>
     </div>
     <div class="form-control">
       <select name="email_type" id="email_type">
         <option value="Apologies">お詫び</option>
         <option value="Annoucements">告知</option>
         <option value="Invitations">招待</option>
         <option value="Employment">就職</option>
         <option value="Thank you message">感謝</option>
         <option value="Requests">依頼</option>
         <option value="Greetings">挨拶</option>
     </select>
     </div>
     <div class="form-control">
     <input type="text" id="title" name="title" placeholder="Type title here" required>
     </div>
     <div class="form-control">
     <textarea name="text" id="e_text" cols="30" rows="10" placeholder="Enter template text here..."></textarea>
     </div>
     <div class="form-control">
     <textarea name="j_text" id="j_text" cols="30" rows="10" placeholder="Enter Japanese translation here..."></textarea>
     </div>
     <button @click="submitEmail">Submit</button>
 </form>
</div>
</template>

<script>
 import { projectFirestore } from '../firebase/config'
export default {


    methods: {
        submitEmail() {
            projectFirestore.collection('emails').add({
            addressee: form.addressee.value,
            email_type: form.email_type.value,
            title: form.title.value,
            text: form.e_text.value,
            j_text: form.j_text.value
        })

    }
    
    }
}
</script>

<style scoped>
body {
    background-color: #f9fafb;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
}
.container {
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    width: 400px;
}
.form {
    padding: 30px 40px;
    
}

.form-control {
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;
}

.form-control input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
}

.form button {
    cursor: pointer;
    background-color: #3498db;
    border: 2px solid #3498db;
    border-radius: 4px;
    color: #fff;
    display: block;
    font-size: 16px;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
}
</style>