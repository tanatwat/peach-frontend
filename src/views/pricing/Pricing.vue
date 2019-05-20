<template>
  <div class="page-content is-flex">
    <section id="container" class="section">
      <transition name="fade">
        <div class="step-overlay" v-show="overlay"></div>
      </transition>

      <div class="container w-container">
        <p class="step-counter">หน้าที่&nbsp;{{ step + ' จาก ' + totalSteps}}</p>

        <div class="pricing-container has-text-centered" v-show="step == 1">
          <div class="content has-text-info">
            โปรดทำแบบสอบถามต่อไปนี้
            <br>เพื่อทำการประเมิณราคาเว็บไซต์ของลูกค้า
            <br>หลังจากนั้นผมจะออกใบเสนอราคาให้
            <br>ส่วนใหญ่แล้วจะใช้เวลาไม่เกิน 1 วัน
            <br>ถ้าผมมีคำถามเพิ่มเติม
            <br class="is-hidden-desktop">ผมจะทำการติดต่อกลับไปครับ
          </div>
          <step-button wrapper="has-text-centered" :back="false" next-text="เริ่มทำแบบสอบถาม"></step-button>
        </div>

        <div class="pricing-container" v-show="step == 2">
          <label class="has-text-centered">คุณชื่ออะไร?</label>
          <input class="input" type="text" placeholder="ชื่อของคุณ" v-model="name">
          <label class="has-text-centered" style="margin-top:1rem">อีเมลของคุณ</label>
          <input class="input" type="email" placeholder="email@example.com" v-model="email">
          <label class="has-text-centered" style="margin-top:1rem">ช่องทางติดต่ออื่น</label>
          <input class="input" type="email" placeholder="โทรศัพท์ ไลน์ หรืออื่นๆ" v-model="address">
          <step-button :back="false"></step-button>
        </div>

        <!-- <transition name="fade">
          <div class="pricing-container has-text-centered" v-show="step == 2">
            <div class="content is-large has-text-info">
              <p>สวัสดีครับคุณ {{ name }}</p>
              <label>ต้องการเว็บไซต์สำหรับใคร?</label>
              <div id="example-3">
                <input class="is-hidden" type="radio" id="one" :value="1" v-model="websiteFor">
                <label class="radio-input" :class="{'checked' : websiteFor == 1}" for="one"><i class="fas fa-check" v-show="websiteFor == 1"></i>&nbsp;ตัวคุณเอง</label>
                <br>
                <input class="is-hidden" type="radio" id="two" :value="2" v-model="websiteFor">
                <label class="radio-input" :class="{'checked' : websiteFor == 2}" for="two"><i class="fas fa-check" v-show="websiteFor == 2"></i>&nbsp;บริษัท หรือ ธุรกิจของคุณ</label>
                <br>
              </div>
            </div>
            <step-button next-text="เริ่มเลย"></step-button>
          </div>
        </transition>-->

        <div class="pricing-container has-text-centered" v-show="step == 3">
          <div class="content is-large has-text-info">
            <p>สวัสดีครับคุณ {{ name }}</p>
            <label>คุณต้องการเว็บไซต์สำหรับอะไร?</label>
            <input
              class="input"
              type="text"
              placeholder="เช่น ธุรกิจของคุณ ขายสินค้า พอร์ตโฟลิโอ"
              v-model="goal"
            >
            <span class="example">อาจระบุว่าคุณทำธุรกิจอะไร หรือ เป้าหมายของคุณก็ได้</span>
          </div>
          <step-button :back="false"></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 4">
          <div class="content is-large has-text-info">
            <label>คุณมีโลโก้แบรนด์ของคุณหรือไม่?</label>
            <div class="level" style="justify-content: space-around">
              <input class="is-hidden" type="radio" id="one" :value="true" v-model="hasLogo">
              <label
                class="radio-input"
                :class="{'checked' : hasLogo}"
                for="one"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="hasLogo"></i>&nbsp;มี
              </label>
              <input class="is-hidden" type="radio" id="two" :value="false" v-model="hasLogo">
              <label
                class="radio-input"
                :class="{'checked' : !hasLogo}"
                for="two"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="!hasLogo"></i>&nbsp;ไม่มี
              </label>
            </div>
            <label>ถ้าคุณมีเว็บไซต์เดิมอยู่แล้วโปรดระบุ</label>

            <input
              class="input"
              type="text"
              placeholder="ลิ้งค์ไปยังเว็บไซต์ของคุณ"
              v-model="oldWebsite"
            >
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 5">
          <div class="content is-large has-text-info">
            <label>คุณต้องการให้เว็บไซต์ทำอะไรได้บ้าง?</label>
            <div v-for="(choice, index) in webFunctions">
              <input type="checkbox" :id="index" :value="choice" v-model="functionalities">
              <label class="checkbox" :for="index">{{ choice }}</label>
            </div>
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 6">
          <div class="content is-large has-text-info">
            <label>คุณต้องการเว็บไซต์กี่หน้า?</label>
            <input class="input" type="text" placeholder="จำนวนหน้า" v-model="totalPage">
            <label style="margin-top: 1rem">ต้องการหน้าเกี่ยวกับอะไรบ้าง?</label>
            <textarea
              cols="15"
              rows="10"
              v-model="pageName"
              placeholder="เช่น เกี่ยวกับเรา สินค้าและบริการ ติดต่อเรา"
              style="height: 200px"
            ></textarea>
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 7">
          <div class="content is-large has-text-info">
            <label>บอกความต้องการเพิ่มเติม</label>
            <span class="example">*ถ้ามีตัวอย่างเว็บไซต์แบบที่คุณต้องการโปรดระบุลิ้งค์</span>
            <textarea
              cols="30"
              rows="10"
              v-model="description"
              placeholder="เช่น รูปแบบดีไซน์ ฟังก์ชั่นการใช้งาน ตัวอย่างเว็บไซต์"
            ></textarea>
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 8">
          <div class="content is-large has-text-info">
            <label>คุณมีงบประมาณเท่าไหร่?</label>
            <input class="input" type="number" placeholder="จำนวนเงิน" v-model="budget">
            <label style="margin-top: 1rem">ต้องการให้งานเสร็จภายในเวลาเท่าไหร่?</label>
            <select v-model="deadline">
              <option :value="date" v-for="date in deadlines">{{ date }}</option>
            </select>
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 9">
          <div class="content is-large has-text-info">
            <label>
              ถ้ามีไฟล์ที่ต้องการแนบ
              <br>คุณสามารถอัพโหลดได้ด้านล่าง
            </label>
            <input class type="file">
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 10">
          <div class="content is-large has-text-info">
            <label>คำถามเพิ่มเติม</label>
            <textarea
              cols="30"
              rows="10"
              v-model="questions"
              placeholder="หากมีคำถามคุณสามารถเขียนได้ที่นี่"
            ></textarea>
          </div>
          <step-button next-text="ส่งแบบฟอร์ม"></step-button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import StepButton from "./_stepButton.vue";
