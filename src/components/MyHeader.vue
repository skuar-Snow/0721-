<template>
   <div>
    <div class="tit"
      :class="{show:selectlist.length>0}"
      >
            <ul class="cart_list">
                <li v-if="selectlist.length<3"></li>
                <li v-for="item in selectlist" :key="item.title">
                    <img :src="item.src" alt="">
                    <i
                    @click="del(item)"
                    @onRemoveItem="updateSelectList"
                    >&times;</i>
                </li>
            </ul>
            <div class="send"
            @click="show"
            >compure</div>
        </div>
        <MyConpare
        :class="{show:showConpare}"
        :selectlist="selectlist"
        :showConpare="showConpare"
         @update:showCompare="showConpare = $event"
         :showCompare.sync="showConpare" 
        ></MyConpare>
   </div>
</template>

<script>
import MyConpare from './MyConpare.vue';
export default {
    props:["selectlist",],
    data(){
        return{
            showConpare:false
        }
    },
    methods:{
        show(){
           if(this.selectlist.length<=1){
            return
           }else{
            this.showConpare=true;
           }
        },
        del(item){
            this.selectlist.splice(this.selectlist.indexOf(item),1);0
        },
        updateShowConpare(val){
            this.showConpare=val;
        },
        updateSelectList(newList) {
            this.selectlist = newList;
        }
    },
    components:{
        MyConpare
    }
}
</script>

<style lang="scss" scoped>
  .tit{
        height: 100px;
        background: #232528;
        display: flex;
        justify-content: right;
        align-items: center;
        transform: translateY(-100px);
        transition: all 0.5s ease;
        ul{
            display: flex;
            margin-right: 70px;
            li{
                margin: 0 10px;
                position: relative;
                background: #3b3c42;
                width: 65px;
                height: 65px;
                img{
                    display: block;
                    width: 65px;
                    height: 65px;
                }
                i{
                    position: absolute;
                    top: -12px;
                    right: -2px;
                    font-size: 30px;
                    color: black;
                }
            }
        }
        .send{
            width: 170px;
            height: 70px;
            margin-right: 140px;
            background: #4243af;
            border-radius: 8px;
            text-align: center;
            line-height: 70px;
            color: #fff;
        }
    }
    .show{
        transform: translateY(0);
    }
</style>