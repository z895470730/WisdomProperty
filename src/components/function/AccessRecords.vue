<template>
  <div>
    <div style="display: flex; justify-content: space-between">
      <div style="font-size: 13px">
        <span>首页</span>&nbsp;/
        <strong style="font-size: 14px">人员出入记录</strong>
      </div>
      <div>
        <el-button type="primary" size="small">二维码填写</el-button>
        <el-button type="primary" icon="el-icon-edit" size="small" @click="dialogVisible = true">新增记录</el-button>
      </div>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%; margin-top: 10px">
      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="plate"
        label="车牌号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cause"
        label="出入事由">
      </el-table-column>
      <el-table-column
        prop="interviewee"
        label="被访者姓名">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="联系电话">
      </el-table-column>
    </el-table>
    <el-dialog
      title="修改信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="closeDialog"
    >
      <el-form ref="recordForm" :model="recordForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="recordForm.name" placeholder="填写姓名，例如：张三"></el-input>
        </el-form-item>
        <el-form-item label="访问原因">
          <el-input v-model="recordForm.cause" placeholder="填写事由"></el-input>
        </el-form-item>
        <el-form-item label="车牌号">
          <el-input v-model="recordForm.plate" placeholder="填写车牌号，没有则填“无“"></el-input>
        </el-form-item>
        <el-form-item label="被访者">
          <el-input v-model="recordForm.interviewee" placeholder="填写被访问者姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="recordForm.tel" placeholder="填写您的联系方式"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="addAccessRecord">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'AccessRecords',
    data() {
      return {
        tableData: [{
          date: '2016-05-02 12:20',
          name: '王小虎',
          cause: '找人',
          plate:'豫C xxxx',
          interviewee: '张三',
          tel: '139284593849'
        }],
        recordForm: {
          name: '',
          cause: '',
          plate:'',
          interviewee: '',
          tel: ''
        },
        dialogVisible: false
      }
    },
    created() {
      this.getDetail();
    },
    methods: {
      getDetail() {
        this.$http.get('http://127.0.0.1:8090/api/access')
          .then((res) => {
            if(res.status < 400) {
              this.tableData = res.data;
            }
          })
      },

      closeDialog() {
        this.dialogVisible = false;
      },

      addAccessRecord() {
        this.recordForm.date = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        this.$http.post('http://127.0.0.1:8090/api/access', {
          data: this.recordForm
        })
          .then((res) => {
            if(res.data.ok === 1) {
              this.dialogVisible = false;
              this.recordForm = {
                name: '',
                cause: '',
                plate:'',
                interviewee: '',
                tel: ''
              };
              this.getDetail();
            }
          })
      }
    }
  }
</script>
