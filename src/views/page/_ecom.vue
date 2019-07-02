<template>
  <div class="hosting-wrapper">
    <div class="content is-size-4-desktop is-size-5-tablet">
      <h3 class="has-text-centered-mobile has-text-primary">{{ $t('hosting.ecom_hosting') }}</h3>
      <p>{{ $t('hosting.ecom_hosting_desc') }}</p>
    </div>
    <div class="columns is-multiline is-mobile has-text-centered pricing-table pricing-header">
      <div class="column is-3-desktop is-hidden-mobile"></div>
      <div class="column is-3-desktop">
        <!-- BASE 18,000 HOST 8,900 -->
        <p class="is-size-5 basic-font is-marginless has-text-primary">{{ $t('hosting.basic') }}</p>
        <!-- <p class="is-marginless">เริ่มต้น 26,900 บาท</p> -->
        <p class="is-marginless">13,900 {{ $t('hosting.yearly') }}</p>
        <!-- <p class="has-text-grey is-marginless">รายเดือน 990 บาท</p> -->
      </div>
      <div class="column is-3-desktop">
        <p class="is-size-5 basic-font is-marginless has-text-primary">{{ $t('hosting.business') }}</p>
        <!-- BASE 18,000 HOST 16,900 -->
        <!-- <p class="is-marginless">เริ่มต้น 34,900 บาท</p> -->
        <p class="is-marginless">34,900 {{ $t('hosting.yearly') }}</p>
        <!-- <p class="has-text-grey is-marginless">รายเดือน 1,990 บาท</p> -->
      </div>
      <div class="column is-3-desktop">
        <p
          class="is-size-5 basic-font is-marginless has-text-primary"
        >{{ $t('hosting.enterprise') }}</p>
        <!-- BASE 18,000 HOST 16,900 -->
        <!-- <p class="is-marginless">เริ่มต้น 34,900 บาท</p> -->
        <p class="is-marginless">99,900 {{ $t('hosting.yearly') }}</p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleDesc: null,
      ecomPackage: null,
      en: [
        {
          title: "Includes",
          standard: "All features from CMS Basic plan",
          plus: "All features from CMS Business plan",
          advanced: "All features from CMS Business plan",
          desc: null
        },
        {
          title: "Unbranded emails",
          standard: false,
          plus: true,
          advanced: true,
          desc: "Remove Webflow references from transaction email footers."
        },
        {
          title: "Transaction fee",
          standard: "2%",
          plus: "0%",
          advanced: "0%",
          desc: "In addition to Stripe processing fees."
        },
        {
          title: "Staff accounts",
          standard: "3",
          plus: "10",
          advanced: "15",
          desc:
            "Invite colleagues and clients to manage products, inventory, and fulfillment."
        },
        {
          title: "Products",
          standard: "500",
          plus: "1,000",
          advanced: "3,000",
          desc: "Amount of products you can have on the website."
        },
        {
          title: "Yearly sales volume",
          standard: "$50K around 1.5 million THB",
          plus: "$200K around 6 million THB",
          advanced: "unlimited",
          desc: "Calculated on a trailing 12-month basis."
        }
      ],
      th: [
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
        this.ecomPackage = this.en;
      } else {
        this.ecomPackage = this.th;
      }
    }
  },
  created() {
    this.changeLocale();
  }
};
</script>