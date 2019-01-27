<template lang="pug">
    - imgPath = '~assets/images/'
    include ../assets/pug/mixin
    section.container
        app-header(@scroll-link="moveScroll")
        key-visual
        section.concept#concept
            h2.concept__title concept
            p.concept__text
                | ウミベプランニングは、
                br
                | クリエイティブコンテンツの
                br.only-sp
                | 企画制作を通じ、
                br
                | 人を笑顔に、世界をハッピーにする
                br.only-sp
                | お手伝いをします。
            +bgWave("#def4f7", 1)
            +bgWaveSP("#def4f7", 1)
        section.service#service
            h2.service__title service
            ul.service__list
                li.service__item
                    p.service-item__title クライアントワーク
                    img.service-item__pic(src=`${imgPath}service_pic_1.jpg` alt="")
                    p.service-item__explain 企業や自治体のみなさまが抱えるコミュニケーション課題を明るく楽しく解決すべく、ウェブ/映像などのデジタルや空間/イベントなど、コンテンツ全般の企画制作を行います。
                    a.service-item__link(href="https://www.instagram.com/umibeplanning/" target="_blank") 最近のお仕事
                li.service__item
                    p.service-item__title オリジナルブランド
                    img.service-item__pic(src=`${imgPath}service_pic_2.jpg` alt="")
                    p.service-item__explain 水着を中心としたオリジナルプロダクトのD2Cプロジェクト。商品開発/デザイン/生産/販売/ブランディングの全てのプロセスを、ウミベプランニングで手がけています。
                    a.service-item__link(href="https://colca.jp/" target="_blank") ブランドサイト
        section.about#about
            h2.about__title about
            img.about__icon(src=`${imgPath}about_pic_1.png` alt="")
            p.about__explain
                +picture(`${imgPath}about_txt_explain.png`, "楠瀬 薫子 / くすのせ・かおるこ ウミベプランニング代表/プランナー 多摩美術大学生産デザイン学科テキスタイルデザイン専攻卒業。ぬいぐるみメーカーやクリエイティブカンパニー「面白法人カヤック」勤務を経てフリーランス。自治体や企業のみなさまが抱えるコミュニケーション課題を、明るく楽しく解決するお手伝いをしながら、オリジナル水着のブランド“COLCA“の運営を行っています。")(class="about__explain-image")
            +bgWave("#fff", 1)
            +bgWaveSP("#fff", 1)
        .contact#contact
            a.contact__button(href="mailto:info@umibe-planning.jp", target="_blank")
                img.contact__button-image(src=`${imgPath}contact_txt.png`, alt="ご相談・お問い合わせはこちら")
            +bgWave("#def4f7", 1)
            +bgWaveSP("#def4f7", 1)
        footer.footter
            p.copyright &copy; Umibe-Planning All Right Reserved.
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import KeyVisual from "~/components/KeyVisual.vue";

export default {
  components: {
    AppHeader,
    KeyVisual
  },
  methods: {
    moveScroll(link) {
      console.log(link);
    }
  }
};
</script>

<style lang="sass" scoped>
@import "~assets/sass/base.sass"

$img-path: "~assets/images/"

.concept,
.service,
.about,
.contact
    position: relative
    padding-top: 115px
    overflow: hidden

.concept__title,
.service__title,
.about__title
    text-align: center
    font-size: 46px
    @include sp-layout
        font-size: 56px


.concept__title,
.service__title
    padding-bottom: 48px
    background-image: url("#{$img-path}dec_wave.png")
    background-repeat: no-repeat
    background-position: center bottom
    color: #282d2d
    @include sp-layout
        background-image: url("#{$img-path}dec_wave_sp.png")

.wave-bg
    @include pc-layout
        position: absolute
        bottom: 0
        height: 22px
    @include sp-layout
        display: none

.wave-bg-sp
    @include pc-layout
        display: none
    @include sp-layout
        position: absolute
        display: block
        bottom: -2px
        width: 750px
        height: 24px


// ここまで共通

.concept__title
    margin-bottom: 66px
.concept__text
    text-align: center
    padding-bottom: 135px
    line-height: ( 55 / 24 )
    font-size: 24px
    color: #1f2424
    @include sp-layout
        font-size: 28px

.service
    background-color: #def4f7
.service__title
    margin-bottom: 90px
    @include sp-layout
        margin-bottom: 100px
.service__button-wrapper
    display: flex
    align-items: center
    margin: 0 auto
    padding-bottom: 164px
    @include pc-layout
        justify-content: space-between
        width: 1012px
    @include sp-layout
        justify-content: center
        flex-wrap: wrap
.service__list
  margin: 0 auto 150px
  @include pc-layout
      display: flex
      justify-content: space-between
      width: 1000px
.service__item
  width: 450px
  text-align: center
  @include sp-layout
    width: 600px
    margin: 0 auto
    &:nth-of-type(1)
      margin-bottom: 100px
.service-item__title
  font-size: 24px
  margin-bottom: 1em
  @include sp-layout
    font-size: 28px
.service-item__pic
  width: 100%
  margin-bottom: 10px
.service-item__explain
  line-height: 1.75
  margin-bottom: 1em
  font-size: 16px
  @include sp-layout
    font-size: 26px
.service-item__link
  font-size: 16px
  font-weight: bold
  color: #000
  @include sp-layout
    font-size: 26px
.about
    background-color: #8dd7e5
.about__title
    margin-bottom: 78px
    padding-bottom: 48px
    background-image: url("#{$img-path}dec_wave_reverse.png")
    background-repeat: no-repeat
    background-position: center bottom
    color: #fff
    @include sp-layout
        background-image: url("#{$img-path}dec_wave_reverse_sp.png")
.about__icon
    display: block
    width: 300px
    height: 300px
    margin: 0 auto 70px
.about__explain
    text-align: center
    padding-bottom: 180px

.contact
    padding-bottom: 140px
.contact__button
    position: relative
    display: block
    width: 720px
    height: 150px
    margin: 0 auto
    border-radius: 10px
    background-color: #29b1bf
    @include sp-layout
        width: 600px
        height: 170px
    &:hover
        @include pc-layout
            opacity: 0.7
    & > img
      position: absolute
      top: 0
      left: 0
      bottom: 0
      right: 0
      margin: auto

.footter
    background-color: #def4f7

.copyright
    padding: 50px 0
    text-align: center
    font-size: 22px
    color: #81d3e2
</style>
