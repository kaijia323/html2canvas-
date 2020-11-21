/**
 * 打印指定元素
 * @param el 要打印的DOM元素，可传入ref或document.querySelector('selector')
 * @param printCSS 在打印纸的样式（@media print {}）
 * @param head (根据document.head通过正则匹配样式，只匹配@media print {}开头，</style>结尾的样式)
 * @returns {string}
 */
import elementUI from './elementUI'
export default function printjs ({ el = '', printCSS = '', head = '' }) {
  if (!el || !el.outerHTML) {
    console.warn('没有传入DOM对象')
    return ''
  }
  let css = ''
  if (printCSS) {
    css = printCSS
  } else if (head || head.outerHTML) {
    // 获取打印样式，正则匹配
    const reg = /(@media print.*?)<\/style>/gs
    const result = reg.exec(head.outerHTML)
    if (result) {
      css = result[1]
    }
  } else {
    console.warn('没有传入打印样式')
  }
  const printWindow = window.open('', '', 'location=no')
  printWindow.document.open()
  printWindow.document.write(`
    <html>
      <head>
        <style>
          body {
          visibility: hidden;
          }
          @media print {
            body {
            visibility: visible;
            }
            ${elementUI.cssStyle}
          }
          ${css}
        </style>
      </head>
      <body>
        ${el.outerHTML}
      </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.print()
  printWindow.close()
}
