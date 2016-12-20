<style lang="less" scoped>

</style>

<template>
    <div>
        {{key}}
    </div>
</template>

<script>
    module.exports = {
        computed:{
            key: function () {
                return this.$route.params.key
            },
            id: function () {
                return this.$route.params.id
            }
        },
        methods: {
            menus: function () {
                var id=this.id;
                var key=this.key;
                return this.$store.state.data.filter(
                        function(v){
                            return v.id==id
                        }
                )
            }
        }
    }
</script>