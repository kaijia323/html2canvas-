export default {
  printCSS: `
  @media screen, print {
  @page {
    size: A4 portrait;
  }
  .qrcode[data-v-527e0586] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  color: #f00;
  border: 1px solid #ff0000;
  background: #555;
  -webkit-print-color-adjust: exact;
}
.qrcode .qrcode-item[data-v-527e0586] {
    margin-right: 30px;
    margin-bottom: 30px;
    width: 120px;
    height: 120px;
}
.qrcode .qrcode-item img[data-v-527e0586] {
      width: 100%;
      height: 100%;
}}
 `
}
