<template>
  <section id="Webclone">
    <div class="inner_webclone section_wrap">
      <div class="title w1290" data-aos="fade-up" data-aos-easing="ease-in-out"  data-aos-duration="600">
        <h2 class="t_bold">Web clone</h2>
        <h6 class="t_medium">웹 클로닝 페이지를 소개합니다!</h6>
      </div>
      <article>
        <div class="webclone_box w1290">
          <div class="dosiraktong" data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="800">
            <a target="_blank" href="http://daeunij.dothome.co.kr/dosirak/dosirak.html">
              <img class="clone_web" src="../assets/webClone/webPage_도시락통.png">
              <img class="clone_phone" src="../assets/webClone/phone_도시락통.png">
              <h5>도 시 락 통</h5>
            </a>
          </div>
          <div class="shouse" data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="1100">
            <a target="_blank" href="http://daeunij.dothome.co.kr/shouse/shouse.html">
            <img class="clone_web" src="../assets/webClone/webPage_싱그러운집.png">
              <img class="clone_phone" src="../assets/webClone/phone_싱그러운집.png">
              <h5>싱그러운 집</h5>
            </a>
          </div>
          <div class="therichmond" data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="1300">
            <a target="_blank" href="http://daeunij.dothome.co.kr/therichmond/therichmond.html">
              <img class="clone_web" src="../assets/webClone/webPage_더리치먼드.png">
                <img class="clone_phone" src="../assets/webClone/phone_더리치먼드.png">
                <h5>더 리치먼드</h5>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(()=>{
      const cloneBox = document.querySelectorAll(".webclone_box>*>a");
      const cloneTit = document.querySelectorAll(".webclone_box h5");
      for(let i=0; i<cloneBox.length; i++){
        // var cloneCon = cloneBox.item(i);
        cloneBox[i].addEventListener('mouseover',()=>{
          cloneTit[i].classList.add("active");  
      })
        cloneBox[i].addEventListener('mouseleave',()=>{
          cloneTit[i].classList.remove("active");  
      })
      }
    })
  },
}
</script>

<style scoped>
.webclone_box{
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.webclone_box>*{
  width: calc(33.33% - 25px);
  height: 550px;
  position: relative;
  padding: 50px;
  box-sizing: border-box;
  box-shadow: 0 0 39px 16px rgb(0 0 0 / 5%);
  border-radius: 30px;
  /* overflow: hidden; */
  transition-duration: .3s;
}
.webclone_box>*>a{
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-decoration: none;
  color: #111111;
}
.clone_web{
  width: 97%;
  height: auto;
  position: absolute;
  top: -25px;
  left: 5px;
}
.clone_phone{
  width: 75%;
  height: auto;
  position: absolute;
  bottom: 100px;
  right: 0;
}
.webclone_box h5{
  position: relative;
  margin: 116% auto 0;
  padding-right: 30px;
  /* position: absolute;
  bottom: 45px;
  left: 144px; */
}
.webclone_box h5::after{
  display: block;
  content: '';
  position: absolute;
  top:3%;
  right: 25%;
  width: 45px;
  height: 45px;
  background-image: url(../assets/webClone/arrow_b.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
  transition-duration: 0.3s;
}
.webclone_box h5.active:after{
  top:-2%;
  right: 23%;
}
/* .shouse h5{
  left: 127px;
}
.therichmond h5{
  left: 127px;
} */

/* 다크모드 */
.dark .webclone_box>*{
  box-shadow: 0 0 19px 10px hsl(0deg 0% 100% / 6%);
}
.dark .webclone_box h5{
  color: #E0E0E0;
}
.dark .webclone_box h5::after{
  background-image: url(../assets/webClone/arrow.png);
}
.dark .clone_web{
  filter: brightness(0.9);
}
.dark .clone_phone{
  filter: brightness(0.9);
}


@media (max-width:1290px){
  .webclone_box>*{
  height: 42.63vw;
}
.webclone_box h5{
  margin: 124% auto 0;
}
.webclone_box h5::after{
  top:3%;
  right: 17%;
}
.webclone_box h5.active:after{
  top:-2%;
  right: 15%;
}
}

@media (max-width:1023px){
  .webclone_box>*{
  height: 39.63vw;
}
.webclone_box h5::after{
  width: 35px;
  height: 35px;
  top:-6%;
  right: 25%;
}
.webclone_box h5.active:after{
  top:-11%;
  right: 23%;
}
}

@media(max-width: 890px){
  .webclone_box>*{
  height: 35.63vw;
}
.clone_phone{
  bottom: 60px;
}
.webclone_box h5{
  margin: 108% auto 0;
}
.webclone_box h5::after{
  top:-6%;
  right: 18%;
}
.webclone_box h5.active:after{
  top:-11%;
  right: 15%;
}
}

@media (max-width:767px){
  .webclone_box{
    flex-direction: column;
  }
  .webclone_box>*{
    width: 60%;
    height: 75.63vw;
    margin: 0 auto 50px;
  }
  .webclone_box h5{
    position: absolute;
    bottom: 25px;
    left: 35%;
    font-size: 20px;
}
.shouse h5{
  left: 36%;
}
.therichmond h5{
  left: 36%;
}
.webclone_box h5::after{
  top:-6%;
  right: -2%;
}
.webclone_box h5.active:after{
  top:-11%;
  right: -5%;
}
}

@media(max-width: 550px){
  #Webclone{
    margin-top: 300px;
  }
  .webclone_box h5{
    left: 30%;
    font-size: 16px;
}
.shouse h5{
  left: 30%;
}
.therichmond h5{
  left: 30%;
}
.webclone_box h5::after{
  width: 25px;
  height: 25px;
  top:2%;
  right: 5%;
}
.webclone_box h5.active:after{
  top:-3%;
  right: 0%;
}
}
</style>