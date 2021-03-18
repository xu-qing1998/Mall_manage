<template>
  <div>
    <el-col
      :span="20"
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
      class="box-card"
    >
    
      <el-table-column
        label="编号"
        width="100"
        align="center"
      >
        <template slot-scope="scope">{{scope.row.id}}</template>
      </el-table-column>
      <el-table-column
        label="分类名称"
        width="180"
         align="center"
      >
        <template slot-scope="scope">{{scope.row.name}}</template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="级别"
         align="center"
      >
        <template slot-scope="scope">{{scope.row.level}}</template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="商品数量"
         align="center"
      >
        <template slot-scope="scope">{{scope.row.product_count}}</template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="数量单位"
         align="center"
      >
        <template slot-scope="scope">{{scope.row.product_unit}}</template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="导航栏"
         align="center"
      >
      <template slot-scope="scope">
          <el-switch
            active-color="#409eff"
            inactive-color="#eee"
            :active-value="1"
            :inactive-value="0"
            v-model='scope.row.nav_status'
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
            v-model='scope.row.show_satus'
          >
          </el-switch>
           </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="排序"
         align="center"
      >
        <template slot-scope="scope">{{scope.row.sort}}</template>
      </el-table-column>
      <el-table-column
        label="操作"
        class="handle"
        align="center"
         width="180"
      >
        <template slot-scope="scope">

          <el-button
            type="primary"
            round
            size='small'
            @click="goEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            size='small'
            @click="handleDelete(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>   
     <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getProCateList()"
    />
  </div>
</template>


<script>
import Pagination from '@/components/Pagination'
import {getCategoryList,deleteCate} from '@/api/productcategory'
export default {
  data(){
    return{
        list:[],
        total: 0,
        listQuery: {
        page: 1,
        limit: 5
      }
    }

  },
  components:{
    Pagination
  },
  created(){
    this.getProCateList();

  },
  methods:{
     async getProCateList() {
      this.listLoading = true
      const result = await getCategoryList(this.listQuery)
      this.list = result.data.items
      this.total = result.data.total
      this.listLoading = false
    },

    goEdit(index,row){
       this.$router.push({path:'/product/categoryedit',query:{id: row.id}});
    },
    toCateAdd(){
       this.$router.push({path:'/product/category/addCategory'});
    },
    async handleDelete(row){
      console.log(row.id);
        const result = await deleteCate({ id: row.id })
       this.getProCateList()
    }
  },
  
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: 20px;
  margin-left: 110px;
  margin-bottom: 50px;
}

.box-card {
  width: 1080px;
  padding: 20px;
  margin: 50px auto;
  }

.handle{
  display:flex;
  flex-wrap: nowrap;
  justify-content: center;
}

</style>