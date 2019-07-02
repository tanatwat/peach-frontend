<template>
  <div class="hosting-wrapper">
    <div class="content is-size-4-desktop is-size-5-tablet">
      <h3 class="has-text-centered-mobile has-text-primary">{{ $t('hosting.cms_hosting') }}</h3>
      <p>{{ $t('hosting.cms_hosting_desc') }}</p>
    </div>

    <div class="columns is-multiline is-mobile has-text-centered pricing-table pricing-header">
      <div class="column is-4-desktop is-hidden-mobile"></div>
      <div class="column is-4-desktop">
        <!-- BASE 18,000 HOST 8,900 -->
        <p class="is-size-5 basic-font is-marginless has-text-primary">{{ $t('hosting.basic') }}</p>
        <!-- <p class="is-marginless">เริ่มต้น 26,900 บาท</p> -->
        <p class="is-marginless">8,900 {{ $t('hosting.yearly') }}</p>
        <!-- <p class="has-text-grey is-marginless">รายเดือน 990 บาท</p> -->
      </div>
      <div class="column is-4-desktop">
        <p class="is-size-5 basic-font is-marginless has-text-primary">{{ $t('hosting.business') }}</p>
        <!-- BASE 18,000 HOST 16,900 -->
        <!-- <p class="is-marginless">เริ่มต้น 34,900 บาท</p> -->
        <p class="is-marginless">16,900 {{ $t('hosting.yearly') }}</p>
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
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      toggleDesc: null,
      basicPackage: null,
      en: [
        {
          title: "Monthly visits",
          basic: "25,000",
          cms: "100,000",
          business: "1,000,000",
          desc:
            "The number of unique daily visits you can get to your site every month."
        },
        {
          title: "Form submissions",
          basic: "500",
          cms: "1,000",
          business: "unlimited",
          desc:
            "Collect form submissions, customize notification emails, and download submissions as a CSV. $1 per 100 extra submissions."
        },
        {
          title: "CMS items",
          basic: null,
          cms: "2,000",
          business: "10,000",
          desc:
            "The maximum number of records you can have in your CMS database. Ex: 50 projects in a portfolio."
        },
        {
          title: "Site search",
          basic: null,
          cms: true,
          business: true,
          desc:
            "Create a custom search engine and let visitors search for specific content on your site."
        },
        {
          title: "Form file upload",
          basic: null,
          cms: false,
          business: true,
          desc:
            "Collect files with an upload button in forms. Max file size per upload is 10MB. Storage is free up to 10GB"
        }
      ],
      th: [
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
  watch: {
    "$i18n.locale": {
      handler() {
        this.changeLocale();
      }
    }
  },
  methods: {
    toggle(index) {
      if (index == this.toggleDesc) {
        this.toggleDesc = null;
      } else {
        this.toggleDesc = index;
      }
    },
    changeLocale() {
      if (this.$i18n.locale == "en") {
        this.basicPackage = this.en;
      } else {
        this.basicPackage = this.th;
      }
    }
  },
  created() {
    this.changeLocale();
  }
};
</script>