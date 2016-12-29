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
        }
    }
</script>