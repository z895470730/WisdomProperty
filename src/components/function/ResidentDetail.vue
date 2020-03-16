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
              <span>{{ props.row.idNumber }}</span>
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
              <el-button size="small" type="primary" icon="el-icon-edit" plain @click="viewDialog(props.$index, props.row)">修改</el-button>
              <el-button size="small" type="danger" icon="el-icon-delete" plain @click="delAffirm = true">删除</el-button>
              <el-dialog
                title="提示"
                :visible.sync="delAffirm"
                width="30%">
                <span>确定要删除该条数据吗？</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="delAffirm = false">取 消</el-button>
                  <el-button type="primary" @click="delDialogControl(props.row)">确 定</el-button>
                </span>
              </el-dialog>
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
        label="标签"
        width="100"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.arrearage ? 'danger' : 'success'"
            disable-transitions
          >{{scope.row.arrearage ? '待缴费' : '缴费正常'}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="修改信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="userForm" :model="userForm" label-width="80px">
        <el-form-item label="户主姓名">
          <el-input v-model="userForm.name" ></el-input>
        </el-form-item>
        <el-form-item label="证件号">
          <el-input v-model="userForm.idNumber"></el-input>
        </el-form-item>
        <el-form-item label="成员1">
          <el-input v-model="userForm.member1"></el-input>
        </el-form-item>
        <el-form-item label="成员2">
          <el-input v-model="userForm.member2"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="userForm.tel"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="changeUserDetail">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 0,
          name: '',
          tel: '',
          member1: '',
          member2: '',
          address: '',
          idNumber: '',
          arrearage: false
        }],
        searchText: '',
        dialogVisible: false,
        userForm: {},
        currentIndex: null,
        delAffirm: false
      }
    },
    mounted() {
      this.getResidentDetail();
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },

      getResidentDetail() {
       this.$http.get('http://127.0.0.1:8090/api/user')
         .then((res)=>{
           if(res.status < 400 ) {
             this.tableData = res.data;
           }
         })
      },

      viewDialog(index, detail) {
        delete detail._id;
        this.userForm = detail;
        this.currentIndex = index;
        this.dialogVisible = true
      },

      closeDialog() {
        this.dialogVisible = false;
      },

      async submitUserDetail() {
        const index = this.currentIndex;
        await this.$http.post('http://127.0.0.1:8090/api/modifyUser',{
            whereStr: this.tableData[index].id,
            dataStr: this.userForm
          },{
          headers: {
            'Content-Type': 'application/json'
          }
        });
        await this.getResidentDetail();
        await this.closeDialog();
      },

      changeUserDetail() {
        this.submitUserDetail().then().then().then();
      },

      async removeUserDetail(row) {
        await this.$http.post('http://127.0.0.1:8090/api/removeUser', {
          whereStr: row.id
        }, { headers: {'Content-Type': 'application/json'} });
        await this.getResidentDetail();
        this.delAffirm = false;
      },

      delDialogControl(row) {
        this.removeUserDetail(row).then().then();
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
