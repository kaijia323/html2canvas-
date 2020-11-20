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
import printCSS from './qrcode-print-css'
export default {
  name: 'printDemo',
  data () {
    return {
      imgList: []
    }
  },
  mounted () {
    console.log(document.head)
  },
  methods: {
    generateQRCode () {
      console.log(this.$refs.qrcode)
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
      const printWindow = window.open('', '', `location=no,width=${window.innerWidth / 2}`)
      // 打开文档流，准备写入内容
      printWindow.document.open()
      // const qrcodeVal = document.querySelector('body').outerHTML
      const qrcodeVal = this.$refs.aaa.outerHTML
      // 写入样式
      const newHtml = `
      <html>
        <head>
          <style type="text/css">
          ${printCSS.printCSS}
          </style>
        </head>
        <body>
            ${qrcodeVal}
        </body>
      </html>
      `
      printWindow.document.write(newHtml)
      // 关闭文档流，将内容显示
      printWindow.document.close()
      // printWindow.print()
      // printWindow.close()
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
</style>
