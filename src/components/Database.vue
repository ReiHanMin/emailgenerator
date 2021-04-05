<template>
  <div id="app">
      
    <div class="overall_container">   
    <transition-group tag="div" name="test" v-if="currentActive === 0"   class="select_buttons_container">
      <button   v-for="row in select_buttonsEl[0]" :key="row.id"  class="btn  unselected" :id= "row.e_name" @click="saveSelection($event)">{{ row.j_name }}
      </button>
    </transition-group>
    <transition-group tag="div" name="test_two" v-if="currentActive === 1"  class="select_buttons_container" >
        <button  v-for="row in select_buttonsEl[1]" :key="row.id" class="btn unselected " :id= "row.e_name" @click="saveSelection($event)"> {{ row.j_name }}
        </button>
    </transition-group>
    <transition-group tag="div" v-if="currentActive === 2" name="test_three" class="select_buttons_container" >
        <button  v-for="row in select_buttonsEl[2]" :key="row.id" class="btn unselected " :id= "row.e_name" @click="saveSelection($event)"> {{ row.j_name }}
        </button>
    </transition-group>
    <div class="decision_buttons_container">
    <button class="btn " @click="shiftMenuTwo">前</button>
    <button class="btn " ref="name" @click="shiftMenuOne">次</button>
    <button class="btn " @click="showAll" >兎に角全部</button>
    </div>  
    </div>
  
   
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
    selection_second:[],
    selection_third:[],
    selected: false,
    currentActive: 0,
    select_buttonsEl: [
    [
        {j_name:'お詫び', e_name:'Apologies', id: 1},
        {j_name:'告知', e_name:'Announcements', id: 2},
        {j_name:'招待',e_name: 'Invitations', id: 3},
        {j_name:'就職', e_name:'Employment', id: 4},
        {j_name:'感謝', e_name:'Thank_you', id: 5},
        {j_name:'依頼', e_name:'Requests', id: 6},
        {j_name:'挨拶', e_name:'Greetings', id: 7},
        ],
    [
        {j_name:'新メール', e_name:'Compose', id: 8},
        {j_name:'返事', e_name:'Reply', id: 9},
    ],
    [   {j_name:'フォーマル', e_name:'Formal', id: 10},
        {j_name:'ニュートラル', e_name:'Neutral', id: 11},
        {j_name:'カジュアル', e_name:'Casual', id: 12},

    ],
    ]
    }
  },
    
         methods: {
            saveSelection(event) {
            if (this.currentActive === 0){
            if (!this.selection_first.includes(event.target.id)) {
                this.selection_first.push(event.target.id)
                event.toElement.classList.remove('unselected')
                event.toElement.classList.add('selected')
            } else if (this.selection_first.includes(event.target.id)) {
                const spliceNum = this.selection_first.indexOf(event.target.id)
                this.selection_first.splice(spliceNum, 1)
                event.toElement.classList.remove('selected')
                event.toElement.classList.add('unselected')
                
                }
            } else if (this.currentActive === 1) {    
            if (!this.selection_second.includes(event.target.id)) {
                this.selection_second.push(event.target.id)
            } else if (this.selection_second.includes(event.target.id)) {
                const spliceNum = this.selection_second.indexOf(event.target.id)
                this.selection_second.splice(spliceNum, 1)
                
                }
            } else if (this.currentActive === 2) {    
            if (!this.selection_third.includes(event.target.id)) {
                this.selection_third.push(event.target.id)
            } else if (this.selection_third.includes(event.target.id)) {
                const spliceNum = this.selection_third.indexOf(event.target.id)
                this.selection_third.splice(spliceNum, 1)
                
                }
            }
            
            },
            shiftMenuOne() {
               this.currentActive += 1 
                if (this.currentActive === 2) {
                   this.$refs.name.innerText = 'Go!'
               }
              
        },
            shiftMenuTwo() {
                this.currentActive -= 1
                 if (this.currentActive < 2) {
                   this.$refs.name.innerText = '次'
               }
        },
            showAll() {
                console.log(this.selection_first)
                console.log(this.selection_second)
                console.log(this.selection_third)
            }
            // controlActive(){
            //     if(this.currentActive < 0) {
            //         this.currentActive = 0
            //     }
            //     else if (this.currentActive === 0) {
            //     console.log(this.$refs.select_buttons_0.className = 'select_buttons_container btn-group active')
              
                
            //     }
            //     else if (this.currentActive === 1) {
            //     console.log(this.$refs.select_buttons_0.className = 'btn btn-group left unselected')
            //     console.log(this.$refs.select_buttons_1.className = 'btn btn-group active unselected')
            //     }
            //     else if (this.currentActive === 2) {
            //     console.log(this.$refs.select_buttons_1.className = 'btn btn-group left unselected')
            //    console.log(this.$refs.select_buttons_2.className = 'btn btn-group active unselected')
            //     }
            // },
    },
             
          
}
             

        

   

</script>

<style>

.overall_container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center; 
    position: relative;
    
}

.select_buttons_container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 450px;
    
}

.decision_buttons_container {
    display: flex;
    flex-direction: column;
    position: absolute;
     top: 150px;
    right: 450px;
   
}

.btn {
     font-family: 'Kosugi Maru', sans-serif;
     font-size: 14px;
     width: 100px;
     height: 30px;
     margin: 5px;
     border-radius: 10px;
     border:1px solid #aaa;
     box-shadow: 0 1px 1px rgba(0,0,0,0.5);
     cursor: pointer;
     outline: none;
 
}

.selected {
    background-color: #F5EC0A;
    color: #000;
}
.unselected {
    background-color: #fff;
    color: #000;
}

button:hover {
    transform: scale(1.05);
}

.test-leave-from{
    opacity: 1;
    transform: translateX(0);
}
.test-leave-to{
    opacity: 0;
    transform: translateX(150px);
}
.test-leave-active{
    transition: all 3s ease;
}

 


</style>