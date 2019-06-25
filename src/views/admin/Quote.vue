<template>
  <div>
    <div class="qoute" :class="{'active' : toggle == index}" v-for="(item, index) in quotes">
      <div class="is-flex">
        <a class="fas fa-trash-alt" @click="remove(index, item.id)"></a>&nbsp;
        <div class="qoute-title" :class="{'active' : toggle == index}" @click="toggleList(index)">
          <p>{{ item.createdAt.toDate() }}</p>
          <p>ชื่อ: {{ item.data.name }}</p>
        </div>
      </div>
      <div v-show="toggle == index">
        <p>บริษัท: {{ item.data.company }}</p>
        <p>{{ item.data.email }}</p>
        <p>
          {{ item.data.contact }}
          <br>
          {{ item.data.address }}
        </p>
        <p class="has-text-info">Goal: {{ item.data.goal }}</p>
        <p class="has-text-info">
          <span v-for="func in item.data.functionalities">{{ func }} /</span>
        </p>
        <p>{{ item.data.hasLogo ? 'มีโลโก้' : 'ไม่มีโลโก้' }} / {{ item.data.oldWebsite }}</p>
        <p><strong>Host</strong>
        {{ item.data.hosting ? 'ต้องการโฮสต์' : 'ไม่ต้องการโฮสต์' }}
        </p>
        <p class="has-text-info">จำนวนหน้า {{ item.data.totalPage }} /**{{ item.data.pageName }}</p>
        <p>
          <strong>Description</strong>
          {{ item.data.description }}
        </p>
        <p>
          <strong>Budget</strong>
          {{ item.data.budget }}
        </p>
        <p>
          <strong>Deadline</strong>
          {{ item.data.deadline }}
        </p>
        <p>{{ item.data.questions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [],
      toggle: null
    };
  },
  firestore() {
    return {
      quotes: this.$db.collection("quotes").orderBy("createdAt", "desc")
    };
  },
  methods: {
    toggleList(index) {
      if (this.toggle == index) {
        this.toggle = null;
      } else {
        this.toggle = index;
      }
    },
    remove(index, id) {
      if (confirm("You sure?")) {
        this.$db
          .collection("quotes")
          .doc(id)
          .delete();
      }
    }
  }
};
</script>

<style lang="sass">
   .qoute
      border-bottom: 1px solid #ddd
      padding: .75rem
      cursor: pointer
      &.active
         border: 2px solid #5c71dd
         border-radius: 8px
      .qoute-title:hover
         background: #eee
         color: #777
      .qoute-title.active
            background: transparent
            color: #5c71dd
</style>