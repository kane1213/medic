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
    <div class="d-flex justify-content-end align-content-center">
      <div class="bg-red">RED</div>
      <div class="bg-green">GREEN <br> TEA</div>
      <div class="bg-blue">BLUE</div>
    </div>

  </div>
</template>

<script>

// Vue.component("component-a", {
//   template: `<div>HERE</div>`
// });

import { Bar, CountDown } from "@/components/Common.vue";
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
    CountDown
  }
}

</script>

