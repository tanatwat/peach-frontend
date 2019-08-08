<template>
  <div class="page-content is-flex">
    <section id="container" class="section">
      <transition name="fade" enter-active-class="fade" leave-active-class="fadeOut">
        <div class="step-overlay" v-show="overlay"></div>
      </transition>

      <div class="container w-container">
        <p
          class="step-counter"
          v-show="step >= 1"
        >{{ $t('quote.steps') }}&nbsp;{{ step + $t('quote.of') + totalSteps}}</p>

        <div class="quote-container has-text-centered" v-show="step == 1">
          <div class="content has-text-white">{{ $t('quote.1.msg') }}</div>
          <step-button wrapper="has-text-centered" :back="false" :next-text="$t('quote.start')"></step-button>
        </div>

        <div class="quote-container" v-show="step == 2">
          <div class="form-group">
            <label class="has-text-centered">{{ $t('quote.2.name') }}</label>
            <input
              class="input"
              type="text"
              :placeholder="$t('quote.2.placeholder1')"
              v-model="form.name"
            />
            <label class="has-text-centered">{{ $t('quote.2.company_name') }}</label>
            <input
              class="input"
              type="text"
              :placeholder="$t('quote.2.placeholder2')"
              v-model="form.company"
            />
            <label class="has-text-centered">{{ $t('quote.2.email') }}</label>
            <input class="input" type="email" placeholder="email@example.com" v-model="form.email" />
            <label class="has-text-centered">{{ $t('quote.2.contact') }}</label>
            <input
              class="input"
              type="text"
              :placeholder="$t('quote.2.placeholder3')"
              v-model="form.contact"
            />
            <label class="has-text-centered">{{ $t('quote.2.address') }}</label>
            <textarea
              cols="30"
              rows="5"
              v-model="form.address"
              :placeholder="$t('quote.2.placeholder4')"
            ></textarea>
          </div>

          <step-button :back="false"></step-button>
        </div>

        <!-- <transition name="fade">
          <div class="quote-container has-text-centered" v-show="step == 2">
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

        <div class="quote-container has-text-centered" v-show="step == 3">
          <div class="content is-large has-text-info">
            <label>{{ $t('quote.3.website_for') }}</label>
            <input
              class="input"
              type="text"
              :placeholder="$t('quote.3.placeholder')"
              v-model="form.goal"
            />
            <span class="example">{{ $t('quote.3.example') }}</span>
          </div>
          <step-button></step-button>
        </div>

        <div class="quote-container has-text-centered" v-show="step == 4">
          <div class="content is-large has-text-info">
            <label>{{ $t('quote.4.has_logo') }}</label>
            <div class="level is-mobile">
              <input class="is-hidden" type="radio" id="one" :value="true" v-model="form.hasLogo" />
              <label
                class="radio-input"
                :class="{'checked' : form.hasLogo}"
                for="one"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="form.hasLogo"></i>
                &nbsp;{{ $t('quote.has') }}
              </label>
              <input class="is-hidden" type="radio" id="two" :value="false" v-model="form.hasLogo" />
              <label
                class="radio-input"
                :class="{'checked' : !form.hasLogo}"
                for="two"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="!form.hasLogo"></i>
                &nbsp;{{ $t('quote.not_has') }}
              </label>
            </div>
            <label>{{ $t('quote.4.has_design') }}</label>
            <span class="example" style="margin-bottom: .75rem">{{ $t('quote.4.example') }}</span>
            <div class="level is-mobile">
              <input
                class="is-hidden"
                type="radio"
                id="three"
                :value="true"
                v-model="form.hasDesign"
              />
              <label
                class="radio-input"
                :class="{'checked' : form.hasDesign}"
                for="three"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="form.hasDesign"></i>
                &nbsp;{{ $t('quote.has') }}
              </label>
              <input
                class="is-hidden"
                type="radio"
                id="four"
                :value="false"
                v-model="form.hasDesign"
              />
              <label
                class="radio-input"
                :class="{'checked' : !form.hasDesign}"
                for="four"
                style="width: 40%"
              >
                <i class="fas fa-check" v-show="!form.hasDesign"></i>
                &nbsp;{{ $t('quote.not_has') }}
              </label>
            </div>
            <label>{{ $t('quote.4.has_website')}}</label>
            <input
              class="input"
              type="text"
              :placeholder="$t('quote.4.placeholder')"
              v-model="form.oldWebsite"
            />
          </div>
          <step-button></step-button>
        </div>

        <div class="quote-container has-text-centered" v-show="step == 5">
          <label>{{ $t('quote.5.hosting') }}</label>
          <div class="level is-mobile">
            <input class="is-hidden" type="radio" id="Host" :value="true" v-model="form.hosting" />
            <label
              class="radio-input"
              :class="{'checked' : form.hosting}"
              for="Host"
              style="width: 40%"
            >
              <i class="fas fa-check" v-show="form.hosting"></i>
              &nbsp;{{ $t('quote.yes') }}
            </label>
            <input class="is-hidden" type="radio" id="noHost" :value="false" v-model="form.hosting" />
            <label
              class="radio-input"
              :class="{'checked' : !form.hosting}"
              for="noHost"
              style="width: 40%"
            >
              <i class="fas fa-check" v-show="!form.hosting"></i>
              &nbsp;{{ $t('quote.no') }}
            </label>
          </div>
          <div class="content is-large has-text-info">
            <label>{{ $t('quote.5.function') }}</label>
            <div v-for="(choice, index) in webFunctions">
              <input type="checkbox" :id="index" :value="choice" v-model="form.functionalities" />
              <label class="checkbox" :for="index">{{ choice }}</label>
            </div>
          </div>
          <step-button></step-button>
        </div>

        <div class="quote-container has-text-centered" v-show="step == 6">
          <div class="content is-large has-text-info">
            <label>{{ $t('quote.6.pages') }}</label>
            <input
              class="input"
              type="text"
              :placeholder="$t('quote.6.placeholder1')"
              v-model="form.totalPage"
            />
            <label style="margin-top: 1rem">{{ $t('quote.6.page_content') }}</label>
            <textarea
              cols="15"
              rows="10"
              v-model="form.pageName"
              :placeholder="$t('quote.6.placeholder2')"
              style="height: 200px"
            ></textarea>
          </div>
          <step-button></step-button>
        </div>

        <div class="quote-container has-text-centered" v-show="step == 7">
          <div class="content is-large has-text-info">
            <label>{{ $t('quote.7.extra') }}</label>
            <span class="example">{{ $t('quote.7.example') }}</span>
            <textarea
              cols="30"
              rows="10"
              v-model="form.description"
              :placeholder="$t('quote.7.placeholder')"
            ></textarea>
          </div>
          <step-button></step-button>
        </div>

        <div class="quote-container has-text-centered" v-show="step == 8">
          <div class="content is-large has-text-info">
            <label>{{ $t('quote.8.budget') }}</label>
            <input
              class="input"
              type="text"
              :placeholder="$t('quote.8.placeholder')"
              v-model="form.budget"
            />
            <label style="margin-top: 1rem">{{ $t('quote.8.deadline') }}</label>
            <select v-model="form.deadline">
              <option :value="date" v-for="date in deadlines">{{ date }}</option>
            </select>
          </div>
          <step-button></step-button>
        </div>

        <!-- <div class="quote-container has-text-centered" v-show="step == 9">
          <div class="content is-large has-text-info">
            <label>
              ถ้ามีไฟล์ที่ต้องการแนบ
              <br>คุณสามารถอัพโหลดได้ด้านล่าง
            </label>
            <input type="file" name="" id="" multiple>
          </div>
          <step-button></step-button>
        </div>-->

        <div class="quote-container has-text-centered" v-show="step == 9">
          <div class="content is-large has-text-info">
            <label>{{ $t('quote.9.question') }}</label>
            <textarea
              cols="30"
              rows="10"
              v-model="form.questions"
              :placeholder="$t('quote.9.placeholder')"
            ></textarea>
          </div>
          <step-button :next="false" :submit-button="true" v-on:click-submit="submit()"></step-button>
        </div>

        <div class="quote-container has-text-centered" v-show="formRecieved">
          <div class="content is-large has-text-info">
            <label>{{ $t('quote.finish') }}</label>
            <p>{{ $t('quote.finish_msg') }}</p>
            <router-link
              to="/"
              class="navigation-action-button w-button"
              v-show="$root.page == 'page'"
            >{{ $t('quote.back_home') }}</router-link>
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
      webFunctions: null,
      deadlines: null,
      overlay: false,
      features: {
        en: [
          "Ecommerce",
          "CMS",
          "Site Search",
          "Multiple Languages (Thai, English)"
        ],
        th: [
          "ระบบร้านค้า (Ecommerce)",
          "ระบบจัดการข้อมูล (CMS)",
          "ระบบค้นหา",
          "สองภาษา (ไทย, อังกฤษ)"
        ]
      },
      timeline: {
        en: [
          "in a week",
          "in 2 weeks",
          "in a month",
          "in 2 months",
          "in 3 months",
          "in 6 months",
          "none"
        ],
        th: [
          "ภายใน 1 สัปดาห์",
          "ภายใน 2 สัปดาห์",
          "ภายใน 1 เดือน",
          "ภายใน 2 เดือน",
          "ภายใน 3 เดือน",
          "ภายใน 6 เดือน",
          "ไม่จำกัด"
        ]
      }
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
      setTimeout(() => (this.$root.loading = false), 1500);
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
    },
    setLocale() {
      this.webFunctions = this.features[this.$i18n.locale]
      this.deadlines = this.timeline[this.$i18n.locale]
    }
  },
  created() {
    this.$root.page = "pricing";
    this.$parent.menu = false;
    this.setLocale()
  }
};
</script>