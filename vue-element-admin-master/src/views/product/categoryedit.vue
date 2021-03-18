<template>
  <div>
    <el-card class="box-card">
    <el-form
      ref="list"
      :model="list"
      label-width="80px"
      class="box"
    >
      <el-col :span="15">
        <el-form-item label="分类名称">
          <el-input v-model="list.name"></el-input>
        </el-form-item>
        <el-form-item label="数量单位">
          <el-input v-model="list.product_unit"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="list.sort"></el-input>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-radio-group v-model="list.show_satus">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否在导航栏显示">
          <el-radio-group v-model="list.nav_status">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input
            type="text"
            v-model="list.keywords"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类描述">
          <el-input
            type="text"
            v-model="list.desc"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            align="center"
            @click="submitForm('list')"
          >提交</el-button>
        </el-form-item>
      </el-col>
    </el-form>
    </el-card>
  </div>
</template>
<script>
import { getcateEdit,updateCate } from "@/api/productcategory";
export default {
  data() {
    return {
      list: [],
      id: "",
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.getCategorytInfo(this.id);
  },
  methods: {
    async getCategorytInfo(id) {
      const result = await getcateEdit({ id: id });
      this.list = result.data.items;
      console.log(this.list);
    },

     submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await updateCate(this.list);
          this.$router.push("/product/category");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .box-card{
    width:800px;
    margin:50px auto;
  }
</style>