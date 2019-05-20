<template>
  <div class="home">
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
        <div class="w-layout-grid service-grid">
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
              <h2 class="service-price">15,000 บาท</h2>
            </div>
            <div class="service-button-wrapper">
              <router-link to="/services/basic" class="service-button basic w-button">รายละเอียด</router-link>
            </div>
          </div>
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
              <h2 class="service-price">49,000 บาท</h2>
            </div>
            <div class="service-button-wrapper">
              <router-link to="/services/ecom" class="service-button ecom w-button">รายละเอียด</router-link>
            </div>
          </div>
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
    <div id="process" class="section">
      <div class="container w-container" data-aos="fade-right">
        <h2 class="section-title centered">ขั้นตอนการทำงาน</h2>
        <h4 class="work-agreement">
          *โปรดอ่าน
          <router-link to="/agreement" class="page-link">ข้อตกลงในการทำงาน</router-link>ก่อน
        </h4>
        <div class="workflow-wrapper">
          <div class="workflow-process-line"></div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">
              ประเมิณราคาจาก
              <br>ความต้องการของลูกค้า
            </h4>
            <a href="#" class="service-button workflow-button w-button">กรอกแบบฟอร์มที่นี่</a>
            <div class="workflow-detail proposal">หรือ</div>
            <a href="#contact" class="service-button workflow-button w-button">ช่องทางติดต่ออื่น</a>
          </div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">ลูกค้าชำระเงินมัดจำ</h4>
            <div class="workflow-detail">งานจะเริ่มหลังจากชำระเงินเท่านั้น</div>
            <a href="#" class="service-button workflow-button w-button">ดูช่องทางชำระเงิน</a>
          </div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">เริ่มทำงาน</h4>
            <div class="workflow-detail">ตามวันเวลาที่นัดหมายกับลูกค้า</div>
          </div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">ออกแบบเว็บไซต์</h4>
            <div class="workflow-detail">
              อาจส่งเป็น
              <span class="pink-font">แบบร่าง</span>
              <span class="pink-font">(Wireframe)</span>
              <br>หรือ
              <span class="pink-font">ไฟล์ดีไซน์</span> หรือ
              <span class="pink-font">ตัวอย่างเว็บไซต์จริง</span>
              <br>ขึ้นอยู่กับความซับซ้อนของโปรเจค
            </div>
            <div class="workflow-detail">
              <span class="error-font">*ลูกค้าสามารถแก้ไขได้ไม่เกิน 2 ครั้ง</span>
            </div>
          </div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">ทำเว็บไซต์</h4>
            <div class="workflow-detail">
              ทำตามแบบดีไซน์ที่ลูกค้าตกลงก่อนหน้า
              <br>
              <span class="error-font">*ไม่สามารถแก้ไขได้อีกในขั้นตอนนี้</span>
            </div>
          </div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">
              ลูกค้าชำระเงินทั้งหมด
              <br>และโฮสต์เว็บไซต์
              <br>
            </h4>
            <div class="workflow-detail">
              เลือก โดเมน และนำเว็บไซต์ขึ้นอินเตอร์เน็ต
              <br>ใช้เวลาประมาณ 1-2 วัน
            </div>
          </div>
        </div>
      </div>
    </div>
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
      </div>
    </div>
    <div id="contact" class="section pink">
      <div class="container w-container">
        <h2 class="section-title centered">ติดต่อได้ที่</h2>
        <h3 class="centered">tanatwat@peachmedia.com</h3>
        <h3 class="centered">092-273-0725</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$root.page = 'home'
  }
};
</script>

<style lang="sass">
  .intro-background
    background-image: url('../assets/images/Background-Waves.svg')
</style>