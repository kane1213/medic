<template>
  <div class="about container px-5 mb-5">
    <mt-header fixed title="fixed top">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <h1>This is an about page</h1>
    <h2 class="shiftx-enter-active">MASTER</h2>
    <div style="height: 32px;">
    <transition name="shiftx"
      v-on:enter="enter"
      v-on:leave="leave"
     >
      <h2 v-if="bound">
        <font >MASTER</font>
      </h2>
    </transition>
    </div>
    <button @click="show = !show">Click Me!</button>
    <transition>
      <!-- <div class="block" v-if="show">Block 1</div>
      <p class="block" v-else>Block 2</p> -->
      <h3 class="block" v-if="show" key="holiday">HOLIDAY</h3>
      <h3 class="block" v-else key="master">MASTER</h3>
    </transition>
    
     <mt-button type="primary" @click.stop="$router.push('user')"> 选择操作 </mt-button>

    <bar></bar>
    <div class="row my-5 py-5">
      <div class="col-4">
        <component-a class="bg-blue"></component-a>
      </div>
      <div class="col-4">
        <count-down class="bg-green"></count-down>
      </div>
      <div class="col-4">
        <div class="bg-red box-shadow">
            test123
        </div>
      </div>
    </div>
    <div>TEST123</div>

    <div class="d-table"></div>
    <div class="d-flex align-content-center">
      <div class="bg-red flex-1">RED</div>
      <div class="bg-green flex-1">GREEN <br> TEA</div>
      <div class="bg-blue flex-1">BLUE</div>
    </div>
    <div>Form</div>
    <form-ipt></form-ipt>
    <div class="p-1 bg-green mt-5">
      <div class="p-2 bg-blue text-white" draggable='true' @dragstart='drag($event)'>DRAG</div>
    </div>

    <div class="p-1 bg-red" @drop='drop($event)' @dragover='allowDrop($event)'>

    </div>

    
    <h1>Vue Select - Using v-model</h1>
    <v-select v-model="selected" :options="options"></v-select>  


  </div>
</template>

<script>

// Vue.component("component-a", {
//   template: `<div>HERE</div>`
// });



import { Bar, CountDown } from "@/components/Common.vue";
import { Toast, Header } from 'mint-ui';
import { getDoubles, getTrible } from '../assets/js/med';
// var ComponentA = new Vue({
//   template: "<div>HERE</div>"
// })

var ComponentA = {
  template: "<div>COMES</div>"
}

export default {
  name: "about",
  data() {
    return {
      show: false,
      animationInfinite: {
        classes: 'fadeIn',
        duration: 5000,
        iteration: 'infinite'
      },
      bound: false,
      tmpEl: null,
      options: [      
        {id: 1, label: 'foo'},
        {id: 3, label: 'bar'},
        {id: 2, label: 'baz'},
      ],
      selected: {id: 3, label: 'bar'},
    }
  },
  components: {
    Bar,
    ComponentA,
    CountDown,
    Toast,
    Header
  },
  methods: {
    beforeAppear: function(el) {
      console.log('beforeAppear')
    },
    appear: function(el) {
      console.log('appear!')
    },
    afterAppear: function(el) {
      console.log('afterAppear!');
    },
    beforeEnter(el) {

    },
    enter(el) {
      setTimeout(()=> this.bound = false, 3000)
    },
    leave(el) {
      setTimeout(()=> this.bound = true, 1000)
    },
    drag(event) {
      //console.log(event);
      this.tmpEl = event.currentTarget;
    },
    drop:function(event){
      event.preventDefault();
      event.target.appendChild(this.tmpEl);
      //this.tmpEl = null;
    },
    allowDrop:function(event){
      event.target.appendChild(this.tmpEl);
      event.preventDefault();
      
    },

  },
  mounted() {
    var _this = this;
    setTimeout(function(){
      Toast('Upload Complete');
      _this.show = true;
      _this.bound = true;
    }, 2000);

  }
}

</script>

<style lang="scss">

  .shiftx-enter-active {
    animation: bounce-in-top 2s infinite;
  }
  .shiftx-leave-active {
    animation: goUp 0.25s;
  }

  
  @keyframes bounce-in-top {
  0% {
    transform: translateY(-150%);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-40%);        
    animation-timing-function: ease-in;
    opacity: 1;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  81% {
    transform: translateY(-20.5%);        
    animation-timing-function: ease-in;
    opacity: 1;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  95% {
    transform: translateY(-5%);        
    animation-timing-function: ease-in;
    opacity: 1;
  }
  99% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}

  @keyframes goUp {
    0% { 
      transform: translateY(0%);
      animation-timing-function: ease-in;
      opacity: 1;
    }
    
    100% { 
      transform: translateY(-150%);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    
  }

  @keyframes go {
    0% { 
      transform: scale(2, 2);
      opacity: 0; 
    }
    50% { 
      transform: scale(1, 1);
      opacity: 1;
    }
    100% { 
      transform: scale(2, 2);
      opacity: 0;
    }
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .block {
    background: #999;
    color: #fff;
    display: table-cell;
    width: 100px;
    height: 100px;
    text-align: center;
    vertical-align: middle;
  }

  .v-leave { opacity: 1; }
  .v-leave-active { transition: opacity 2s }
  .v-leave-to { opacity: 0; }
  .v-enter { opacity: 0; }
  .v-enter-active  { transition: opacity 2s }
  .v-enter-to { opacity: 1; }

</style>