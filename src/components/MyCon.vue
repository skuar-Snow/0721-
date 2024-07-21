<template>
     <div class="box">
        <div class="con">
            <MyHeader
            :selectlist="selectlist"
            :selectAdd="selectAdd"
            ></MyHeader>
        <!-- ✓ -->
            <ul class="con_list">
                <li 
                v-for="(item,index) in conlist" :key="item.title"
                @click="selectAdd(index)"
                :class="{border:selectlist.includes(item)}"
                >
                <span :ref="setSpanRef(item)" @click="toggleSelect(item)">{{ isSelected(item) ? '✓' : '+' }}</span>
                    <p><img :src="item.src" alt=""></p>
                    <p class="name">{{ item.title }}</p>
                    <p class="price">{{ item.price }}</p>
                    <p class="btn">add to cart</p>
                </li>
            </ul>
        </div>
     </div>
</template>

<script>
import axios from 'axios';
import MyHeader from './MyHeader.vue';
export default {
    data(){
        return {
            conlist:[],
            selectlist:[],
        }
    },
    mounted() {
    this.updateSpanRefs();
  },
  watch: {
    selectlist: {
      handler(newVal) {
        this.updateSpanRefs();
      },
      deep: true
    }
  },
    methods:{
        isSelected(item) {
            return this.selectlist.includes(item);
        },
        setSpanRef(index) {
            return 'span-' + index; // 假设每个商品有一个唯一的 id
        },
        toggleSelect(item) {
            const index = this.selectlist.indexOf(item);
            if (index > -1) {
                this.selectlist.splice(index, 1);
            } else {
                this.selectlist.push(item);
            }
        },
        selectAdd(index){
           //向selectlist中添加当前商品，最多添加3个，并去重
            if(this.selectlist.length<3){
               if(!this.selectlist.includes(this.conlist[index])){
                    this.selectlist.push(this.conlist[index])
               }else{
                    this.selectlist.splice(this.selectlist.indexOf(this.conlist[index]),1)
               }
            }else{
                // 大于的从数据中删除
                this.selectlist.splice(index,1)
            }
            console.log(this.selectlist)
        },
        updateSpanRefs() {
            this.$refs.spans = {}; // 重置 refs 对象
            this.selectlist.forEach((item) => {
                this.$refs.spans[this.setSpanRef(item)] = this.isSelected(item) ? '✓' : '+';
            });
        }
    },
    async created(){
        const res = await axios.get("https://zyxcl.xyz/exam_api/bottle")
        console.log(res.data.value)
        this.conlist = res.data.value
    },
    components: {
        MyHeader,
    }
}
</script>

<style lang="scss" scoped>
  .con{
        min-height: 600px;
        width: 1360px;                 
        margin: 0 auto;
        padding: 10px;
        ul{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            li{
                width: 300px;
                height: 552px;
                margin: 17.5px;
                background: #232529;
                >span{
                    display: block;
                    float: right;
                    color: #6054ae;
                    font-weight: 900;
                    font-size: 35px;
                    margin-top: -10px;
                }
                p.img{
                    pointer-events: none;
                }
                p>img{
                    width: 160px;
                    height: 160px;
                    display: block;
                    margin: 10px auto;
                    margin-left: 67px;
                    pointer-events: none;
                }
                p.name{
                    font-size: 24px;
                    font-weight: 900;
                    margin-top: 20px;
                    margin-bottom: 10px;
                    text-align: center;
                    height: 75px;
                    color: #fff;
                    pointer-events: none;
                }
                p.price{
                    font-size: 20px;
                    font-weight: 900;
                    margin-top: 70px;
                    text-align: center;
                    pointer-events: none;
                }
                p.btn{
                    width: 200px;
                    height: 60px;
                    background: #6054ae;
                    border-radius: 8px;
                    text-align: center;
                    line-height: 60px;
                    color: #fff;
                    margin: 50px auto 0;

                    cursor: pointer;
                }
                p.btn:hover{
                    background: #4243af;
                }
            }
            li:hover img{
                animation: rotate 1s 0.1s linear infinite;
            }
            .border{
                border: 4px solid #6054ae;
                border-radius: 8px;
            }
        }
    }
    @keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(-15deg);
    }
    // 66%{
    //     transform: rotate(0deg);
    // }
    100%{
        transform: rotate(15deg);
    }
}
</style>