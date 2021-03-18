<template>
  <div>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <i class="el-icon-search"></i>
        <span>筛选搜索</span>
        
      </div>
      <el-form
        ref="form"
        :model="formInline"
        label-width="80px"
      >
      
        <el-row>
          <el-col :span="8">
            <el-form-item label="输入搜索">
              <el-input
                v-model="formInline.name"
                placeholder="品牌名称或关键字"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-button
          type="primary"
          style="float: right; "
          @click="search(formInline.name)"
        >查询</el-button>
        </el-row>
      </el-form>
    </el-card>
     <el-col
      :span="22"
      class="card"
    >
      <el-card shadow="never">
        <i class="el-icon-tickets">数据</i>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="toCateAdd()"
        >添加</el-button>
      </el-card>
    </el-col>

    <el-table
      :data="list"
      border
      class="box-card table"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        label="编号"
        width="100"
        align="center"
      >
        <template slot-scope="scope">{{scope.row.id}}</template>
      </el-table-column>
      <el-table-column
        label="品牌名称"
        width="180"
         align="center"
      >
        <template slot-scope="scope">{{scope.row.name}}</template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="品牌首字母"
         align="center"
      >
        <template slot-scope="scope">{{scope.row.first_letter}}</template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="排序"
         align="center"
      >
        <template slot-scope="scope">{{scope.row.sort}}</template>
      </el-table-column>
  
      <el-table-column
        prop="address"
        label="品牌制造商"
         align="center"
      >
      <template slot-scope="scope">
          <el-switch
            active-color="#409eff"
            inactive-color="#eee"
            :active-value="1"
            :inactive-value="0"
            v-model='scope.row.factory_status'
          >
          </el-switch>
      </template>
          

      </el-table-column>
      <el-table-column
        prop="address"
        label="是否显示"
        align="center"
      >
       <template slot-scope="scope">
          <el-switch
            active-color="#409eff"
            inactive-color="#eee"
            :active-value="1"
            :inactive-value="0"
            v-model='scope.row.show_status'
          >
          </el-switch>
           </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="相关"
         align="center"
         width="180"
          class="text"
        
      >
        <template slot-scope="scope" >商品：{{scope.row.product_count}} 评价:{{scope.row.product_comment_count}}</template>
      </el-table-column>
      <el-table-column
        label="操作"
        class="handle"
        align="center"
         width="180"
      >

          <el-button
            type="primary"
            round
            size='small'
          >编辑</el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            size='small'
          ></el-button>
      </el-table-column>
    </el-table> 
     <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getBrand()"
    />
  </div>
</template>


<script>
import Pagination from '@/components/Pagination'
import {getBrandList,searchBrand} from '@/api/brand'
export default {
  data() {
    return {
      formInline: {
        name: "",
      },

      list:[],
      total:0,
      listQuery: {
        page: 1,
        limit: 5
      }
    };
  },
  components:{
    Pagination
  },

  created(){
    this.getBrand()
  },

  methods:{
    async getBrand(){
      this.listLoading = true
      const result = await getBrandList(this.listQuery)
      this.list = result.data.items
      this.total = result.data.total
      this.listLoading = false
    },
     async search(name){
      const result = await searchBrand({ name: name })
      this.list=result.data.items;
  } 
  },

 
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 1200px;
  margin: 30px auto;
}
.table{
  margin-top:30px;
}

.card{
  margin-left:55px;
  margin-bottom:30px;
}

.text{
  color:#409eff;
}
</style>