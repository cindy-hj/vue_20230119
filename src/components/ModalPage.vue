<template>
    <div v-for="product in state.list" :key="product">
      <div class="blackBg" v-if="product.id === true">
        <div class="whiteBg">
          <h3>{{ product.title }}</h3>
          <p><img :src="product.img" style="width: 200px;" /></p>
          <p>{{ product.detail }}</p>
          <p>{{ product.price }}원</p>
          <p><button @click="product.id = false">닫기</button></p>
        </div>
      </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import { list } from '../exportFile.js'


export default {
    setup () {
      const state = reactive ({
        item: ["신발","가방","구두"],
        price: [3000,5000,2000],
        menuList: ["홈","상품목록","게시판","리뷰"],
        // openModal: false,
        list
      });
        return {
          state
        }
    }
}
</script>

<style lang="css" scoped>
.blackBg {
  width: 100%;
  height: 100%;
  /* a는 투명도값, 0은 투명, 1은 불투명 */
  background-color: rgba(0,0,0,0.1);
  position: fixed;
  padding: 20px;
}
.whiteBg {
  width: 80%;
  border: 1px solid #cccccc;
  border-radius: 20px;
  background-color: aliceblue;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
}
</style>