<template>
  <div class="test-demo-wrap">
    什么都不传
    <area-select ref="bbb"></area-select>
    只传省的带代码
    <area-select :province-prop="'140000'"></area-select>
    传省市的代码
    <area-select
      :province-prop="'140000'"
      :city-prop="'140500'"></area-select>
    传省市区的代码
    <area-select
      ref="aaa"
      :province-prop="'140000'"
      :city-prop="'140500'"
      :country-prop="'140502'"
    ></area-select>
    <el-button @click="btnClick" type="primary">获取选择的省市区</el-button>
  </div>
</template>

<script>
import areaSelect from './areaSelect'
export default {
  name: 'testDemo',
  components: {
    areaSelect
  },
  data () {
    return {
    }
  },
  methods: {
    // 获取选择的省市区数据
    btnClick () {
      console.log(this.$refs.aaa.areaData)
      console.log(this.$refs.bbb.areaData)
    }
  }
}
</script>

<style scoped>

</style>
