<template>
  <div class="product container">
    <!-- <div class="page-infinite">
        <div class="page-infinite-wrapper">
            <ul class="page-infinite-list"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <li v-for="item in list" class="page-infinite-listitem">
                    <component-a :item="item"></component-a>
                </li>
            </ul>
        </div>
    </div> -->
    <!-- <mt-loadmore :top-method="loadTop" ref="loadmore">
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
         class="page-loadmore-list">
            <li class='page-loadmore-listitem' v-for="item in list">
                <component-a :item="item"></component-a>
            </li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">Loading...</span>
        </div>
    </mt-loadmore> -->
    <!-- <mt-button type="primary" @click="sheetVisible=!sheetVisible"> Show ActionSheet </mt-button>
    <mt-actionsheet
    :actions="actions"
    v-model="sheetVisible">
    </mt-actionsheet> -->

    <!-- <mt-button type="primary" @click="popupVisible=!popupVisible"> Show Popup </mt-button>
    <mt-popup
    v-model="popupVisible"
    
    
    closeOnClickModal="false"
    >
    <div class="container">
        <h1>TITLE</h1>
    </div>
    </mt-popup> -->
    <div class="page-swipe">
    <mt-swipe :auto="10000">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
    </div>
  </div>
</template>

<script>


//Vue.use(InfiniteScroll);
var ComponentA = {
    props: {
        item: {
            type: Number,
            default: 0
        }
    },
    template: "<div>item {{item}}</div>"
}

//import { Indicator } from 'mint-ui';

import { Loadmore } from 'mint-ui';
import { MessageBox } from 'mint-ui';
//import { Swipe, SwipeItem } from 'mint-ui';

export default {
  name: "products",
  data() {
      return {
          list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          topStatus: "",
          sheetVisible: false,
          popupVisible: false,
          actions: [
              {name: 'Yes', method: ''},
              {name: 'No', method: ''}
          ]
      }
  },
  components: {
      ComponentA,
      Loadmore,
      
  },
  methods: {
      loadTop() {
          //this.$refs.loadmore.onTopLoaded();
          alert("TOP");
      },
      loadBottom() {
          alert("BOTTOM");
      },
      loadMore() {
          this.loading = true;
            setTimeout(() => {
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 10; i++) {
                this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
      }
  },
  mounted() {
      //MessageBox('Notice', 'You clicked the button');
//       MessageBox({
//   title: 'Notice',
//   message: 'Are you sure?',
//   showCancelButton: true
// }).then(action => {
//     alert(action);
// });

//     MessageBox.prompt('Please tell me your name').then(({ value, action }) => {
//         alert(value + " & " + action);
// });

//     Indicator.open({
//   text: 'Loading...',
//   spinnerType: 'fading-circle'
// });
    
  }
}

</script>

<style>
ol, ul {
    list-style: none outside none;
}
dd, dl, li, ol, ul {
    margin: 0;
    padding: 0;
}

.page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle;
}
.page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px;
}
.page-loadmore-desc:last-of-type {
    border-bottom: solid 1px #eee;
}
.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #eee;
    text-align: center;
}
.page-loadmore-listitem:first-child {
    border-top: solid 1px #eee;
}
.page-loadmore-wrapper {
    overflow: scroll;
}
.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}
.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
}


.mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 100%;
}

.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
    line-height: 200px;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}



</style>