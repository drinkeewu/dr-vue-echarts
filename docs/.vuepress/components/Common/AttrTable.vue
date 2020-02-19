<template>
  <el-table :data="data">
    <el-table-column 
      v-for="(col, index) in tableCols"
      :key="`table-col-${index}`"
      :label="col.label"
      :prop="col.prop"
    >
      <template slot-scope="scope">
        <div v-html="scope.row[col.prop] || '-'"></div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ATTR_TABLE_COLS } from '../../constants'
export default {
  name: 'AttrTable',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      tableCols: ATTR_TABLE_COLS
    }
  }
}
</script>

<style>

</style>