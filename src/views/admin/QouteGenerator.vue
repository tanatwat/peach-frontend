<template>
  <div>
    <form>
      <label for>เสนอ</label>
      <input type="text">
      <label for>ผู้ติดต่อ</label>
      <input type="text">
      <label for>ที่อยู่ลูกค้า</label>
      <input type="text">
      <label for>วันที่</label>
      <input type="text">
      <label for>เลขที่</label>
      <input type="text">
    </form>
    <button @click="create()">CREATE</button>

    <div class="pdf-export" ref="pdf">
      gsdfsdfdf

      <div class="level">
        <div>
          <table>
            <tr>
              <td>เสนอ</td>
              <td class="form">NAME</td>
            </tr>
            <tr>
              <td>ผู้ติดต่อ</td>
              <td class="form">CONTEACT</td>
            </tr>
            <tr>
              <td>ที่อยู่</td>
              <td class="form">ADDRESS</td>
            </tr>
          </table>
        </div>
        <div>
          <table>
            <tr>
              <td>เลขที่</td>
              <td class="form">NAME</td>
            </tr>
            <tr>
              <td>วันที่</td>
              <td class="form">CONTEACT</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";

export default {
  data() {
    return {}
  },
  methods: {
    create() {
      const doc = new jsPDF();
      const contentHtml = this.$refs.pdf.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {
        width: 500
      });
      doc.save(Date.now() + ".pdf");
    }
  },
  created() {}
};
</script>

<style lang="sass">
  td.form
    padding:  0 .75rem
</style>