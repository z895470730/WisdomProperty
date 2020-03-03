<template>
  <div >
    <div class="resident-header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>住户信息</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <el-input
          placeholder="请输入内容"
          v-model="searchText">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
    </div>
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
              <span>{{ props.row.IdNumber }}</span>
            </el-form-item>
            <el-form-item label="成员1">
              <span>{{ props.row.member1 }}</span>
            </el-form-item>
            <el-form-item label="成员2">
              <span>{{ props.row.member2 }}</span>
            </el-form-item>
            <el-form-item label="联系电话">
              <span>{{ props.row.tel }}</span>
            </el-form-item>
            <div style="display: flex; justify-content: center">
                <el-button size="small" type="primary" icon="el-icon-edit" plain @click="dialogVisible = true">修改</el-button>
                <el-button size="small" type="danger" icon="el-icon-delete" plain>删除</el-button>
            </div>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="户号"
        prop="id">
      </el-table-column>
      <el-table-column
        label="门牌号"
        prop="address">
      </el-table-column>
      <el-table-column
        label="户主姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="欠费信息"
        prop="name">
      </el-table-column>
    </el-table>
    <el-dialog
      title="修改信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="户主姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="证件号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="成员1">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="成员2">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '10001',
          name: '张一',
          tel: '18939626705',
          member1: '张二',
          member2: '张三',
          address: 'A栋-301',
          shop: '王小虎夫妻店',
          IdNumber: '41xxxxxxxxxxxx2012',
          arrearage: ''
        }],
        searchText: '',
        dialogVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>
<style>
  .resident-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
