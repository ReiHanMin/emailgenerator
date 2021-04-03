<template>
  <div id="app">
    <form class="form" @submit.prevent="handleSubmit">
    <div  class="select_buttons_container active">
      <button v-for="row in select_buttonsEl" :key="row.id"  class="btn" :id= "row[0,1]" ref="$event.target.id" @click="saveSelection($event)">{{ row[0,0] }}</button>
    </div>
    <div>
        
    </div>
    <!-- <select>
        <option value="">Compose</option>
        <option value="">Reply</option>
    </select>
    <select>
        <option value="">フォーマル</option>
        <option value="">ニュートラル</option>
        <option value="">カジュアル</option>
    </select> 
    <br><br> -->
    <div class="decision_buttons_container">
    <button class="btn">Previous</button>
    <button class="btn" @click="shiftMenu">Next</button>
    <button class="btn">Show me all!</button>
    </div>  
    </form>
   
</div>
</template>

<script>
 import { projectFirestore } from '../firebase/config'
export default {
data() {
    return {
    selectbox1: undefined,
    selectbox2: undefined,
    selection_first:[],
    selected: false,
    currentActive: 0,
    select_buttonsEl: [
        ['お詫び','Apologies'],
        ['告知','Announcements'],
        ['招待','Invitations'],
        ['就職', 'Employment'],
        ['感謝', 'Thank_you'],
        ['依頼', 'Requests'],
        ['挨拶', 'Greetings'],
        ],
   
    }
  },

         methods: {
            saveSelection(event) {
            console.log()
            if (!this.selection_first.includes(event.target.id)) {
                this.selection_first.push(event.target.id)
            } else if (this.selection_first.includes(event.target.id)) {
                const spliceNum = this.selection_first.indexOf(event.target.id)
                this.selection_first.splice(spliceNum, 1)
                
                }
            console.log(this.selection_first)
            },
        }
}

   

</script>

<style>


.select_buttons_container {
    display: flex;
    flex-direction: column;
   
    position: relative;
    left: 500px;
    
   
}

.selected {
    background-color: #F5EC0A;
    color: #000;
}
.decision_buttons_container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    right: 400px;
    justify-content: center;
    gap: 10px;
   
}

.btn {
     font-family: 'Kosugi Maru', sans-serif;
     font-size: 14px;
     background-color:#fff;
     width: 100px;
     height: 30px;
     margin: 5px;
     color: #000;
     border-radius: 10px;
     border:1px solid #aaa;
     box-shadow: 0 1px 1px rgba(0,0,0,0.5);
     cursor: pointer;
 
}
button:hover {
    transform: scale(1.05);
}
</style>