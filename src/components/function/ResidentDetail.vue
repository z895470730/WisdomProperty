<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="户号">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="门牌号">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="户主姓名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="身份证号">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="成员1">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="成员2">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="户号"
      prop="id">
    </el-table-column>
    <el-table-column
      label="门牌号"
      prop="name">
    </el-table-column>
    <el-table-column
      label="户主姓名"
      prop="desc">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '10001',
          name: 'A栋-301',
          category: '江浙小吃、小吃零食',
          desc: '张一',
          address: 'A栋-301',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    }
  }
</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
