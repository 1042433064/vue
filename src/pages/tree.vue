<style lang="less" scoped>

</style>

<template>
    <ul>
        <li v-for="menu in menus" :key="menu.id">
            <router-link :to="getPath(menu.id)">{{menu.name}}</router-link>
            <top-nav v-if="menu.children.length>0" :menus="menu.children"></top-nav>
        </li>
    </ul>
</template>

<script>
    module.exports = {
        name: 'topNav',
        props:['menus'],
        data: function () {
            return {menus: this.menus};//||[{name:'加载中',children:[]}]
        },
        methods: {
            getPath: function (path) {
                var x='/'+this.$route.params.id+'/'+path;
                return x
            }
        }
    }
</script>