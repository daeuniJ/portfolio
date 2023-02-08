<template>
  <section id="Skill">
    <div class="inner_skill section_wrap">
      <div class="title w1290" data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="600">
        <h2 class="t_bold">Skill</h2>
        <h6 class="t_medium">사용할 수 있는 언어를 소개합니다!</h6>
      </div>
      <article>
        <div class="skillInfo_box w1290">
          <div class="skill_sideBar"  data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="800">
            <div>A</div>
            <div class="skBar"></div>
            <div>Z</div>
          </div>
          <div class="skill_content"  data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="1100">
            <ul>
              <li>
                <h5>HTML</h5>
                <span></span>
                <h6>html의 구조 이해, 레이아웃 형성, 효과 표현</h6>
              </li>
              <li>
                <h5>CSS</h5>
                <span></span>
                <h6>다양한 디자인적인 요소 구현</h6>
              </li>
              <li>
                <h5>JavaScript</h5>
                <span></span>
                <h6>웹 페이지의 동적인 요소 구현</h6>
              </li>
              <li>
                <h5>Node.js</h5>
                <span></span>
                <h6>서버 구축</h6>
              </li>
              <li>
                <h5>Vue.js</h5>
                <span></span>
                <h6>레이아웃 형성 및 동적인 요소 구현</h6>
              </li>
              <li>
                <h5>My SQL</h5>
                <span></span>
                <h6>테이블 생성 및 관리, 데이터베이스 연결</h6>
              </li>
              <li>
                <h5>Photoshop</h5>
                <span></span>
                <h6>사진 편집 및 합성</h6>
              </li>
              <li>
                <h5>Illustrator</h5>
                <span></span>
                <h6>아이콘 및 일러스트 제작</h6>
              </li>
              <li>
                <h5>Figma</h5>
                <span></span>
                <h6>프로토 타입 제작</h6>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<style scoped>
  .skillInfo_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .skill_sideBar{
    flex-shrink: 0;
    width: 240px;
    font-size: 180px;
    font-weight: bold;
    color: #FF8210;
    text-align: left;
    line-height: 0.9;
  }
  .skBar{
    width: 10px;
    height: 250px;
    background-color: #FF8210;
    /* margin-left: 23%; */
    margin: 30px 0 30px 23%;
  }
  .skill_content{
    width: -webkit-fill-available;
  }
  .skill_content>ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .skill_content>ul>li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
  .skill_content>ul>li>h5{
    font-weight: 500;
  }
  .skill_content>ul>li>h6{
    font-weight: 300;
  }
  .skill_content>ul>li>span{
    display: block;
    margin-left: 1rem;
    width: 50%;
    height: 3px;
    background-color: #F7F7F7;
  }

/* 다크모드 */
  .dark .skill_sideBar{
    color: #D35F00;
  }
  .dark .skBar{
    background-color: #D35F00;
  }
  .dark .skill_content>ul>li>span{
    background-color: #E0E0E0;
    opacity: .3;
  }

  @media (max-width:767px){
    .skill_sideBar{
      display: none;
    }
  }
</style>