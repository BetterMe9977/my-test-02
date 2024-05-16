<template>
  <div class="child1 bg-img">
    <div class="child1-container bx">
      <section class="box">
        <div class="content">
          <p class="p-desc">
            弊社へのお問い合わせ、お見積もりは下記のフォームより受け付けております。
            <br />
            内容確認後、折り返し、弊社担当よりご連絡さしあげます。
          </p>
          <div class="phone-wrapper">
            <p class="tel-box">
              お電話でのお問い合わせはこちら
              <span class="tel">
                <span class="iconfont icon-phone"></span>
                0267-41-6898</span
              >
            </p>
          </div>
          <Step currentEle="Child1" />
          <h3 class="tips">
            <span>必須</span>
            の項目は必ずご入力ください。
          </h3>
          <form @submit.prevent="submitForm" class="form-wrapper">
            <table>
              <tbody>
                <tr>
                  <th>御社名</th>
                  <td>
                    <input v-model="formData.company_name" type="text" />
                  </td>
                </tr>
                <tr>
                  <th>お名前<span class="require">必須</span></th>
                  <td>
                    <input
                      v-model="formData.name"
                      class="validate[required]"
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <th>お名前(フリガナ)</th>
                  <td>
                    <input v-model="formData.name2" type="text" />
                  </td>
                </tr>
                <tr>
                  <th>メールアドレス<span class="require">必須</span></th>
                  <td>
                    <input
                      v-model="formData.email"
                      class="validate[required,custom[email]]"
                      name="email"
                      type="emial"
                    />
                  </td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>
                    <input v-model="formData.phone" class="tel" type="tel" />
                  </td>
                </tr>
                <tr>
                  <th>お問い合わせ内容<span class="require">必須</span></th>
                  <td>
                    <textarea
                      v-model="formData.text"
                      class="textarea validate[required]"
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <p class="agree">
              <a href="" class="link-txt">個人情報保護方針</a
              >をご確認いただき、同意の上送信ください。
            </p>
            <div class="btn-gropu">
              <input type="submit" value="内容を確認する »" class="sub-btn" />
              &nbsp;
              <input
                @click="resetForm"
                type="reset"
                value="リセット"
                class="cel-btn"
              />
            </div>
          </form>
          <p class="remind">
            ※「内容を確認する」をクリックしただけでは送信完了しません。
            <br />
            必ず、確認画面で「この内容で送信する」をクリックしてください。
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Step from "@/components/Step/Step";
export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "千誠国際⽇本語学校"
      }
    ],
    title: `お問い合わせ | 千誠国際⽇本語学校`
  },
  name: "MyTest02ContactChild1",
  components: {
    Step
  },

  data() {
    return {
      formData: {
        company_name: "",
        name: "",
        name2: "",
        email: "",
        text: "",
        phone: ""
        // 添加其他表单字段
      }
    };
  },

  mounted() {
    $(".form-wrapper").validationEngine("attach", {
      promptPosition: "bottomLeft",
      autoPositionUpdate: true,
      onSuccess: true
    });
  },

  methods: {
    submitForm() {
      const { email, name, text } = this.formData;
      const reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
      if (email && reg.test(email) && text) {
        this.$emit("currentIndexHandler", {
          Child2: "Child2",
          formData: this.formData
        });
      }
    },
    resetForm() {
      for (const key in this.formData) {
        this.formData[key] = "";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.child1
  padding: 0 25px;
  overflow: hidden
  width 100%
  .child1-container
    background: #fff
    .box
      padding: 20px 60px 100px 60px
      .content
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        .p-desc
          margin-bottom: 50px
        .phone-wrapper
          width: 80%;
          background: #F0F0F0;
          padding: 30px;
          margin: 0 auto 70px auto;
          .tel-box
            text-align: center;
            font-size: 125%;
            .tel
              font-family: 'Roboto Condensed', sans-serif;
              font-size: 30px;
              color: #DF0011;
              margin-left: 12px;
              letter-spacing: 0.04em;
              .icon-phone
                font-size: 24px;
                color: #DF0011
        .tips
          margin-bottom: 40px
          span
            display: inline-block;
            padding: 1px 5px;
            background-color: #BE251D;
            color: #FFF;
            font-size: 10px;
            margin-left: 7px;
            border-radius: 3px;
        .form-wrapper
          table
            width: 100%;
            border-collapse: separate
            margin-bottom: 40px
            text-align: left
            th
              width: 25%;
              vertical-align: top;
              padding: 5px 0;
              .require
                display: inline-block;
                padding: 1px 5px;
                background-color: #BE251D;
                color: #FFF;
                font-size: 10px;
                margin-left: 7px;
                border-radius: 3px;
            td
              width: 75%;
              vertical-align: top;
              padding: 5px 0;
              position: relative
              input
                width: 90%;
                border: 1px solid #DEDEDE;
                padding: 5px 10px;
                border-radius: 4px;
              .tel
                width 50%
              .textarea
                width: 100%;
                height: 150px;
                border: 1px solid #DEDEDE;
                padding: 5px 10px;
                border-radius: 4px
          .agree
            margin-bottom: 40px
            .link-txt
              color: #DF0011;
              text-decoration: none;
              transition: all 0.4s ease
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
              background-color: #888
@media screen and (max-width: 1039px)
  .child1
    .child1-container
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
                    input
                      width 100%
                    .tel
                      width 60%

@media screen and (max-width: 767px)
  .child1
    padding: 0 15px
    .child1-container
      .box
        width: auto;
        padding: 20px 20px 60px 20px;
        .content
          .p-desc
            margin-bottom: 40px
          .phone-wrapper
            width: 100%;
            padding: 15px 10px;
            margin: 0 auto 50px auto;
            .tel-box
              font-size: 100%
              .tel
                font-size: 26px;
                color: #DF0011;
                margin-left: 0;
                display: block
                .icon-phone
                  font-size: 20px
          .tips
            margin-bottom: 30px
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
                    input
                      width 100%
                    .tel
                      width 60%
            .agree,
            .btn-gropu
              margin-bottom: 30px
          .remind
            font-size: 14px
</style>
