<template>
  <div class="areaSelect-wrap">
    <el-select v-model="value1" placeholder="请选择" @change="provinceChange">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value2" placeholder="请选择" @change="cityChange">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value3" placeholder="请选择">
      <el-option
        v-for="item in options3"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>

</template>

<script>
/**
 * areaSelect create by 油麦菜
 * createTime 2020/11/18 15:48
 */
import area from './area'
export default {
  name: 'areaSelect',
  components: {},
  filters: {},
  mixins: [],
  props: {},
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      options1: [],
      options2: [],
      options3: []
    }
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
    // console.log(area)
    this.handleArea()
  },
  methods: {
    handleArea () {
      console.log(area['86'])
      this.options1 = []
      this.value1 = ''
      for (const key in area['86']) {
        this.options1.push({
          value: key,
          label: area['86'][key]
        })
      }
      console.log(this.options1)
    },
    provinceChange () {
      console.log(this.value1)
      console.log(area[this.value1])
      this.options2 = []
      this.value2 = ''
      for (const key in area[this.value1]) {
        this.options2.push({
          value: key,
          label: area[this.value1][key]
        })
      }
    },
    cityChange () {
      this.options3 = []
      this.value3 = ''
      for (const key in area[this.value2]) {
        this.options3.push({
          value: key,
          label: area[this.value2][key]
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.areaSelect-wrap {

}
</style>
