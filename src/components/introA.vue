<template>
<section class="intro">
  <div class="intro_wrap">
    <div class="inner_intro">
      <div class="intro_txt">
        <h1>WELCOME!</h1>
        <h4>진취적인</h4> <h3 class="front_t">“프론트 엔드”</h3><h4>를 지향하는</h4>
        <h3 class="name_t">정다은</h3><h4>입니다.</h4><br>
        <h4>빠르게 변화하는 시스템에</h4><h3 class="react_t">민감하게 반응</h3><h4>하고</h4> <br>
        <h3 class="move_t">움직이는 인재</h3><h4>가 되겠습니다!</h4>
      </div>
      <div class="intro_img">
        <img src="../assets/intro/intro_img.png">
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  mounted(){
    window.addEventListener('scroll', this.introScroll)
  },
  methods : {
    introScroll(){
      let intro = document.querySelector(".intro_wrap");
      const introHeight = intro.offsetHeight;
      const introTop = intro.offsetTop;
      let introTxt = document.querySelector(".intro_txt");
      let introImg = document.querySelector(".intro_img");

      if(scrollY > introTop && scrollY <= introTop + introHeight){
        introTxt.classList.add('active');
        introImg.classList.add('active');
      } else{
        introTxt.classList.remove('active');
        introImg.classList.remove('active');
      }
    }
  },
}
</script>
>
<style scoped>
h1{
  font-size: 130px;
  font-weight: bold;
  color: #FFDA53;
  margin-bottom: 50px;
}
h3{
  display: inline;
}
h4{
  display: inline-block;
  margin: 0 10px 20px;
}
  .intro_wrap{
    width: 100%;
    height: 100vh;
    background-color: #F7F7F7;
    position: relative;
  }
  .inner_intro{
    padding: 80px 0;
  }
  .front_t{
    position: relative;
  }
  .front_t::after{
    display: block;
    content: '';
    width: 100%;
    height: 120px;
    position: absolute;
    top: -20px; 
    left: 0;
    background-image: url(../assets/intro/circle.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
  .name_t{
    position: relative;
  }
  .name_t::after{
    display: block;
    content: '';
    width: 150%;
    height: 50px;
    position: absolute;
    bottom: -26px; 
    left: -37px;
    background-image: url(../assets/intro/underline.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
  .react_t{
    position: relative;
  }
  .react_t::after{
    display: block;
    content: '';
    width: 93%;
    height: 50px;
    position: absolute;
    bottom: -26px; 
    left: -39px;
    background-image: url(../assets/intro/arrow.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
  .move_t{
    position: relative;
  }
  .move_t::after{
    display: block;
    content: '';
    width: 93%;
    height: 50px;
    position: absolute;
    bottom: -26px; 
    left: -39px;
    background-image: url(../assets/intro/arrow.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% auto;
  }
  .intro_img{
    width: 100%;
    position: absolute;
    bottom:-17%;
    left: 0;
    transition-duration: .3s;
  }
  .intro_txt{
    transition-duration: .3s;
  }
  .intro_img>img{
    width: 100%;
  }
  .intro_img.active{
    transform: scale(0.8);
  }
  .intro_txt.active{
    transform: scale(0.8);
  }

  /* 다크모드 */
  .dark h1{
    color: #EDC942;
  }
  .dark h4{
    color: #E0E0E0;
  }
  .dark h3{
    color: #E0E0E0;
  }
  .dark .intro_wrap{
    background-color: #5C5C5C;
  }
  .dark .front_t::after{
    background-image: url(../assets/intro/circle_dark.png);
  }
  .dark .react_t::after{
    background-image: url(../assets/intro/arrow_dark.png);
  }
  .dark .move_t::after{
    background-image: url(../assets/intro/arrow_dark.png);
  }
  .dark .name_t::after{
    background-image: url(../assets/intro/underline_dark.png);
  }
  .dark .intro_img>img{
    content: url(../assets/intro/intro_dark.png);
  }


  @media (max-width:1599px){
    .intro_wrap{
    height: 88vh;
    }
    .intro_img{
    bottom:-7%;
    }
  h1{
    font-size: 100px;
  }
}
@media (max-width:1023px){
  .intro_wrap{
    height: 70vh;
    }
  h1{
    font-size: 80px;
  }
  .front_t::after{
    top: -31px; 
  }
  .name_t::after{
    left: -24px;
  }
  .react_t::after{ 
    left: -26px;
  }
  .move_t::after{
    left: -26px;
  }
}

@media(max-width: 550px){
  h1{
  font-size: 50px;
}
}
</style>