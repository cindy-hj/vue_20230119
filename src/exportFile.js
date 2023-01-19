let exportFile=10;
let exportFile2 = 30;
// export default []
// export default exportFile
export {exportFile, exportFile2}
// import 할때도 export와 형태가 똑같아야함
export {list}
const list = [
    // 외부이미지 주소를 써야함.. 로컬 주소는 인식을 못하네? 
    {id:"0", title:"컵케이크", img:"https://cdn.pixabay.com/photo/2020/05/01/09/13/cupcakes-5116009_960_720.jpg", detail:"야미", price:28000},
    {id:"1", title:"초코케이크", img:"https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg", detail:"초코냠", price:35000},
    {id:"2", title:"딸기케이크", img:"https://cdn.pixabay.com/photo/2016/04/25/21/53/strawberries-1353274_960_720.jpg", detail:"딸기냠", price:49000},
    {id:"3", title:"사과", img:"https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_960_720.jpg", detail:"아삭", price:15000},
    {id:"4", title:"오렌지", img:"https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg", detail:"sour", price:8000},
    {id:"5", title:"망고", img:"https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_960_720.jpg", detail:"sweet", price:27000}
  ]