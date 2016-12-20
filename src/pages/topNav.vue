<style lang="less" scoped>
    ul li{
        display: block;
        float: left;
        list-style: none;
        padding: 10px;
    }
    ul:after{
        content: ' ';
        clear: both;
        display: block;
    }
</style>

<template>
    <div>
        <ul>
            <li v-for="menu in menus" >
                <router-link :to="'/'+menu.id">{{menu.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    module.exports = {
        computed:{
            menus: function () {
                return this.$store.state.data
            }
        }
    }
</script>