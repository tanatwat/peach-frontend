<template>
  <div class="page-content is-flex">
    <section id="container" class="section">
      <div class="load-overlay" v-show="$root.loading">
        <div class="roller-wrapper">
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <transition name="fade" enter-active-class="fade" leave-active-class="fadeOut">
        <div class="step-overlay" v-show="overlay"></div>
      </transition>

      <div class="container w-container">
        <p class="step-counter" v-show="step >= 1">หน้าที่&nbsp;{{ step + ' จาก ' + totalSteps}}</p>

        <div class="pricing-container has-text-centered" v-show="step == 1">
          <div class="content has-text-info">
            โปรดทำแบบสอบถามต่อไปนี้
            <br>เพื่อทำการประเมิณราคาเว็บไซต์ของลูกค้า
            <br>หลังจากนั้นผมจะออกใบเสนอราคาให้
            <br>ส่วนใหญ่แล้วจะใช้เวลาไม่เกิน 1 วัน
            <br>และทำการส่งให้ลูกค้าทางอีเมล
            <br>ถ้าผมมีคำถามเพิ่มเติม
            <br class="is-hidden-desktop">ผมจะทำการติดต่อกลับไปครับ
          </div>
          <step-button wrapper="has-text-centered" :back="false" next-text="เริ่มทำแบบสอบถาม"></step-button>
        </div>

        <div class="pricing-container" v-show="step == 2">
          <div class="form-group">
            <label class="has-text-centered">คุณชื่ออะไร?</label>
            <input class="input" type="text" placeholder="ชื่อของคุณ" v-model="form.name">
            <label class="has-text-centered">ชื่อบริษัท (ถ้ามี)</label>
            <input class="input" type="text" placeholder="ชื่อบริษัท" v-model="form.company">
            <label class="has-text-centered">อีเมล</label>
            <input class="input" type="email" placeholder="email@example.com" v-model="form.email">
            <label class="has-text-centered">ช่องทางติดต่ออื่น</label>
            <input
              class="input"
              type="text"
              placeholder="โทรศัพท์ ไลน์ หรืออื่นๆ"
              v-model="form.contact"
            >
            <label class="has-text-centered">ที่อยู่</label>
            <textarea
              cols="30"
              rows="5"
              v-model="form.address"
              placeholder="ที่อยู่ที่สามารถติดต่อได้"
            ></textarea>
          </div>

          <step-button :back="false"></step-button>
        </div>

        <!-- <transition name="fade">
          <div class="pricing-container has-text-centered" v-show="step == 2">
            <div class="content is-large has-text-info">
              <p>สวัสดีครับคุณ {{ name }}</p>
              <label>ต้องการเว็บไซต์สำหรับใคร?</label>
              <div id="example-3">
                <input class="is-hidden" type="radio" id="one" :value="1" v-model="form.websiteFor">
                <label class="radio-input" :class="{'checked' : websiteFor == 1}" for="one"><i class="fas fa-check" v-show="websiteFor == 1"></i>&nbsp;ตัวคุณเอง</label>
                <br>
                <input class="is-hidden" type="radio" id="two" :value="2" v-model="form.websiteFor">
                <label class="radio-input" :class="{'checked' : websiteFor == 2}" for="two"><i class="fas fa-check" v-show="websiteFor == 2"></i>&nbsp;บริษัท หรือ ธุรกิจของคุณ</label>
                <br>
              </div>
            </div>
            <step-button next-text="เริ่มเลย"></step-button>
          </div>
        </transition>-->

        <div class="pricing-container has-text-centered" v-show="step == 3">
          <div class="content is-large has-text-info">
            <label>คุณต้องการเว็บไซต์สำหรับอะไร?</label>
            <input
              class="input"
              type="text"
              placeholder="เช่น ธุรกิจของคุณ ขายสินค้า พอร์ตโฟลิโอ"
              v-model="form.goal"
            >
            <span class="example">อาจระบุว่าคุณทำธุรกิจอะไร หรือ เป้าหมายของคุณก็ได้</span>
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 4">
          <div class="content is-large has-text-info">
            <label>คุณมีโลโก้แบรนด์ของคุณหรือไม่?</label>
            <div class="level is-mobile" style="justify-content: space-around">
              <input class="is-hidden" type="radio" id="one" :value="true" v-model="form.hasLogo">
              <label
                class="radio-input"
                :class="{'checked' : form.hasLogo}"
                for="one"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="form.hasLogo"></i>&nbsp;มี
              </label>
              <input class="is-hidden" type="radio" id="two" :value="false" v-model="form.hasLogo">
              <label
                class="radio-input"
                :class="{'checked' : !form.hasLogo}"
                for="two"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="!form.hasLogo"></i>&nbsp;ไม่มี
              </label>
            </div>
            <label>คุณมีแบบดีไซน์อยู่แล้วหรือไม่?</label>
            <span
              class="example"
              style="margin-bottom: .75rem"
            >*ถ้าไม่มีคุณต้องเสียค่าออกแบบเพิ่มหรือคุณสามารถจ้างดีไซน์เนอร์อื่นทำให้ก็ได้</span>
            <div class="level is-mobile" style="justify-content: space-around">
              <input
                class="is-hidden"
                type="radio"
                id="three"
                :value="true"
                v-model="form.hasDesign"
              >
              <label
                class="radio-input"
                :class="{'checked' : form.hasDesign}"
                for="three"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="form.hasDesign"></i>&nbsp;มี
              </label>
              <input
                class="is-hidden"
                type="radio"
                id="four"
                :value="false"
                v-model="form.hasDesign"
              >
              <label
                class="radio-input"
                :class="{'checked' : !form.hasDesign}"
                for="four"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="!form.hasDesign"></i>&nbsp;ไม่มี
              </label>
            </div>
            <label>ถ้าคุณมีเว็บไซต์เดิมอยู่แล้วโปรดระบุ</label>
            <input
              class="input"
              type="text"
              placeholder="ลิ้งค์ไปยังเว็บไซต์ของคุณ"
              v-model="form.oldWebsite"
            >
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 5">
          <label>คุณต้องการโฮสต์กับโดเมนหรือไม่?</label>
          <div class="level is-mobile" style="justify-content: space-around">
            <input class="is-hidden" type="radio" id="Host" :value="true" v-model="form.hosting">
            <label
              class="radio-input"
              :class="{'checked' : form.hosting}"
              for="Host"
              style="width: 40%"
            >
              <i class="fas fa-check" v-show="form.hosting"></i>&nbsp;ใช่
            </label>
            <input class="is-hidden" type="radio" id="noHost" :value="false" v-model="form.hosting">
            <label
              class="radio-input"
              :class="{'checked' : !form.hosting}"
              for="noHost"
              style="width: 40%"
            >
              <i class="fas fa-check" v-show="!form.hosting"></i>&nbsp;ไม่
            </label>
          </div>
          <div class="content is-large has-text-info">
            <label>คุณต้องการให้เว็บไซต์ทำอะไรได้บ้าง?</label>
            <div v-for="(choice, index) in webFunctions">
              <input type="checkbox" :id="index" :value="choice" v-model="form.functionalities">
              <label class="checkbox" :for="index">{{ choice }}</label>
            </div>
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 6">
          <div class="content is-large has-text-info">
            <label>คุณต้องการเว็บไซต์กี่หน้า?</label>
            <input class="input" type="text" placeholder="จำนวนหน้า" v-model="form.totalPage">
            <label style="margin-top: 1rem">ต้องการหน้าเกี่ยวกับอะไรบ้าง?</label>
            <textarea
              cols="15"
              rows="10"
              v-model="form.pageName"
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
              v-model="form.description"
              placeholder="เช่น รูปแบบดีไซน์ ฟังก์ชั่นการใช้งาน ตัวอย่างเว็บไซต์"
            ></textarea>
          </div>
          <step-button></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="step == 8">
          <div class="content is-large has-text-info">
            <label>คุณมีงบประมาณเท่าไหร่?</label>
            <input class="input" type="text" placeholder="จำนวนเงิน" v-model="form.budget">
            <label style="margin-top: 1rem">ต้องการให้งานเสร็จภายในเวลาเท่าไหร่?</label>
            <select v-model="form.deadline">
              <option :value="date" v-for="date in deadlines">{{ date }}</option>
            </select>
          </div>
          <step-button></step-button>
        </div>

        <!-- <div class="pricing-container has-text-centered" v-show="step == 9">
          <div class="content is-large has-text-info">
            <label>
              ถ้ามีไฟล์ที่ต้องการแนบ
              <br>คุณสามารถอัพโหลดได้ด้านล่าง
            </label>
            <input type="file" name="" id="" multiple>
          </div>
          <step-button></step-button>
        </div>-->

        <div class="pricing-container has-text-centered" v-show="step == 9">
          <div class="content is-large has-text-info">
            <label>คำถามเพิ่มเติม</label>
            <textarea
              cols="30"
              rows="10"
              v-model="form.questions"
              placeholder="หากมีคำถามคุณสามารถเขียนได้ที่นี่"
            ></textarea>
          </div>
          <step-button :next="false" :submit-button="true" v-on:click-submit="submit()"></step-button>
        </div>

        <div class="pricing-container has-text-centered" v-show="formRecieved">
          <div class="content is-large has-text-info">
            <label>ส่งแบบฟอร์มเรียบร้อยแล้ว</label>
            <p>ผมจะทำการตอบกลับทางอีเมลพร้อมกับใบเสนอราคาครับ</p>
            <router-link
              to="/"
              class="navigation-action-button w-button"
              v-show="$root.page == 'page'"
            >กลับหน้าแรก</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import StepButton from "./_stepButton.vue";
