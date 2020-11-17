<template>
  <div id="app">
    <div ref="area" id="aaa">
      <van-area title="标题" :area-list="areaList" />
      <van-area title="标题" :area-list="areaList" />
      <van-area title="标题" :area-list="areaList" />
      <van-area title="标题" :area-list="areaList" />
      <van-area title="标题" :area-list="areaList" />
      <van-area title="标题" :area-list="areaList" />
      <van-area title="标题" :area-list="areaList" />
      <van-area title="标题" :area-list="areaList" />
      <van-area title="标题" :area-list="areaList" />
      <van-area title="标题" :area-list="areaList" />
    </div>
    <van-button type="primary" @click="generateImage">生成图片</van-button>
  </div>
</template>

<script>
import area from './js/area'
export default {
  name: 'app',
  data () {
    return {
      areaList: area,
      imgUrl: ''
    }
  },
  mounted () {
    // console.log(this.$html2canvas)
    console.log(this.$refs.area)
  },
  methods: {
    generateImage () {
      console.log('123')
      const rect = this.$refs.area.getBoundingClientRect()
      this.$html2canvas(this.$refs.area, {
        // x: rect.left,
        // y: -rect.top,
        scrollY: rect.top
      }).then(canvas => {
        console.log(this.$refs.area.getBoundingClientRect())
        // const rect = this.$refs.area.getBoundingClientRect()
        // const content = canvas.getContext('2d')
        // content.translate(-rect.left, -rect.top)
        canvas.toBlob(blob => {
          console.log(blob)
          this.imgUrl = URL.createObjectURL(blob)
          console.log(this.imgUrl)
          const aImg = document.createElement('a')
          aImg.href = this.imgUrl
          // aImg.download = this.imgUrl
          aImg.download = '222222222'
          document.body.appendChild(aImg)
          aImg.click()
          document.body.removeChild(aImg)
        }, 'image/png')
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  padding: 30px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
