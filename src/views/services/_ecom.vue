<template>
  <div class="tab-content w-tab-pane" :class="{'w--tab-active' : $parent.tab == 2}">
    <h2 class="section-title ecom-font">Ecommerce Package</h2>
    <p class="service-paragraph">
      เปิดร้านค้าออนไลน์ของคุณเอง พร้อมระบบจัดการหลังร้าน
      <br>ลูกค้าของคุณสามารถช็อป และชำระเงินออนไลน์ได้อย่างง่ายดาย
      <br>
    </p>
    <p class="service-paragraph">
      *ระบบหลังร้านและจัดการข้อมูล เป็นบริการจาก
      <a
        href="https://webflow.com"
        class="span-link"
        target="_blank"
      >Webflow</a>
    </p>
    <h2 class="section-title">ค่าทำเว็บไซต์</h2>
    <h3 class="section-title">
      เริ่มต้นที่
      <span class="success-font">20,000</span> บาท
      <br>
      <span class="is-size-5 has-text-grey">*ไม่รวมค่าโฮสต์และโดเมน</span>
    </h3>
    <div class="package-wrapper">
      <router-link to="/pricing" class="price-button w-button">ขอใบเสนอราคาที่นี่</router-link>
    </div>

    <div class="package-wrapper">
      <h2 class="package-title">โฮสต์ และ โดเมน</h2>
      <h2 class="package-title">Ecommerce</h2>
      <p class="service-paragraph">
        คุณสามารถแก้ไขหน้าเว็บไซต์บางส่วน
        <br>และเก็บข้อมูลทุกอย่างได้เหมือนแพ็คเกจ CMS
        <br>สิ่งที่เพิ่มมาคือ ระบบหลังร้าน รถเข็น และชำระเงิน
      </p>
      <h4 class="section-title">
        ค่าโดเมน และ โฮสต์
        <br>เริ่มต้นที่
        <span class="success-font">13,900</span> บาท/ปี
      </h4>
      <p class="service-paragraph">
        <span class="basic-font">
          *ลงสินค้าให้ฟรี 10 ชิ้น
          <br>*ไม่สามารถแก้ไขได้ด้วยตัวเอง
        </span>
      </p>
    </div>

    <div class="package-wrapper">
      <h3 class="section-title has-text-centered">แพ็คเกจโฮสต์ Ecommerce</h3>
    </div>
    <div class="columns is-multiline is-mobile has-text-centered pricing-table pricing-header">
      <div class="column is-3-desktop is-hidden-mobile"></div>
      <div class="column is-3-desktop">
        <!-- BASE 18,000 HOST 8,900 -->
        <p class="is-size-5 basic-font is-marginless">ธรรมดา</p>
        <!-- <p class="is-marginless">เริ่มต้น 26,900 บาท</p> -->
        <p class="has-text-grey is-marginless">โฮสต์ + โดเมน</p>
        <p class="has-text-grey is-marginless">13,900 บาท/ปี</p>
        <!-- <p class="has-text-grey is-marginless">รายเดือน 990 บาท</p> -->
      </div>
      <div class="column is-3-desktop">
        <p class="is-size-5 basic-font is-marginless">ธุรกิจ</p>
        <!-- BASE 18,000 HOST 16,900 -->
        <!-- <p class="is-marginless">เริ่มต้น 34,900 บาท</p> -->
        <p class="has-text-grey is-marginless">โฮสต์ + โดเมน</p>
        <p class="has-text-grey is-marginless">32,900 บาท/ปี</p>
        <!-- <p class="has-text-grey is-marginless">รายเดือน 1,990 บาท</p> -->
      </div>
      <div class="column is-3-desktop">
        <p class="is-size-5 basic-font is-marginless">องค์กร</p>
        <!-- BASE 18,000 HOST 16,900 -->
        <!-- <p class="is-marginless">เริ่มต้น 34,900 บาท</p> -->
        <p class="has-text-grey is-marginless">โฮสต์ + โดเมน</p>
        <p class="has-text-grey is-marginless">92,900 บาท/ปี</p>
        <!-- <p class="has-text-grey is-marginless">รายเดือน 1,990 บาท</p> -->
      </div>
    </div>
    <div
      class="columns is-multiline is-mobile has-text-centered pricing-table"
      v-for="(item, index) in ecomPackage"
    >
      <div class="column is-3-desktop is-full-mobile pricing-title">
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
      <div class="column is-3-desktop">
        {{ item.standard === true || item.standard === false ? null : item.standard }}
        <i
          class="fas"
          :class="{'fa-check has-text-success' : item.standard === true , 'fa-times has-text-grey' : item.standard === false}"
        ></i>
      </div>
      <div class="column is-3-desktop">
        {{ item.plus === true || item.plus === false ? null : item.plus }}
        <i
          class="fas"
          :class="{'fa-check has-text-success' : item.plus === true , 'fa-times has-text-grey' : item.plus === false}"
        ></i>
      </div>
      <div class="column is-3-desktop">
        {{ item.advanced === true || item.advanced === false ? null : item.advanced }}
        <i
          class="fas"
          :class="{'fa-check has-text-success' : item.advanced === true , 'fa-times has-text-grey' : item.advanced === false}"
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
      ecomPackage: [
        {
          title: "มีฟังก์ชั่นจากแพ็คเกจ CMS",
          standard: "ธรรมดา",
          plus: "ธุรกิจ",
          advanced: "ธุรกิจ",
          desc: null
        },
        {
          title: "ลบโลโก้ Webflow ในอีมล",
          standard: false,
          plus: true,
          advanced: true,
          desc: "อีเมลจะมีโลโก้ Webflow ด้านล่างของอีเมล"
        },
        {
          title: "ค่าธรรมเนียมชำระเงิน",
          standard: "2%",
          plus: "0%",
          advanced: "0%",
          desc: "*ยังไม่รวมค่าธรรมเนียมจาก Stripe"
        },
        {
          title: "บัญชีพนักงาน",
          standard: "3",
          plus: "10",
          advanced: "15",
          desc:
            "คุณสามารถให้บัญชีผู้ใช้กับผู้อื่นได้ ซึ่งจะสามารถจัดการสินค้า การขนส่งได้"
        },
        {
          title: "จำนวนสินค้าบนเว็บไซต์",
          standard: "500",
          plus: "1,000",
          advanced: "3,000",
          desc: "จำนวนสินค้าที่สามารถบันทึกไว้ในระบบหลังร้านได้"
        },
        {
          title: "จำกัดยอดขายต่อปี",
          standard: "$50K ราว 1.5 ล้านบาท",
          plus: "$200K ราว 6 ล้านบาท",
          advanced: "ไม่จำกัด",
          desc: ""
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