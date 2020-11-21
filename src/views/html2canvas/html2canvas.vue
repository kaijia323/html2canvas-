<template>
  <div class="html2canvas-wrap">
        <div ref="area" id="aaa">
          <p>1234</p>
          <p>123</p>
          <p>123</p>

          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>1234</p>
          <p>1234</p>
        </div>
        <van-button style="position:fixed; right: 0; top: 0; z-index: 9" type="primary" @click="generateImage">生成图片</van-button>

  </div>

</template>

<script>
import area from '@/js/area'
/**
 * html2canvas create by 油麦菜
 * createTime 2020/11/18 15:52
 */
export default {
  name: 'html2canvas',
  components: {},
  filters: {},
  mixins: [],
  props: {},
  data () {
    return {
      areaList: area,
      imgUrl: ''
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {
    generateImage () {
      const rect = this.$refs.area.getBoundingClientRect() // 关键代码
      console.log(rect)
      this.$html2canvas(this.$refs.area, {
        scrollY: rect.top, // 关键代码
        height: rect.height + 50 // 加高度，避免截取不全
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
<style lang="scss" scoped>
.html2canvas-wrap {

}
</style>
