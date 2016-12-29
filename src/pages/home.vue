<style lang="less">
    @import "/src/plugin/fontAwesome/css/font-awesome.min.css";
    body,ul{
        margin: 0;
        padding: 0;
        font-family: Roboto, Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '\\5FAE软雅黑', Arial, sans-serif;
    }
</style>

<template>
    <div>
        <top-nav></top-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import topNav from './topNav.vue';
    import leftMenu from './leftMenu.vue';
    import menu from '../config/menu.json';

    module.exports = {
        beforeRouteEnter (to, from, next) {
            /*$.get('/snc-system/resources/reslist.shtml', {}, function (d) {
                next(function (vm) {
                    vm.$store.commit('setData',{data: JSON.parse(d)})
                });
            });*/
            next(function (vm) {
                vm.$store.commit('setData',{data: menu})
            });
        },
        components: {
            topNav,
            leftMenu,
        },
        computed:{
            top: function () {
                return this.$store.state.data
            },
            html: function () {
                return hello
            }
        },
        methods: {
        },
    }
</script>