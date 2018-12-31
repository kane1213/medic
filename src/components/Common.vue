<template>
  <div>HERE</div>
</template>

<script>
export default {
  name: "CommonDefault",
  template: "<div>HERE COMES THE PAIN</div>",
  props: {
    msg: String
  }
};

const Bar = { template: "<div>HERE</div>" };
const CountDown = { 
  props: {
    msg: {
      default: "00:00:02",
      type: String
    }
  },
  template: `<div>
    <div>Count Down4</div>
    <div v-text="msg"></div>
  </div>`,
  created() {
    // var csd = Array.from(Array(10), (v,k)=> {
    //   return k+1;
    // });
    // console.log(csd);
  }
};
export { Bar, CountDown };


</script>