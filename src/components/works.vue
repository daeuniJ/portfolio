<template>
  <section id="Works">
    <div class="inner_works">
      <article>
        <div class="works_arti w1290">
          <div class="worksBg_wrap">
            <div class="worksBg_inner">
             <img src="../assets/works/works_bg.png">
             <div class="workCon workCon_1">
            <a href="">
            <h6>To do List</h6>
          </a>
          </div>
          <div class="workCon workCon_2">
            <h6>홍보 포스터</h6>
          </div>
          <div @click="addShow" class="workCon workCon_3">
            <h6>자기소개서</h6>
          </div>
           </div>
         </div>
          <div class="title" data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="600">
            <h2 class="t_bold">Works</h2>
            <h6 class="t_medium">다양한 작업물을 소개합니다!</h6>
          </div>

       </div>
      </article>
      <div class="modal_Background">
        <div class="modal_window">
          <div class="nodal_popUp">
            <div @click="removeShow" class="modal_close">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods : {
    addShow() {
      // console.log("test");
      const Background = document.querySelector(".modal_Background");
      Background.classList.add('show');
    },
    removeShow(){
      const Background = document.querySelector(".modal_Background");
      Background.classList.remove('show');
    }
  }
}
</script>

<style scoped>
.inner_works{
  background-color: #FFDA53;
}
.works_arti{
  position: relative;
  padding: 0;
}
.worksBg_wrap{
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: scroll;
}
::-webkit-scrollbar {
  display: none;
    /* width: 10px; */
    height: 15px;
}
/* scrollbar Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 30px;
    border-radius: 30px;
    background: #0CC192; 
}
::-webkit-scrollbar-thumb:window-inactive {
    background: #FF8210; 
}
.worksBg_inner{
  width: 1290px;
  height: 100%;
  position: relative;
}
.works_arti img{
  /* display: block; */
  width: 100%;
  height: 100%;
  /* position: relative; */
}
.works_arti>.title{
  position: absolute;
  top: 80px;
  left: 40%;
}
.workCon{
  width: 185px;
  line-height: 2.3;
  position: absolute;
  box-sizing: border-box;
  background-color: #111111;
  border-radius: 30px;
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  cursor: pointer;
}
.workCon::before{
  display: block;
  content: '';
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: -12px;
  left: 30px;
  background-image: url(../assets/works/works_tri.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}
.workCon>a{
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  line-height: 2.3;
}
.workCon h6{
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background-image: url(../assets/works/arrow.png);
  background-repeat: no-repeat;
  background-position: 142px 6px;
  background-size: 35px 35px;
  transition-duration: .3s;
  padding-left: 15px;
}
.workCon h6:hover{
  background-position: 147px 4px;
}
.workCon_1>a>h6{
 padding-left: 10px !important;
}
.workCon_1{
  top: 55%;
  left: 19%;
  animation-name: upDownA;
}


/* modal 팝업 */
.modal_Background{
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  /* z-index: 1000; */
  /* 숨기기 */
  /* z-index: -1;
  opacity: 0; */
  display: none;
}
.modal_window{
  position: relative;
  width: 100%;
  height: 100%;
}
.nodal_popUp{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 100%;
  /* transform: translate(-50%, -50%); */
  background-image: url(../assets/works/ai_자기소개서.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;

  /* 초기에 약간 아래에 배치 */
  transform: translate(-50%, -40%);
}
.show{
  display: block;
  opacity: 1;
  z-index: 1000;
  transition: all .3s;
}
.show .nodal_popUp{
    transform: translate(-50%, -50%);
}
.modal_close{
  width: 40px;
  height: 40px;
  position: absolute;
  top: 5%;
  right: -7%;
  background-image: url(../assets/works/modal_close_w.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  cursor: pointer;
}

@keyframes upDownA{
  0% {top: 55%;}
  50% {top: 56%;}
  100% {top: 55%;}
}
.workCon_1::after{
  display: block;
  content: '';
  width: 35px;
  height: 35px;
  position: absolute;
  top: 5px;
  left: 12px;
  background-image: url(../assets/works/vueCon.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}
.workCon_2{
  top: 42%;
  left: 43%;
  animation-name: upDownB;
}
@keyframes upDownB{
  0% {top: 42%;}
  50% {top: 43%;}
  100% {top: 42%;}
}
.workCon_2::after{
  display: block;
  content: '';
  width: 26px;
  height: 26px;
  position: absolute;
  top: 11px;
  left: 17px;
  background-image: url(../assets/works/psCon.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}
.workCon_3{
  top: 50%;
  right: 7%;
  animation-name: upDownC;
}
@keyframes upDownC{
  0% {top: 50%;}
  50% {top: 51%;}
  100% {top: 50%;}
}
.workCon_3::after{
  display: block;
  content: '';
  width: 35px;
  height: 35px;
  position: absolute;
  top: 6px;
  left: 14px;
  background-image: url(../assets/works/aiCon.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
}

/* 다크 모드 */
.dark .inner_works{
  background-color: #EDC942;
}
#Works.dark h2, h6{
    color: #121212;
}
.dark .worksBg_inner>img{
  content: url(../assets/works/works_dark.png);
}


@media (max-width:1290px){
  ::-webkit-scrollbar {
  display: block;
  }
}

</style>