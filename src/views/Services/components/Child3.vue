<template>
  <div class="child3">
    child3
  </div>
</template>

<script>
import card03 from "@/assets/img/card-03.jpeg";

export default {
  name: "MyTest02ServicesChild3",

  data() {
    return {
      card03
    };
  },

  mounted() {
    console.log(this.$route);
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
.child3
  .title
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 40px;
    .en
      display: block;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 700;
      font-size: 38px;
      color: #DF0011;
      letter-spacing: 0.06em;
    .ja
      display: inline-block;
      line-height: 1;
      letter-spacing: 0.06em;
      padding: 0 20px;
      border-left: 1px solid #333;
      border-right: 1px solid #333;
  .info-img
    max-width: 400px;
    height 400px
    display: block;
    margin: 0 auto 50px auto;
    border-radius: 100%
  .section1
    display: flex
    .section1-left
      width 25%
      .txt-wrapper
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 50px;
        font-weight: bold;
        text-align: center;
        color: #DF0011;
        line-height: 1.2;
        letter-spacing: 0.06em;
        margin: 0 auto 30px auto;
        .txt
          display: block;
          font-size: 14px;
          color: #D9999E;
    .section1-right
      flex: 1
      .title
        font-size: 163%;
        font-weight: bold;
        line-height: 1.6;
        margin-bottom: 25px;
        text-align: left
      .p1
        margin-bottom: 30px
      .flow-wrapper
        width: 240px;
        margin: 0 auto 50px auto;
        .item-wrapper:after
          position: absolute;
          content: '';
          width: 34px;
          height: 23px;
          background: url(../../../assets/img/icon-down-arrow.png) 0 0 no-repeat;
          background-size: 34px 23px;
          bottom: 2px;
          left: 50%;
          margin-left: -17px;
        .item-wrapper:last-child:after
          height: 45px;
          background: none;
        .item-wrapper
          width: 100%;
          height: 75px;
          position: relative;
          .item
            display: inline-block;
            width: 100%;
            height: 42px;
            line-height: 42px;
            text-align: center;
            font-size: 100%;
            background: #F0DFE0;
            border-radius: 4px;
      .t3
        font-size: 125%;
        font-weight: bold;
        line-height: 1.6;
        border-left: 5px solid #DF0011;
        padding-left: 0.6em;
        margin-bottom: 25px;
      .btn1
        margin-bottom: 20px;
        font-size: 100%
        .btn1-txt
          display: inline-block;
          font-size: 113%;
          font-weight: normal;
          color: #FFF;
          line-height: 1.5;
          background: #888;
          padding: 0.4em 0.8em;
          border-radius: 4px;
      .it-list
        width: 100%;
        border-collapse: separate;
        margin-bottom: 40px
        tr
          display: flex
          th
            width: 25%;
            vertical-align: top;
            padding: 5px 0;
            text-align: left
          td
            flex: 1
            padding: 5px 0;
            vertical-align: top;
            p
              border-left: 1px solid #E3B2B6;
              padding-left: 50px;
@media screen and (max-width: 1039px)
  .child3
    margin-bottom: 50px;
    .title
      margin-bottom: 30px
      .en
        font-size: 32px
    .section1
      .section1-left
        width: 20%;
        .txt-wrapper
          font-size: 46px;
      .section1-right
        width: 72%;


@media (max-width: 767px)
  .child3
    margin-bottom: 40px;
    .title
      .en
        font-size: 26px
      .ja
        padding: 0 15px;
    .info-img
      height: 320px
      width 320px
    .section1
      flex-wrap: wrap
      .section1-left
        width 100%
        .txt-wrapper
          font-size: 38px;
          margin: 0 auto 20px auto;
          .txt
            font-size: 12px
      .section1-right
        width: 100%;
        .title
          font-size: 120%;
          font-weight: bold;
          line-height: 1.6;
          text-align: center;
          margin-bottom: 25px;
        .flow-wrapper
          margin: 0 auto 40px auto;
          .item-wrapper
            height 72px
        .t3
          font-size: 113%;
        .btn1
          .btn1-txt
            font-size: 100%
        .it-list
          margin-bottom: 30px
          tbody
            width 100%
            tr
              width 100%
              flex-wrap: wrap
              th
                width 100%
                background: #ECE8E6;
                font-weight: bold;
                padding: 10px 10px;
                border: 1px solid #ECE8E6;
                width: 100%;
              td
                padding: 10px 10px;
                border: 1px solid #ECE8E6;
                width: 100%;
                p
                  border-left: none;
                  padding-left: 0;


@media (min-width: 640px)
  .child1
    max-width: 640px;
@media (min-width: 768px)
  .child1
    max-width: 768px;
@media (min-width: 1024px)
  .child1
    max-width: 1024px;

@media (min-width: 1280px)
  .child1
    max-width: 1280px
</style>
