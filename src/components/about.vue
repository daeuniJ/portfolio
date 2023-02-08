<template>
  <section id="About">
    <div class="inner_about section_wrap">
      <div class="title w1290" data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="600">
        <h2 class="t_bold">About</h2>
        <h6 class="t_medium">“정다은”에 대한 것을 소개합니다!</h6>
      </div>
      <article data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="800">
        <div class="aboutInfo_box">
          <div class="about_left">
            <img src="../assets/about/IMG_0391.png">
            <div class="txtBox">
              <h6>이름</h6>
              <h5>정다은</h5>
            </div>
          </div>
          <div class="about_right">
            <div class="aboutR_top">
              <div class="txtBox aboutEducation">
                <h6>학력</h6>
                <h5>한림대학교 중국학과 전공 / 경영학과 복수전공</h5>
              </div>
              <div class="txtBox career">
                <h6>경력</h6>
                <h5>그린컴퓨터아카데미 - [디지털컨버전스] 뷰(Vue) 활용 프론트엔드 웹개발자 양성과정<br>
                  (2022.09.05 ~ 2023.02.14)</h5>  
              </div>
            </div>
            <div class="aboutR_bottom">
              <div class="aboutRBot_left">
                <div class="txtBox aboutCertificate">
                  <h6>보유 자격증</h6>
                  <h5>컴퓨터활용능력 2급 / HSK 5급</h5>
                </div>
                <div class="txtBox">
                  <h6>나를 표현하는 단어</h6>
                  <h5>노력 / 계획 / 긍정 / 열정 / 여행 / 산책 / 친구</h5>
                </div>
              </div>
              <div class="aboutRBot_right">
                <div class="txtBox aboutHobby">
                  <h6>취미</h6>
                  <h5>음악 듣기 / 책 읽기 / 웹툰 보기 / 영화 보기</h5>
                </div>
                <div class="txtBox">
                  <h6>MBTI</h6>
                  <h5>ESFJ - A / 사교적인 외교관</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<style scoped>
article{
  color: #fff;
}
.aboutInfo_box{
  width: 81%;
  height: 628px;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  background-color: #0CC192;
  padding: 100px;
  margin: 0 auto;
  box-sizing: border-box;
}
.about_left>img{
  width: 355px;
  height: 355px;
  transform: translate(-65px, -59px);
}
.about_right{
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.aboutEducation{
  margin-bottom: 40px;
}
.aboutCertificate{
  margin-bottom: 40px;
}
.aboutHobby{
  margin-bottom: 40px;
}
.aboutR_bottom{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.txtBox{
  text-align: left;
}
.txtBox>h6{
  font-weight: bold;
}
.txtBox>h5{
  font-size: 25px;
  font-weight: 300;
}

/* 다크모드 */
.dark .aboutInfo_box{
  box-shadow: 0 0 39px 16px rgba(255, 255, 255, .1);
}
.dark article{
  color: #E0E0E0;
}
.dark .aboutInfo_box{
  background-color: #009B6D;
}

@media (max-width:1850px){

  .txtBox>h5{
  font-size: 20px;
}
.aboutEducation{
  margin-bottom: 50px;
}
.aboutCertificate{
  margin-bottom: 50px;
}
.aboutHobby{
  margin-bottom: 50px;
}
}

@media (max-width:1599px){
  .about_left>img{
  width: 250px;
  height: 250px;
  transform: translate(-65px, -59px);
}
.about_left{
  width: 23%;
  min-width: 200px;
}
.aboutInfo_box{
  padding: 80px;
}
.aboutInfo_box{
  height: 590px;
}
}

@media (max-width:1450px){
  .aboutRBot_left{
  width: 46%;
  margin-right: 20px;
}
.aboutRBot_right{
  width: 50%;
}
}
@media (max-width:1150px){
  .aboutInfo_box{
    height: 830px;
    flex-direction: column;
  }
  .about_right{
    width: 100%;
  }
  .about_left>img{
    margin-bottom: -30px;
  }
  .aboutEducation{
  margin-top: 20px;
  margin-bottom: 20px;
}
  .career{
    margin-bottom: 20px;
  }
  .aboutCertificate{
    margin-bottom: 20px;
  }
  .aboutHobby{
    margin-bottom: 20px;
  }
  .aboutRBot_left{
  width: 40%;
  margin-right: 0;
}
.aboutRBot_right{
  width: 40%;
}
}

@media (max-width:767px){
  .aboutInfo_box{
    height: 730px;
  }
  .txtBox>h5{
  font-size: 16px;
}
.aboutInfo_box{
  padding: 50px;
}
}
@media (max-width:483px){
  .aboutInfo_box{
    height: 830px;
  }
}
</style>