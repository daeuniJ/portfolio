<template>
  <nav :class="{ active: isActive }" class="t_bold">
    <ul :class="{ active: isActive }" class="gnb w1290">
      <li v-on:click="gosection" data-target="About" class="gotosec">About</li>
      <li v-on:click="gosection" data-target="Skill" class="gotosec">Skill</li>
      <li v-on:click="gosection" data-target="Project" class="gotosec">Project</li>
      <li v-on:click="gosection" data-target="Webclone" class="gotosec">Web Clone</li>
      <li v-on:click="gosection" data-target="Works" class="gotosec">Works</li>
      <li v-on:click="gosection" data-target="Contact" class="gotosec">Contact</li>
    </ul>
    <div class="three col">
      <div :class="{ active: isActive }" @click="isActive = !isActive" class="hamburger" id="hamburger-1">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return{
      isActive: false,
    }
  },
methods : {
    gosection(e){
      //######click시 해당 섹션으로 이동######
      //gotosec이 클래스인 타겟이 없으면 실행하지 마라.
      if(!e.target.matches(".gotosec")) return;
      e.preventDefault();
      const sec = document.getElementById(e.target.dataset.target);
      // const intro = document.querySelector("#Intro");
      if(sec) {
        sec.scrollIntoView({behavior: "smooth"});
      }
    },
  }
}

</script>
<style scoped>
nav{
  position: sticky;
  width: 100%;
  height: 60px;
  top: 0;
  backdrop-filter:blur(15px);
  z-index: 10;
}
nav.active{
  backdrop-filter:none;
}
.gnb{
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
  box-sizing: border-box;
}
.gnb>li{
  cursor: pointer;
}

/* 햄버거 메뉴 */
.three{
  display: none;
  position: absolute;
  top: 15px;
  right: 30px;
}
.hamburger .line{
  width: 30px;
  height: 3px;
  background-color: #111111;
  display: block;
  margin: 5px auto;
  border-radius: 30px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger:hover{
  cursor: pointer;
}
#hamburger-1.active .line:nth-child(2){
  opacity: 0;
}

#hamburger-1.active .line:nth-child(1){
  -webkit-transform: translateY(8px) rotate(45deg);
  -ms-transform: translateY(8px) rotate(45deg);
  -o-transform: translateY(8px) rotate(45deg);
  transform: translateY(8px) rotate(45deg);
}

#hamburger-1.active .line:nth-child(3){
  -webkit-transform: translateY(-8px) rotate(-45deg);
  -ms-transform: translateY(-8px) rotate(-45deg);
  -o-transform: translateY(-8px) rotate(-45deg);
  transform: translateY(-8px) rotate(-45deg);
}
/* 햄버거 메뉴 끝 */
.gotosec{
  padding: 5px 15px;
  box-sizing: border-box;
  border-radius: 30px;
  transition-duration: .4s;
}
.gotosec:hover{
  background-color: #E0E0E0;
  border-radius: 30px;
}
.gotosec.active{
  background-color: #111111;
  color: #fff;
}

/* 다크모드 */
nav.dark{
  background-color: unset;
}
.dark .gotosec{
  color: #E0E0E0;
}
.dark .gotosec.active{
  background-color: #E0E0E0;
  color: #121212;
}
.dark .gotosec:hover{
  color: #121212;
}
.dark .hamburger .line{
  background-color: #E0E0E0;
}

@media (max-width:767px){
  .three{
  display: block;
  }
  .gnb{
    display: none;
    flex-direction: column;
    /* align-items: flex-end; */
    padding-top: 70px;
  }
  .gnb>li{
    margin-bottom: 10px;
  }
  .gnb.active{
    display: flex;
    backdrop-filter: blur(15px);
  }
}
</style>