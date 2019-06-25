<template>
  <div class="page-content">
    <div class="intro-background">
      <div class="intro-container w-container">
        <div class="intro-wrapper">
          <div class="intro-header-text">
            <h1 class="intro-header-text">
              คุณทำธุรกิจ
              <br>
            </h1>
            <h1 class="intro-header-text">
              เราทำเว็บไซต์
              <br>
            </h1>
          </div>
          <div class="intro-svgs">
            <div class="intro-images">
              <img
                src="../assets/images/Desktop.svg"
                class="intro-img desktop"
                data-aos="fade-down"
                data-aos-easing="ease"
                data-aos-duration="700"
              >
              <img
                src="../assets/images/Tablet.svg"
                class="intro-img tablet"
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="800"
              >
              <img
                src="../assets/images/Phone.svg"
                class="intro-img phone"
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="900"
              >
              <img
                src="../assets/images/Barrel-s.svg"
                class="intro-img bucket"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="1200"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="services" class="section">
      <div class="container w-container">
        <h2 class="section-title centered">บริการ</h2>
        <div class="columns">
          <div class="column">
            <div class="service-wrapper">
              <div class="service-header basic">
                <h4>Basic</h4>
              </div>
              <div class="service-details">
                <div class="service-explain">
                  เว็บไซต์บริษัท ธุรกิจ
                  <br>แสดงผลงาน หรือผลิตภัณฑ์
                </div>
                <h3 class="start-at">เริ่มต้นที่</h3>
                <h2 class="service-price">12,000 บาท</h2>
              </div>
              <div class="service-button-wrapper">
                <router-link to="/services/basic" class="service-button basic w-button">รายละเอียด</router-link>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="service-wrapper">
              <div class="service-header ecom">
                <h4>Ecommerce</h4>
              </div>
              <div class="service-details">
                <div class="service-explain">
                  เปิดร้านค้าออนไลน์
                  <br>พร้อมระบบหลังร้าน
                  <br>
                </div>
                <h3 class="start-at">เริ่มต้นที่</h3>
                <h2 class="service-price">25,000 บาท</h2>
              </div>
              <div class="service-button-wrapper">
                <router-link to="/services/ecom" class="service-button ecom w-button">รายละเอียด</router-link>
              </div>
            </div>
          </div>
          <!-- <div class="column">
            <div class="service-wrapper">
              <div class="service-header custom">
                <h4>Custom</h4>
              </div>
              <div class="service-details">
                <div class="service-explain">
                  หากมีความต้องการอื่นๆ
                  <br>สามารถสอบถามได้เลย
                </div>
              </div>
              <div class="service-button-wrapper">
                <a href="#contact" class="service-button custom w-button">ดูช่องทางติดต่อ</a>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
    <div id="services" class="section benefits">
      <div class="container w-container">
        <div class="w-layout-grid service-grid">
          <div class="benefit-wrapper">
            <div class="benefit-explain">
              ดูดีบนทุกอุปกรณ์
              <br>ใช้งานได้ทุกขนาดหน้าจอ
            </div>
          </div>
          <div id="w-node-3f54eeee187d-dc4c5dcb" class="benefit-wrapper">
            <div class="benefit-explain">
              ออกแบบให้เข้ากับ
              <br>กิจการหรือธุรกิจของคุณ
            </div>
          </div>
          <div id="w-node-8d81ba741461-dc4c5dcb" class="benefit-wrapper">
            <div class="benefit-explain">
              คำนึงถึงประสบการณ์
              <br>ที่ผู้เข้าชมเว็บไซต์จะได้รับ
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="home-content-wrap">
          <h2 class="section-title centered">ผมมีทักษะอะไรบ้าง</h2>
          <h4 class="centered" style="position:relative;margin-bottom:30px">
            <!-- <i
              class="fas fa-quote-left has-text-grey-lighter"
              style="margin-right: 15px;position:absolute;top: -3px"
            ></i> -->
            <font>ผมคือ Frontend web developer<br>
            แต่สามารถทำงาน Fullstack, Web Design ได้เช่นกัน
            </font>
          </h4>
        </div>
        <div class="skills-wrapper">
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/webflow-mark-vector-blue-1.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Webflow</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/vue-js-1.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Vue Js</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/laravel.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Laravel</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/nodejs-icon.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Node Js</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/javascript.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">JavaScript</div>
          </div>
          <div class="skill">
            <div class="skill-logo-wrapper">
              <img src="../assets/images/adobe-xd.svg" alt class="skill-logo">
            </div>
            <div class="skill-title">Adobe Xd</div>
          </div>
        </div>
      </div>
    </div>
    <work-process></work-process>
    <div id="clients" class="section grey">
      <div class="container w-container" data-aos="fade-right">
        <h2 class="section-title centered">ตัวอย่างงาน</h2>
        <div class="site-showcase">
          <div class="showcase-img-wrapper">
            <img src="../assets/images/Smile-Delight-Demo.png" class="showcase-img">
          </div>
          <div class="showcase-details-wrapper">
            <h1 class="showcase-title">Smile Delight Clinic</h1>
            <p class="showcase-details">
              เว็บไซต์สำหรับคลินิกทันตกรรม
              <br>ดีไซน์แบบมินิมอล มีเฉพาะสิ่งที่จำเป็นบนหน้าเว็บ
              <br>
            </p>
            <a
              href="https://smiledelightclinic.com"
              target="_blank"
              class="showcase-button sm-delight w-button"
            >เข้าชมเว็บไซต์</a>
          </div>
        </div>
        <h2 class="section-title centered">ตัวอย่างงานอื่น</h2>
        <p class="centered is-size-5">*เป็นเพียงตัวอย่างไม่ได้ใช้จริง</p>
        <div class="columns">
          <div class="column">
            <a class="demo-link" href="https://caffe-coffee.webflow.io">
              <img src="../assets/images/Caffe.jpg" alt>
            </a>
          </div>
          <div class="column">
            <a class="demo-link" href="https://jergun.webflow.io">
              <img src="../assets/images/JerGun.jpg" alt>
            </a>
          </div>
          <div class="column">
            <a class="demo-link" href="https://urban-block.webflow.io">
              <img src="../assets/images/Urbanblock.jpg" alt>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkProcess from "./_partials/Process.vue";
export default {
  components: { WorkProcess },
  data() {
    return {};
  },
  created() {
    this.$root.page = "home";
  }
};
</script>

<style lang="sass">
  .intro-background
    background-image: url('../assets/images/Background-Waves.svg')
  .demo-link
    img
      box-shadow: 0 2px 5px 0 #b5b5b5
      border-radius: 8px
      transform: scale(0.9, 0.9)
      transition: all .3s ease
      &:hover
        transform: scale(1, 1)
        box-shadow: 0 8px 12px 3px #c2c2c2
</style>