<template>
  <div class="print-demo">
    <div ref="aaa" class="qrcode">
      <template v-if="imgList.length !== 0">
        <div v-for="(item, index) in imgList" :key="index" class="qrcode-item">
          <img :src="item.imgSrc" alt="">
          <span>1234文档</span>
        </div>
      </template>
    </div>
    <div ref="qrcode" style="display: none"></div>
    <el-button type="primary" @click="generateQRCode">生成二维码</el-button>
    <el-button type="primary" @click="printQRCode">打印</el-button>
  </div>
</template>

<script>
import printjs from './printjs'
export default {
  name: 'printDemo',
  data () {
    return {
      imgList: []
    }
  },
  mounted () {
  },
  methods: {
    generateQRCode () {
      const qrcode = new this.$QRCode(this.$refs.qrcode)
      for (const i in [1, 2, 3, 4, 5]) {
        qrcode.makeCode(i + '油麦菜')
        const canvas = this.$refs.qrcode.querySelector('canvas')
        canvas.toBlob(blob => {
          const imgSrc = URL.createObjectURL(blob)
          this.imgList.push({
            imgSrc: imgSrc
          })
        })
        qrcode.clear()
      }
    },
    printQRCode () {
      printjs({
        el: this.$refs.aaa,
        printCSS: '',
        head: document.head
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.qrcode {
  display: flex;
  flex-wrap: wrap;
  color: #f00;
  border: 1px solid #ff0000;
  background: #555;
  .qrcode-item {
    margin-right: 30px;
    margin-bottom: 30px;
    width: 120px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
// 建议打印样式写在最后，这样正则匹配的时候，不会匹配到多余的样式
@media print {
  @page {
    size: A4 portrait;
  }
  .qrcode {
    display: flex;
    flex-wrap: wrap;
    .qrcode-item {
      margin-right: 30px;
      margin-bottom: 30px;
      width: 120px;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
