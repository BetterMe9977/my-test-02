<template>
  <div class="child2 bg-img">
    <div class="child2-container bx">
      <section class="box">
        <div class="content">
          <Step currentEle="Child2" />
          <p class="remind">
            以下の内容で送信します。
            <br />
            入力内容をご確認の上、「この内容で送信する」をクリックして下さい。
          </p>
          <div class="form-wrapper">
            <table>
              <tbody>
                <tr>
                  <th>御社名</th>
                  <td>
                    {{ formData.company_name }}
                  </td>
                </tr>
                <tr>
                  <th>お名前</th>
                  <td>
                    {{ formData.name }}
                  </td>
                </tr>
                <tr>
                  <th>お名前(フリガナ)</th>
                  <td>
                    {{ formData.name2 }}
                  </td>
                </tr>
                <tr>
                  <th>mail</th>
                  <td>
                    {{ formData.email }}
                  </td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>
                    {{ formData.phone }}
                  </td>
                </tr>
                <tr>
                  <th>お問い合わせ内容</th>
                  <td>
                    {{ formData.text }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="btn-gropu">
              <input type="submit" @click="goBackHandler" value="≪ 戻る" class="sub-btn" />
              &nbsp;
              <input @click="finishHandler" value="この内容で送信する ≫" class="cel-btn" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Step from "@/components/Step/Step";
import axios from 'axios';

export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社dreaMTank ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: `お問い合わせ | dreaMTank株式会社`
  },
  name: "MyTest0ContactChild2",
  props: {
    formData: {
      type: Object
    }
  },
  components: {
    Step
  },

  data() {
    return {
    };
  },

  mounted() { },

  methods: {
    goBackHandler() {
      this.$emit("currentIndexHandler", {
        Child2: "Child1",
        formData: this.formData
      });
    },
    
    async finishHandler() {
      try {
        const response = await axios.post('/static/send_email.php', {
          company_name: this.formData.company_name,
          name: this.formData.name,
          name2: this.formData.name2,
          email: this.formData.email,
          phone: this.formData.phone,
          text: this.formData.text
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        this.$emit("currentIndexHandler", {
          Child2: "Child3",
          formData: this.formData
        });
      } catch (error) {
        alert('邮件发送失败: ' + error.response.data);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.child2
  padding: 0 25px;
  overflow: hidden
  width 100%
  .child2-container
    background: #fff
    .box
      padding: 20px 60px 100px 60px
      .content
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        .form-wrapper
          table
            width: 100%;
            border-collapse: separate
            margin-bottom: 40px
            text-align: left
            border-bottom: 1px solid #ECE8E6;
            border-spacing: 0;
            th
              width: 25%;
              vertical-align: top;
              padding: 5px 0;
              border-top: 1px solid #ECE8E6;
            td
              width: 75%;
              vertical-align: top;
              padding: 5px 0;
              position: relative
              border-top: 1px solid #ECE8E6;
          .btn-gropu
            margin-bottom: 40px
            display: flex
            justify-content: center
            .sub-btn,
            .cel-btn
              margin: 0 0 0 0;
              padding: 12px 15px;
              background-color: #DF0011;
              font-size: 18px;
              color: #FFF;
              transition: all 0.5s ease
              border: none;
              cursor: pointer;
            .cel-btn
              background-color: #df0011;
            .sub-btn
              background-color: #888
        .remind
          margin-bottom: 40px
@media screen and (max-width: 1039px)
  .child2
    .child2-container
      .box
        width: auto;
        padding: 20px 40px 80px 40px;
        .content
          .p-desc
            margin-bottom: 50px
            .phone-wrapper
              width 90%
          .form-wrapper
            table
              tbody
                tr
                  th
                    width: 30%;
                  td
                    width 70%


@media screen and (max-width: 767px)
  .child2
    padding: 0 15px
    .child2-container
      .box
        width: auto;
        padding: 20px 20px 60px 20px;
        .content
          .form-wrapper
            table
              margin-bottom: 30px
              tbody
                width 100%
                tr
                  width 100%
                  th
                    background: #ECE8E6;
                    font-weight: bold;
                    padding: 10px 10px;
                    border: 1px solid #ECE8E6;
                    width: 100%;
                    display: block;
                  td
                    padding: 10px 10px;
                    border: 1px solid #ECE8E6;
                    width: 100%;
                    display: block;
            .btn-gropu
              margin-bottom: 30px
              input
                font-size: 14px !important
          .remind
            font-size: 14px
</style>
