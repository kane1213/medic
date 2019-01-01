<template>
  <div class="about container">
    <h1>This is an about page</h1>
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

  </div>
</template>

<script>

// Vue.component("component-a", {
//   template: `<div>HERE</div>`
// });

import { Bar, CountDown } from "@/components/Common.vue";
import { Toast } from 'mint-ui';
// var ComponentA = new Vue({
//   template: "<div>HERE</div>"
// })

var ComponentA = {
  template: "<div>COMES</div>"
}

export default {
  name: "about",
  components: {
    Bar,
    ComponentA,
    CountDown,
    Toast
  },
  mounted() {
    setTimeout(function(){
      Toast('Upload Complete');
    }, 2000);
    
  }
}

</script>

