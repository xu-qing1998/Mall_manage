<template>
  <div>
    <el-form
      ref="list"
      :model="list"
      label-width="80px"
      class="box"
    >
      <el-col :span="13">
        <el-form-item label="商品名称">
          <el-input v-model="list.name"></el-input>
        </el-form-item>
        <el-form-item label="副标题">
          <el-input v-model="list.sub_title"></el-input>
        </el-form-item>
        <el-form-item label="商品品牌">
          <el-input v-model="list.brand_name"></el-input>
        </el-form-item>
        <el-form-item label="商品介绍">
          <el-input
            type="textarea"
            v-model="list.detail_desc"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品货号">
          <el-input
            type="text"
            v-model="list.product_sn"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品售价">
          <el-input
            type="text"
            v-model="list.price"
          ></el-input>
        </el-form-item>
        <el-form-item label="市场价">
          <el-input
            type="text"
            v-model="list.original_price"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品库存">
          <el-input
            type="text"
            v-model="list.weight"
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
  </div>
</template>


<script>
import { getProductDetail, updateProduct } from "@/api/product";
import EditorImage from "@/components/Tinymce/components/EditorImage.vue";
export default {
  components: { EditorImage },
  data() {
    return {
      id: "",
      list: {},
    };
  },
  created() {
    this.id = this.list = this.$route.query.id;
    this.getProductInfo(this.id);
  },

  methods: {
    async getProductInfo(id) {
      const result = await getProductDetail({ id: id });
      this.list = result.data.items;
      console.log(this.list);
    },

    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await updateProduct(this.list);
          this.$router.push("/product/index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.box {
  margin-top: 40px;
  margin-left: 150px;
}
</style>