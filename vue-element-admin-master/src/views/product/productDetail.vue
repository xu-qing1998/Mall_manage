<template>
    <div>
        <div class="img">
           <img :src="list.pic" alt="" srcset="" width="300">
        </div>
        <div class="content">
            <table class="mailTable"  cellspacing="0" cellpadding="0">
        <tr>
            <td class="column">商品名称</td>
            <td>{{list.name}}</td>
        </tr>
        <tr>
            <td class="column">商品价格</td>
            <td>{{list.price}}</td>
        </tr>
        <tr v-if="list.detail_desc!=null">
            <td class="column">商品描述</td>
            <td>{{list.detail_desc}}</td>
        </tr>
        <tr>
            <td class="column">品牌</td>
            <td>{{list.brand_name}}</td>
        </tr>
         <tr>
            <td class="column">类别</td>
            <td>{{list.product_category_name}}</td>
        </tr>
         <tr>
            <td class="column">库存</td>
            <td>{{list.weight}}</td>
        </tr>
          <tr>
            <td class="column">销量</td>
            <td>{{list.stock}}</td>
        </tr>
    </table>

        </div>
    </div>
</template>

<script>
import {getProductDetail} from "@/api/product"
import EditorImage from '@/components/Tinymce/components/EditorImage.vue';
export default {
  components: { EditorImage },
    data(){
        return {
            id:'',
            list:{}
        }
    },
    created() {
      this.id = this.list = this.$route.query.id;
      this.getProductInfo(this.id);
    },

    methods:{
        async getProductInfo(id){
            const result = await getProductDetail({id:id})
            this.list=result.data.items;
            console.log(this.list);
        }
    }
}
</script>

<style lang="scss">
    .img{
        float:left;
        margin-top: 70px;
        margin-left: 100px;
    }

    .content{
        float:left;
        margin-top: 130px;
        width:500px;
        height:500px;
        margin-left:50px;
        .mailTable{
            width: 100%;
            border-top: 1px solid #E6EAEE;
            border-left: 1px solid #E6EAEE;

            tr td{
                text-align:center;
                width: 200px;
                height: 35px;
                line-height: 35px;
                box-sizing: border-box;
                padding: 0 10px;
                border-bottom: 1px solid #E6EAEE;
                border-right: 1px solid #E6EAEE;
            }
             tr td.column {
                background-color: #EFF3F6;
                color: #393C3E;
                width: 30%;
            }
        }

      
    }

</style>