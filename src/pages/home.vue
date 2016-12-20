<style lang="less">

</style>

<template>
    <div>
        <!--likeV
        <input @click="del" type="button" value="del">-->
        <top-nav></top-nav>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import topNav from './topNav.vue';
    import leftMenu from './leftMenu.vue';

    module.exports = {
        beforeRouteEnter: function (to, from, next) {
            $.get('/snc-system/resources/reslist.shtml', {}, function (d) {
                next(function (vm) {
                    vm.$store.commit('setData',{data: JSON.parse(d)})
                });
            });
        },
        components: {
            topNav: topNav,
            leftMenu:leftMenu
        },
        computed:{
            top: function () {
                return this.$store.state.data
            },
        },
        methods: {
            del: function () {
                this.$store.commit('pop')
            }
        },

    }
</script>