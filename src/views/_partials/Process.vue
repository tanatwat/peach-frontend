<template>
  <div id="process" class="section">
    <div class="container w-container" data-aos="fade-right">
      <h2 class="section-title centered">ขั้นตอนการทำงาน</h2>
      <h4 class="work-agreement">
        *โปรดอ่าน
        <router-link to="/agreement" class="page-link">ข้อตกลงในการทำงาน</router-link>&nbsp;ก่อน
      </h4>
      <div class="columns" style="margin: 15px 0">
        <div class="column">
          <div class="workflow-step">
            <div class="workflow-head">
              <span class="workflow-number">1</span>
              <p class="workflow-step-title">ประเมิณราคา</p>
            </div>
            <div>
              <p class="workflow-step-title">
                ประเมิณราคาจาก
                <br>ความต้องการของลูกค้า
              </p>
              <router-link
                to="/pricing"
                class="service-button workflow-button w-button"
              >กรอกแบบฟอร์มที่นี่</router-link>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="workflow-step">
            <div class="workflow-head">
              <span class="workflow-number">2</span>
              <p class="workflow-step-title">เริ่มทำงาน</p>
            </div>
            <div>
              <p class="workflow-step-title">
               ลูกค้าชำระเงินมัดจำและเริ่มทำงาน<br>
               แบ่งออกเป็น 2 ขั้นตอน<br>
               1. ออกแบบเว็บไซต์<br>
               2. ทำเว็บไซต์จริง
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="workflow-step">
            <div class="workflow-head">
              <span class="workflow-number">3</span>
              <p class="workflow-step-title">ส่งงาน</p>
            </div>
            <div>
              <p class="workflow-step-title">
                 ลูกค้าชำระเงินทั้งหมด<br>
                 เลือกโดเมนและอัพโหลดเว็บไซต์<br>
                 หรือส่งไฟล์โปรเจคให้ลูกค้า
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="workflow-wrapper">
          <div class="workflow-process-line"></div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">
              ประเมิณราคาจาก
              <br>ความต้องการของลูกค้า
            </h4>
            <router-link
              to="/pricing"
              class="service-button workflow-button w-button"
            >กรอกแบบฟอร์มที่นี่</router-link>
          </div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">ลูกค้าชำระเงินมัดจำ</h4>
            <div class="workflow-detail">งานจะเริ่มหลังจากชำระเงินเท่านั้น</div>
          </div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">เริ่มทำงาน</h4>
            <div class="workflow-detail">ตามวันเวลาที่นัดหมายกับลูกค้า</div>
          </div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">ออกแบบเว็บไซต์</h4>
            <div class="workflow-detail">
              อาจส่งเป็น
              <span class="has-text-info">แบบร่าง</span>
              <span class="has-text-info">(Wireframe)</span>
              <br>หรือ
              <span class="has-text-info">ไฟล์ดีไซน์&nbsp;(xd)</span> หรือ
              <span class="has-text-info">ตัวอย่างเว็บไซต์จริง</span>
              <br>ขึ้นอยู่กับความซับซ้อนของโปรเจค
            </div>
          </div>
          <div class="workflow-step">
            <h4 class="workflow-step-title">ทำเว็บไซต์</h4>
            <div class="workflow-detail">
              ทำตามแบบดีไซน์ที่ลูกค้าตกลงก่อนหน้า
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
      </div>-->
    </div>
  </div>
</template>

<style lang="sass">
   .workflow-number
      display: block
      width: 50px
      height: 50px
      text-align: center
      background: #6679d5
      color: #fff
      line-height: 50px
      border-radius: 100%
      font-size: 1.5rem
      font-family: sans-serif
      margin-bottom: 15px
   .workflow-head
      display: flex
      flex-direction: column
      align-items: center
      p
         font-size: 1.5rem
         margin-bottom: 10px
</style>