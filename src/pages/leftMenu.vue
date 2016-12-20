<style lang="less" scoped>

</style>

<template>
    <div>
        <tree :menus="menus()"></tree>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import tree from './tree.vue';
    module.exports = {
        components: {
            tree: tree
        },
        methods: {
            menus: function () {
                var id=this.$route.params.id;
                return this.$store.state.data.filter(
                        function(v){
                            return v.id==id
                        }
                )
            }
        }
    }
</script>