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
            .service__button-wrapper
                a.service__button(href="", data-type="work", data-active="false")
                    +picture(`${imgPath}service_txt_work.png`)(class="service__button-image")
                a.service__button(href="", data-type="bland", data-active="false")
                    +picture(`${imgPath}service_txt_brand.png`)(class="service__button-image")
            +bgWave("#8dd7e5", 1)
            +bgWaveSP("#8dd7e5", 1)
        section.about#about
            h2.about__title about
            p.about__explain
                +picture(`${imgPath}about_txt_explain.png`, "楠瀬 薫子 / くすのせ・かおるこ コンテンツプロデューサー・プランナー / 水着ブランド “COLCA“ ディレクター 多摩美術大学生産デザイン学科テキスタイルデザイン専攻卒業。ぬいぐるみメーカーやクリエイティブカンパニー「面白法人カヤック」勤務を経てフリーランス。自治体や企業のみなさまが抱えるコミュニケーション課題を、明るく楽しく解決するお手伝いをしながら、オリジナル水着のブランド“COLCA“の運営を行っています。")(class="about__explain-image")
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
import AppHeader from '~/components/AppHeader.vue'
import KeyVisual from '~/components/KeyVisual.vue'

export default {
    components: {
        AppHeader,
        KeyVisual
    },
    methods: {
      moveScroll(link) {
        console.log(link)
      }
    }
}
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
    margin-bottom: 115px
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
.service__button
    position: relative
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 460px
    height: 160px
    border-radius: 10px
    @include sp-layout
        width: 600px
        height: 170px
    &:first-of-type
        @include sp-layout
            margin-bottom: 84px
    &:hover
        @include pc-layout
            opacity: 0.7
    &[data-active="true"]
        background-color: #29b1bf
    &[data-active="false"]
        background-color: #bae7ec
        cursor: default
        &::after
            content: ""
            position: absolute
            top: -30px
            left: -70px
            width: 374px
            height: 103px
            background-image: url("#{$img-path}dec_cs.png")
            background-repeat: no-repeat
            background-position: center bottom
            @include sp-layout
                top: -40px
                left: -20px
                background-image: url("#{$img-path}dec_cs_sp.png")

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