export default {
  components: {
    StepButton
  },
  data() {
    return {
      formRecieved: false,
      step: 1,
      totalSteps: 9,
      form: {
        name: null,
        company: null,
        email: null,
        contact: null,
        address: null,
        //websiteFor: null,
        hasLogo: false,
        hasDesign: false,
        hosting: true,
        goal: null,
        oldWebsite: null,
        functionalities: [],
        description: null,
        totalPage: null,
        pageName: null,
        budget: null,
        deadline: null,
        questions: null
      },
      webFunctions: [
        "ระบบร้านค้า (Ecommerce)",
        "ระบบจัดการข้อมูล (CMS)",
        "ระบบสมาชิก",
        "ระบบค้นหา",
        "สองภาษา (ไทย, อังกฤษ)"
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
        }, 200);
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
    },
    submit() {
      this.$root.loading = true;
      const createdAt = new Date();
      const data = this.form;
      this.$db.collection("quotes").add({ data, createdAt });
      this.lineNotify();
      this.formRecieved = true;
      this.step = 0;
      this.$root.loading = false;
    },
    lineNotify() {
      const lineToken = "DyLBVWkbvpoNj0xGKdGOqpyhtZJ4zC6v2tZVvh37lG6";
      const msg = {
        message: `You have in comming qoutation request from ${this.form.name}`
      };
      axios.post(
        `${"https://cors-anywhere.herokuapp.com/"}https://notify-api.line.me/api/notify`,
        msg,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Bearer " + lineToken
          },
          params: msg
        }
      );
    }
  },
  created() {
    this.$root.page = "pricing";
    this.$parent.menu = false;
  }
};
</script>

<style lang="sass">
$btn-color: #6679d5
.step-overlay
  position: absolute
  width: 100%
  height: 100%
  background: #191e3c
.step-counter
  padding: .75rem
  background: $btn-color
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
   background:$btn-color
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
    color: $btn-color
  input, textarea, select
    border-color: #fff
    color: #555
    &:focus
      border-color: $btn-color
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
      border-color: $btn-color

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