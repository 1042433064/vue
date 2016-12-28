<style lang="less">
    @import "../static/less/hello";


</style>

<template>
    <div>
        <!--likeV
        <input @click="del" type="button" value="del">-->
        <hello class="hello"></hello>
        <top-nav></top-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import topNav from './topNav.vue';
    import leftMenu from './leftMenu.vue';
    import hello from 'src/custom/hello.vue';
    import menu from '../config/menu.json';

    module.exports = {
        beforeRouteEnter: function (to, from, next) {
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
            topNav: topNav,
            leftMenu:leftMenu,
            hello
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
            del: function () {
                this.$store.commit('pop')
            }
        },
    }
</script>