<template>
    <div>
        <h2>商品列表 - {{n}} - {{$store.state.n}}</h2>

        <input type="text" ref="input" /><button @click="addItem">提交</button>
        <hr>

        <ul class="item-list">
            <li class="head">
                <span>名称</span>
                <span>价格</span>
                <span>操作</span>
            </li>
            <li v-for="item of items" :key="item.id">
                <span>
                    <router-link :to="{name: 'view', params: {id: item.id}}">{{item.name}}</router-link>
                </span>
                <span>{{item.price|RMB}}</span>
                <span>
                    <button>添加到购物车</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    import * as apis from '@/apis'
    import {RMB} from "@/filters/RMB";

    export default {
        name: "Home",

        data() {
            return {

            }
        },

        filters: {
            RMB
        },


        computed: {
            items() {
                return this.$store.state.items;
            },
            n() {
                return this.$store.state.n;
            }
        },

        methods: {
            addItem() {
                let val = this.$refs.input.value;

                if (val !== '') {
                    this.$store.commit('addItem', {
                        "name": val,
                        "vendor":"Apple",
                        "price":1949900
                    })
                }
            }
        }
    }
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    .item-list li {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px dotted #333;
    }
    .item-list li.head {
        font-weight: bold;
    }
    .item-list li span {
        min-width: 200px;
    }
</style>