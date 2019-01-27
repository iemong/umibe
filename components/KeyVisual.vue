<template lang="pug">
  - imgPath = '~assets/images/'
  .keyvisual
    .keyvisual__player(ref="player")
    img.keyvisual__bg(src=`${imgPath}bg_kv.jpg`, alt="", v-if="!isStartedVideo")
    h1.keyvisual__title
      .keyvisual__anim(ref="animation")
</template>

<script>
  let embedVideo = null;

  export default {
    name: 'key-visual',
    data() {
      return {
        videoId: 'gwSezj8zD1g',
        animation: null,
        isStartedVideo: false,
        isStartedLogoAnimation: false
      }
    },
    methods: {
      loadYoutubeAPI() {
        console.log("load start");
        const script = document.createElement('script');
        script.src = '//www.youtube.com/iframe_api';
        document.body.appendChild(script);
        return new Promise((resolve) => {
          window.onYouTubeIframeAPIReady = () => {
            resolve();
          };
        });
      },
      initEmbedVideo(id) {
        embedVideo = new YT.Player(
          id,
          {
            videoId: this.videoId,
            playerVars: {
              playlist: this.videoId,
              controls: 0,
              autoplay: 0,
              loop: 0,
              showinfo: 0,
              rel: 0,
              playsinline: 1
            },
            events: {
              "onReady": this.onPlayerReady,
              "onStateChange": this.onPlayerStateChange
            }
          }
        );
      },
      onPlayerReady(evt) {
        evt.target.mute(); // 自動再生できるようにミュートする
        evt.target.playVideo(); // ミュートしてから再生のメソッド叩く
      },

      onPlayerStateChange(evt) {
        if (evt.data === YT.PlayerState.ENDED) { // 再生終了を検知
          evt.target.playVideo();
          this.isStartedVideo = false;
        } else if (evt.data === YT.PlayerState.PLAYING) {
          this.isStartedVideo = true;
          setTimeout(() => {
            this.playLogoAnimation();
          }, 1000);
        } else {
          this.isStartedVideo = false;
        }
      },
      initAnimation() {
          this.animation = bodymovin.loadAnimation({
              container: this.$refs.animation,
              renderer: 'svg',                        //レンダリング設定
              loop: false,                             //ループ設定
              autoplay: false,                         //オート設定
              path: 'data'                       //JSONのパス
          });
          this.animation.setSpeed(1.5);
      },
      playLogoAnimation() {
        if(this.isStartedLogoAnimation) return null;
        this.isStartedLogoAnimation = true;
        this.animation.play();
      },
      init() {
        console.log(this.loadYoutubeAPI())
        this.loadYoutubeAPI().then(() => {
          this.initEmbedVideo(this.$refs.player)
        });
        this.initAnimation()
      }
    },
    mounted() {
      this.init();
      setTimeout(() => {
        this.playLogoAnimation();
      }, 5000)
    },

  }
</script>

<style lang="sass">
  @import "~assets/sass/base.sass"

  .keyvisual
    position: relative
    width: 100%
    overflow: hidden
    @include pc-layout
      max-height: 700px
      height: calc(100vw * 9 / 16)
    @include sp-layout
      height: 986px

  .keyvisual__player
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    pointer-events: none
    @include pc-layout
      width: 100vw
      height: calc(100vw * 9 / 16)
    @include sp-layout
      width: calc(986px * 16 / 9)
      height: 986px

  .keyvisual__bg
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    @include pc-layout
      width: 100vw
      height: calc(100vw * 9 / 16)
    @include sp-layout
      width: calc(986px * 16 / 9)
      height: 986px

  .keyvisual__title
    width: 50%
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    @include sp-layout
      width: 622px

</style>
