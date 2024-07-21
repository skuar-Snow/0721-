<template>
  <div class="mask" ref="mask">
        <div class="c">
            <p class="close"
            @click="endCompare"
            >×</p>
            <ul class="list">
                <li v-for="item in selectlist" :key="item.title">
                    <img :src="item.src" alt="">
                    <p class="title1">{{ item.title }}</p>
                    <p class="year">{{ item.year }}</p>
                    <p class="region">{{ item.region }}</p>
                    <p class="title">{{ item.varietal }}</p>
                    <p class="alcohol">{{ item.alcohol }}</p>
                    <p class="price">{{ item.price }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    props:["selectlist",],
    methods: {
        endCompare(){
            this.$emit('update:showCompare', false);
        }
    }
}
</script>

<style lang="scss" scoped>
.mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,1);
    z-index: 999;
    display: none;
    p.close{
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
    }
    ul{
        display: flex;
        height:100%;
        width: 100%;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #232529;
            height: 912px;
            flex: 1;
            border: 1px solid #6054ae;
            p{
                margin: 20px 0;
                text-align: center;
                color: #fff;
            }
            p.title1{
                font-size: 30px;
                color: #fff;
            }
            img{
                width: 210px;
                height: 210px;
            }
        }
    }
}

.mask.show{
    display: block;
}

</style>