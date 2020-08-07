<template>

    <div class="pages">
        <span v-for="i of pages" :class="{current: i === page}" @click="changePage(i)">
            {{i}}
        </span>
    </div>

</template>

<script>
    export default {
        name: "Page",

        props: {
            page: {
                type: Number,
                default: 1
            },
            pages: {
                type: Number,
                required: true // 必须传参
            }
        },

        data() {
            return {};
        },

        methods: {
            changePage(v) {
                console.log(this.$router);
                this.$router.push({
                    name: 'home',
                    query: {
                        page: v
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .pages {
        margin: 20px 0;
    }

    span {
        text-align: center;
        cursor: pointer;
        padding: 10px 20px;
        margin: 10px;
        border: 1px solid #000000;
    }
    /*高亮当前页*/
    span.current {
        cursor: default;
        background: rgba(0,255,255, .5);
    }
</style>