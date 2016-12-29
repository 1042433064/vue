<style lang="less" scoped>

</style>

<template>
    <div>
        <tree-render :list="menus"></tree-render>
        <!--<tree :menus="menus"></tree>-->
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import tree from './tree.vue';
    import treeRender from 'src/components/treeMenu/render';

    export default {
        components: {
            tree,
            treeRender
        },
        computed: {
            menus: function () {
                let id = this.$route.params.id;
                let menu = this.$store.state.data.filter(
                    function (v) {
                        return v.id == id
                    }
                );
                return menu && menu[0] && menu[0].children
            }
        },
    }
</script>