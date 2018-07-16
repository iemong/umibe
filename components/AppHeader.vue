<template lang="pug">
  - imgPath = '~assets/images/'
  include ./../assets/pug/mixin
  header.header
    p.logo
      +picture(`${imgPath}logo.png`, "ウミベプランニング")
    nav.nav
      ul.nav-list
        li.nav-item: a.nav-link(href="#concept", @click.prevent="moveLink") concept
        li.nav-item: a.nav-link(href="#service", @click.prevent="moveLink") service
        li.nav-item: a.nav-link(href="#about", @click.prevent="moveLink") about
        li.nav-item: a.nav-link(href="#contact", @click.prevent="moveLink") contact
    .sns
      ul.sns-list
        li.sns-item
          a.sns-link(:href="twitterLink", target="_blank")
            img(src=`${imgPath}icn_twitter.png`, alt="twitter")
        li.sns-item
          a.sns-link(:href="facebookLink", target="_blank")
            img(src=`${imgPath}icn_facebook.png`, alt="facebook")
        li.sns-item
          a.sns-link(:href="lineLink", target="_blank")
            img(src=`${imgPath}icn_line.png`, alt="line")
</template>

<script>
  import * as share from '~/plugins/shareHelper'

  export default {
    name: 'app-header',
    data() {
      return {
        progress: 0,
        absolutePosY: null
      }
    },
    computed: {
      url() {
        return "http://umibe-planning.jp"

      },
      shareText() {
        return 'ウミベプランニングはクリエイティブコンテンツの企画制作を通じ、人を笑顔に、世界をハッピーにするお手伝いをします'
      },
      hashtags() {
        return 'ウミベプランニング'
      },
      twitterLink() {
        return share.createTwitterIntent({
          hashtags: this.hashtags,
          text: this.shareText,
          url: this.url
        })
      },
      facebookLink() {
        return share.createFacebookIntent(this.url)
      },
      lineLink() {
        return share.createLineIntent(this.url)
      }
    },
    methods: {
      moveLink(evt) {
        const id = evt.target.getAttribute('href');
        const $target = document.querySelector(id);
        this.absolutePosY = $target.getBoundingClientRect().top + window.pageYOffset;
        this.progress = 0;
        this.loop();
      },
      loop() {
        const currentPosY = document.documentElement.scrollTop || document.body.scrollTop;
        const windowHeight = window.innerHeight;
        const scrollHeight = document.body.scrollHeight;
        const remain = scrollHeight - currentPosY - windowHeight;
        this.progress++;
        window.scrollTo(0, this.absolutePosY * this.easeIn(this.progress / 20));
        console.log(remain);
        if(currentPosY < this.absolutePosY) {
          if(remain < 0 ) return;
          window.requestAnimationFrame(this.loop.bind(this))
        } else {
          window.scrollTo(0, this.absolutePosY);
        }
      },
      easeIn(val) {
        return Math.pow(val, 2);
      }
    }
  }

</script>

<style lang="sass" scoped>
  @import "~assets/sass/base.sass"

  header
    display: flex
    align-items: center
    width: 100%
    height: 100px
    padding: 0 90px 0 40px
    box-sizing: border-box
    @include sp-layout
      height: 130px
      padding: 0 44px 0 25px

  .logo
    margin-right: auto

  .nav
    margin-right: 100px
    font-size: 32px
    @include sp-layout
      display: none

  .nav-list,
  .sns-list
    display: flex
    justify-content: space-between
    align-items: center

  .nav-list
    width: 550px

  .nav-link
    color: #282d2d
    text-decoration: none

  .sns-list
    width: 200px


</style>