export default {
  components: { StepButton },
  data() {
    return {
      step: 1,
      totalSteps: 10,
      name: null,
      email: null,
      address: null,
      websiteFor: null,
      hasLogo: false,
      goal: null,
      oldWebsite: null,
      functionalities: [],
      description: null,
      totalPage: null,
      pageName: null,
      budget: null,
      deadline: null,
      questions: null,
      webFunctions: [
        "ระบบร้านค้า (Ecommerce)",
        "ระบบจัดการข้อมูล (CMS)",
        "ระบบสมาชิก",
        "ระบบค้นหา"
      ],
      deadlines: [
        "ภายใน 1 สัปดาห์",
        "ภายใน 2 สัปดาห์",
        "ภายใน 1 เดือน",
        "ภายใน 2 เดือน",
        "ภายใน 3 เดือน",
        "ภายใน 6 เดือน"
      ],
      overlay: false
    };
  },
  watch: {
    step: {
      handler() {
        this.overlay = true;

        setTimeout(() => {
          this.overlay = false;
        }, 0);
      }
    }
  },
  methods: {
    toggleValue(event) {
      if (event.target.checked) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.$root.page = "page";
    this.$parent.menu = false;
  }
};
</script>

<style lang="sass">
.step-overlay
  position: absolute
  width: 100%
  height: 100%
  background: #191e3c
.step-counter
  padding: .75rem
  background: #7585da
  color: #fff
  text-align: center
  width: fit-content
  margin: 0 auto 1rem auto
  border-radius: 8px
#container
  flex-grow: 1
  background: #343b65
  width: 100%
  display: flex
  justify-content: space-around
  flex-direction: column
.pricing-button
   margin-top: 1.75rem
   padding: 0.5rem 30px
   border-radius: 8px
   background: #7585da
   color: #fff
   transition: all .3s ease
   &:hover
      background: #6a75ad
.pricing-container
  width: 600px
  max-width: 600px
  margin: 0 auto
  border: 3px solid #ffe9e9
  border-radius: 8px
  padding: 1.75rem .75rem
  background: #ffe9e9
  label, p , h1, h2 ,h3, h4 ,h5
    margin-bottom: 18px
    color: #5c71dd
  input, textarea, select
    border-color: #fff
    color: #555
    &:focus
      border-color: #5c71dd
  textarea
    font-size: 1.2rem !important
  .content
    line-height: 35px
    font-size: 1.4rem
.pricing-wrapper
   display: flex
   > *
      margin-right: .75rem
.option
   padding: 0.75rem 2rem
   border-radius: 8px
   min-width: 150px
   border: 2px solid #ddd
   color: #555
   font-size: 1.5rem
   background: #fff
   text-align: left
   &.active
      border-color: #5c71dd

span.example
  display: block
  font-size: medium
  margin-top: .75rem
@media (max-width: 768px)
  .pricing-container
    max-width: 100%
    width: 100%
    input
      font-size: 1.2rem !important
@media (max-width: 425px)
  .pricing-container
    max-width: 100%
    width: 100%
    .content
      font-size: 1.2rem
</style>