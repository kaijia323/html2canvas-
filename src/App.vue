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
  },
  methods: {
    generateImage () {
      const rect = this.$refs.area.getBoundingClientRect() // 关键代码
      this.$html2canvas(this.$refs.area, {
        scrollY: rect.top // 关键代码
      }).then(canvas => {
        canvas.toBlob(blob => {
          this.imgUrl = URL.createObjectURL(blob)
          const aImg = document.createElement('a')
          aImg.href = this.imgUrl
          aImg.download = this.imgUrl
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
