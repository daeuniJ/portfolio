<template>
  <!-- <intro /> -->
  <introA />
  <headerC id="Header" />
      <about class="section" />
      <skill class="section" />
      <project class="section" />
      <clone class="section" />
      <works class="section" />
      <contact class="section" />
      <div @click="upBtn" id="topBtn"></div>
      <div class="darkM_btn" @change="darkM()">
        <input type="checkbox" id="darkM">
        <label for="darkM" class="darkToggle">
          <span class="darkT_bar"></span>
        </label>
      </div>
      <div class="blankBox"></div>
</template>

<script>
import headerC from './components/headerC.vue'
import introA from './components/introA.vue'
import intro from './components/intro.vue'
import about from './components/about.vue'
import skill from './components/skill.vue'
import project from './components/project.vue'
import clone from './components/clone.vue'
import works from './components/works.vue'
import contact from './components/contact.vue'

//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: {
    intro,
    about,
    project,
    clone,
    contact,
    headerC,
    introA,
    skill,
    works,
    AOS
  },
  created() {
    AOS.init();
  },
  mounted(){
    window.addEventListener('scroll', this.onScroll)
  },
  methods : {
    onScroll(){
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

      for(var i=0; i<sections.length; i++){
        const sectionHeight = sections[i].offsetHeight;
        const sectionTop = sections[i].offsetTop - 60;
        // let sectionId = sections[i].getAttribute('id')
        let navName = document.querySelectorAll('.gotosec');
        // console.log(sectionTop);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          for(let i=0; i<navName.length; i++){
            navName[i].classList.remove('active');
          }
          navName[i].classList.add('active');
        }
      }

      // TOP버튼

      let topBtn = document.querySelector('#topBtn');

      if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 300){
        topBtn.classList.add('active');
      } else{
        topBtn.classList.remove('active');
      }

    },
    upBtn(){
      window.scrollTo({top:0,behavior:'smooth'});
    },

    //다크모드
    darkM(){
      const darkModeToggle = document.getElementById('darkM');
      //체크박스 없을 시 작동 종료
      if(!darkModeToggle){
        return !1
      }
      const sections = document.querySelectorAll('section[id]');
      const nav = document.querySelector('nav');
      const intro = document.querySelector(".intro");
      const topBtn = document.querySelector("#topBtn");
      const app = document.querySelector("#app");
        for(var i=0; i<sections.length; i++){
          if(!sections[i].classList.contains('dark')) {
          sections[i].classList.add('dark');
          nav.classList.add('dark');
          intro.classList.add('dark');
          topBtn.classList.add('dark');
          app.classList.add('dark');
        } else{
          sections[i].classList.remove('dark');
          nav.classList.remove('dark');
          intro.classList.remove('dark');
          topBtn.classList.remove('dark');
          app.classList.remove('dark');
        }
        }


    }
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111111;
  /* overflow: hidden; */
  /* margin-top: 60px; */
}
html.dark{
  background-color: #121212;
}
#topBtn{
  width: 40px;
  height: 40px;
  position: fixed;
  right: 5%;
  bottom: 10px;
  background-image: url(../src/assets/topBtn.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 60% auto;
  border-radius: 50%;
  box-shadow: 0 0 39px 16px rgb(0 0 0 / 5%);
  cursor: pointer;
  opacity: 0;
  transition: 1s;
}
#topBtn.active{
  opacity: 1;
  bottom: 100px;
}
#darkM{
  display: none;
}
#darkM:checked+.darkToggle{
  background: #FED023;
  border: 2px solid #FFBC00;
}
#darkM:checked+.darkToggle::after{
  display: none;
  color: #b79474;
}
#darkM:checked+.darkToggle::before{
  display: block;
  color: #ffffff;
}
#darkM:checked+.darkToggle .darkT_bar{
  transform: translate3d(45px,0,0) rotate(0);
  background: #ffffff;
  box-shadow: inset -.15em -.15em #F2F2F1;
  background-image: url(../src/assets/lightmode.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 68% auto;
}
.darkM_btn{
  position: fixed;
  left: -60px;
  top: 8%;
  z-index: 11;
}
.darkToggle{
  cursor: pointer;
  display: inline-block;
  position: relative;
  margin-left: 75px;
  width: 72px;
  height: 28px;
  background-color: #2F373A;
  border: 2px solid #24292D;
  border-radius: 84px;
  transition: background 200ms cubic-bezier(.445,.05,.55,.95);
}
.darkToggle::after{
  display: block;
  content: "DARK";
  font-size: 13px;
  font-weight: 400;
  margin-top: 4px;
  position: absolute;
  top: 0;
  left: 31px;
  color: #ffffff;
}
.darkToggle::before{
  display: none;
  content: "LIGHT";
  font-size: 13px;
  font-weight: 400;
  margin-top: 4px;
  position: absolute;
  top: 0;
  left: 4px;
  color: #ffffff;
}
.darkT_bar{
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-block;
  /* position: relative; */
  position: absolute;
  top: 1px;
  left: 0;
  z-index: 2;
  background: #ffffff;
  box-shadow: inset -.15em -.15em #E5E5E5;
  background-size: 0;
  transition: transform .5s;
  background-image: url(../src/assets/darkmode.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 59% auto;
  transform: rotate(-30deg);
}
.blankBox{
  padding-bottom: 100px;
  box-sizing: border-box;
}

/* 다크모드 */
#topBtn.dark{
  background-image: url(../src/assets/topBtn_dark.png);
    box-shadow: 0 0 39px 16px rgba(255, 255, 255, .1);
}

@media (max-width:767px){
  #topBtn{
    display: none;
  }
}
</style>
