<template>
  <div
    class="tab-content w-tab-pane"
    :class="{'w--tab-active' : $parent.tab == 1}"
  >
    <h2 class="section-title basic-font">Basic Package</h2>
    <p class="service-paragraph">
      เว็บไซต์สำหรับแสดงสิ่งที่คุณต้องการ ไม่ว่าจะเป็นธุรกิจ
      <br>แสดงผลงาน ผลิตภัณฑ์ สร้างความเชื่อถือกับลูกค้าของคุณ
    </p>
    <h2 class="section-title">ค่าทำเว็บไซต์</h2>
    <h3 class="section-title">
      เริ่มต้นที่
      <span class="success-font">15,000</span> บาท
      <br>
      <span class="is-size-5 has-text-grey">*ไม่รวมค่าโฮสต์และโดเมน</span>
    </h3>
    <div class="package-wrapper">
       <router-link to="/pricing" class="price-button w-button">ขอใบเสนอราคาที่นี่</router-link>
    </div>
    
    <div class="package-wrapper">
      <h2 class="package-title">โฮสต์ และ โดเมน</h2>
      <h2 class="package-title">Standard</h2>
      <p class="service-paragraph">
        ไม่มีการเก็บข้อมูล หรือระบบจัดการใดๆ
        <span class="basic-font"></span>
        <br>
      </p>
      <h4 class="section-title">
        ค่าโดเมน และ โฮสต์
        <br>เริ่มต้นที่
        <span class="success-font">3,900</span> บาท/ปี
      </h4>
      <p class="service-paragraph">
        <span class="basic-font">
          *ไม่มีการเก็บข้อมูลผ่านแบบฟอร์ม (เพิ่มได้)
          <br>*ไม่สามารถแก้ไขได้ด้วยตัวเอง
        </span>
        <br>
      </p>
    </div>
    <div class="package-wrapper">
      <h2 class="section-title">CMS</h2>
      <p class="service-paragraph">
        เพิ่มระบบจัดการเนื้อหาบนเว็บไซต์
        <br>คุณสามารถแก้ไขข้อมูลบางส่วนบนหน้าเว็บได้
        <br>รวมทั้งสามารถเก็บข้อมูล เช่น บทความ ผลงาน
        <br>และนำมาแสดงผลบนเว็บไซต์ได้ โดยใช้บริการจาก
        <a
          href="https://webflow.com"
          class="span-link"
          target="_blank"
        >Webflow</a>
        <br>
      </p>
      <h3 class="section-title"></h3>
      <h4 class="section-title">
        ค่าโดเมน และ โฮสต์
        <br>เริ่มต้นที่
        <span class="success-font">8,900</span> บาท/ปี
      </h4>
      <p class="service-paragraph">
        <span class="basic-font">
          *สามารถเก็บข้อมูลผ่านแบบฟอร์มได้
          <br>*สามารถเพิ่มข้อมูล และแก้ไขหน้าเว็บบางส่วนได้
        </span>
        <br>
      </p>
    </div>

    <div class="package-wrapper">
      <h3 class="section-title has-text-centered">แพ็คเกจโฮสต์ CMS</h3>
    </div>
    <div class="columns is-multiline is-mobile has-text-centered pricing-table pricing-header">
      <div class="column is-4-desktop is-hidden-mobile"></div>
      <div class="column is-4-desktop">
        <!-- BASE 18,000 HOST 8,900 -->
        <p class="is-size-5 basic-font is-marginless">ธรรมดา</p>
        <!-- <p class="is-marginless">เริ่มต้น 26,900 บาท</p> -->
        <p class="has-text-grey is-marginless">โฮสต์ + โดเมน</p>
        <p class="has-text-grey is-marginless">8,900 บาท/ปี</p>
        <!-- <p class="has-text-grey is-marginless">รายเดือน 990 บาท</p> -->
      </div>
      <div class="column is-4-desktop">
        <p class="is-size-5 basic-font is-marginless">ธุรกิจ</p>
        <!-- BASE 18,000 HOST 16,900 -->
        <!-- <p class="is-marginless">เริ่มต้น 34,900 บาท</p> -->
        <p class="has-text-grey is-marginless">โฮสต์ + โดเมน</p>
        <p class="has-text-grey is-marginless">16,900 บาท/ปี</p>
        <!-- <p class="has-text-grey is-marginless">รายเดือน 1,990 บาท</p> -->
      </div>
    </div>
    <div
      class="columns is-multiline is-mobile has-text-centered pricing-table"
      v-for="(item, index) in basicPackage"
    >
      <div class="column is-4-desktop is-full-mobile pricing-title">
        <div>
          {{ item.title }}&nbsp;
          <i
            class="fas fa-question-circle basic-font pricing-help"
            @click="toggle(index)"
            v-show="item.desc"
          ></i>
        </div>
        <transition name="slide-down">
          <div class="pricing-description" v-show="toggleDesc == index">{{ item.desc }}</div>
        </transition>
      </div>
      <div class="column is-4-desktop">
        {{ item.cms === true || item.cms === false ? null : item.cms }}
        <i
          class="fas"
          :class="{'fa-check has-text-success' : item.cms === true , 'fa-times has-text-grey' : item.cms === false}"
        ></i>
      </div>
      <div class="column is-4-desktop">
        {{ item.business === true || item.business === false ? null : item.business }}
        <i
          class="fas"
          :class="{'fa-check has-text-success' : item.business === true , 'fa-times has-text-grey' : item.business === false}"
        ></i>
      </div>
    </div>
    <div class="section"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleDesc: null,
      basicPackage: [
        {
          title: "จำกัดผู้เข้าชมต่อเดือน",
          basic: "25,000",
          cms: "1 แสน",
          business: "1 ล้าน",
          desc:
            "คิดจากผู้เข้าชมรายวัน เช่น มีผู้ชมใน 1 วัน 100 คน ถ้า 30 วัน จะคิดเป็น ผู้เข้าชมต่อเดือน 3,000 คน (ใน 1 วัน ผู้ชม 1 คนจะเข้าเว็บไซต์กี่ครั้งก็ยังนับเป็น 1 คน)"
        },
        {
          title: "เก็บข้อมูลจากแบบฟอร์ม",
          basic: "500 ครั้ง",
          cms: "1,000 ครั้ง",
          business: "ไม่จำกัด",
          desc:
            "เก็บข้อมูลจากแบบฟอร์ม เมื่อมีข้อมูลเข้ามาคุณจะได้รับอีเมลแจ้งเตือน"
        },
        {
          title: "จำนวน CMS",
          basic: null,
          cms: "2,000",
          business: "10,000",
          desc: "จำนวนกลุ่มข้อมูล CMS บนเว็บไซต์ เช่น บทความ 1 บทความ นับเป็น 1"
        },
        {
          title: "ระบบค้นหาจาก CMS",
          basic: null,
          cms: true,
          business: true,
          desc:
            "ค้นหาข้อมูลจาก CMS บนเว็บไซต์ของคุณ เช่น บทความ สินค้า หรืออื่นๆ"
        },
        {
          title: "อัพโหลดไฟล์ผ่านแบบฟอร์ม",
          basic: null,
          cms: false,
          business: true,
          desc:
            "รับไฟล์จากผู้เข้าชมเว็บไซต์ผ่านแบบฟอร์ม โดยมีพื้นที่เก็บไฟล์ 10 GB"
        }
      ]
    };
  },
  methods: {
    toggle(index) {
      if (index == this.toggleDesc) {
        this.toggleDesc = null;
      } else {
        this.toggleDesc = index;
      }
    }
  }
};
</script>