<template>
  <section id="Contact">
    <div class="inner_contact section_wrap">
      <div class="Contact_title w1290" data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="600">
        <h2 class="t_bold">Contact</h2>
      </div>
      <article data-aos="fade-up"  data-aos-easing="ease-in-out"  data-aos-duration="800">
        <div class="contact_box w1290">
          <div class="contactCon">
            <div class="contact_img">
              <img src="../assets/contact/IMG_0391.png">
            </div>
            <div class="contactTxt_wrap">
              <div class="contactTxt_top">
                <div>
                  <h6>이름</h6>
                  <h5>정다은</h5>
                </div>
                <div>
                  <h6>전화번호</h6>
                  <h5>010.9557.2910</h5>
                </div>
              </div>
              <div class="contactTxt_bottom">
                <h6>이메일</h6>
                <h5>daeunjeong161@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </article>
</div>
  </section>
</template>
<style scoped>
.Contact_title{
  margin-bottom: 50px;
  padding-top: 100px;
}
.contact_box{
  width: 100%;
  height: 60vh;
}
.contactCon{
  display: flex;
  justify-content: space-around;
  align-items: end;
  padding: 50px;
  box-sizing: border-box;
  box-shadow: 0 0 39px 16px rgb(0 0 0 / 5%);
  border-radius: 30px;
}
/* .contactCon>*{
  width: 50%;
} */
.contact_img>img{
  width: 300px;
  height: 300px;
}
.contactTxt_wrap{
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 50px;
}
.contactTxt_top{
  display: flex;
}
.contactTxt_top>div:nth-child(1){
  margin: 0 70px 50px 0;
}

/* 다크모드 */
.dark .contactCon{
    box-shadow: 0 0 19px 16px hsl(0deg 0% 100% / 6%);
}

@media (max-width:767px){
  .contactCon{
    padding: 0 50px 50px;
    flex-direction: column;
    align-items: center;
  }
  .contactTxt_wrap{
    margin-bottom: 0;
  }
  .contactTxt_top>div[data-v-34e39e40]:nth-child(1){
    margin: 0 50px 30px 0;
  }
  .contactTxt_top{
    margin-top: 30px;
  }
}

</style>