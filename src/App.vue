<template>
  <h1>사이트이름</h1>
  <!-- {{ exportFile.exportFile2 }} import, export 연습-->
  <!-- => 반복적인 형태, 사용이 있는 내용만 데이터 바인딩 -->
  <!-- component를 너무 많이 분리 시키면 더 별로! 부모 데이터 건드리거나 데이터 가져와서 활용할때 관리가 힘들어 -->
  <div class="wrap">
    <!-- 2. 메뉴추가, for문으로 반복작업하기 -->
    <div class="menu">
      <!-- 그 메뉴만 클릭해서 이동할때는 index를 이용하기 때문에 element보다 index를 쓰는것이 낫다 -->
      <a v-for="(menu, i) in menuList" :key="menu">{{ menuList[i] }}</a>
    </div>

    <!-- 1. 화면 오픈시 보이지 않게
    2. 상품명 클릭시 보이게
    3. 닫기 버튼 눌리면 안보이게 -->
    <div v-for="product in list" :key="product">
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
  
    <!-- 1. 상품명과 가격의 배열 형식으로 데이터 바인딩-->
    <div class="item">
      <div v-for="product in list" :key="product">
        <img :src="product.img" />
        <h4 @click="product.id = true">{{ product.title }}</h4>
        <p>{{ product.price }}원</p>
      </div>
    </div>
  </div>
  
</template>

<script>
// 외부 스크립트 파일 가지고 오기
// export, import 하기 
// 1. export 보내는 파일
// - export default 변수명(넘길자료가 저장된)
// => 변수명 import
// => export {변수명,변수명} => {변수명} import
// 2. 가지고 와서 사용하는 파일 import
// - import 변수명 from export 한 파일의 경로

// 1. 보내기 export
// 2. 받고 import
// 3. 등록 data(){}
// 4. 사용

// 1. 외부 js파일 만들기
// - src 폴더 내부에 만들기
// - 외부 js 파일에 작성
// => 객체 6개를 요소로 배열 만들기
// - 객체 내용: id, 상품명, 상품이미지(웹주소 링크), 상품 상세내용, 가격

// 1. 외부 파일 import 하기
// 2. 상품 목록 for문 반복
// 3. 외부파일 data 사용
// 4. 각 상품을 클릭하면 각 상품에 맞는 모달창을 띄우기
// 5. 모달창에 상품명, 이미지, 설명, 가격, 삽입

import { exportFile,exportFile2 } from './exportFile.js'
import { list } from './exportFile.js'



export default {
  name: 'App',

  data() {

    return{
      item: ["신발","가방","구두"],
      price: [3000,5000,2000],
      menuList: ["홈","상품목록","게시판","리뷰"],
      openModal: false,
      exportFile:{exportFile, exportFile2},
      list
    }
  },

  components: {
    
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.menu {
  width: 100%;
  background: navy;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
}
.menu a{
  padding: 20px;
  margin: 20px;
  color: white;
  font-size: 25px;
}
.item {
  width: 300px;
  margin: 0 auto;
}
img {
  width: 100%;
}
/* 1. 블럭형식 태그
=> 가로값 생략 전체 부모의 100% 채우기 
=> 기본 설정 여백을 빼야 내가 원하는 형태가 만들어짐 
=> 가로세로 크기가 들어감 */

/* 2. 인라인형식 태그
=> 가로 정렬 형식은 유지
=> 가로세로 크기 설정이 되지 않음
=> padding 기본 사이즈 조절
=> margin 값 활용 
=> 인라인형식 태그 안에는 블럭형식 태그 삽입을 할 수 없음 */

/* 3. 인라인블럭형식 태그 
=> 가로 정렬 유지
=> 크기값도 지정 가능
=> 다른 태그의 부모가 될 수 없음
=> 크기값 설정시 콕 찍어 너 크기야 */
.blackBg {
  width: 100%;
  height: 100%;
  /* a는 투명도값, 0은 투명, 1은 불투명 */
  background: rgba(0,0,0,0.5);
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
