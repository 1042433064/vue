<style lang="less" scoped>
    nav{
        background: #4f5052;
    }
    ul{
        float: left;
    }
    .logo{
        float: left;
        background: url("/src/static/img/logo.png") center no-repeat;
        width: 150px;
        height: 60px;
    }
    .menu-icon{
        float: left;
        width: 60px;
        height: 60px;
        color: #A1C9ED;
        line-height: 60px;
        text-align: center;
        font-size: 19px;
    }
    ul li{
        display: block;
        float: left;
        list-style: none;
    }
    ul li a{
        width: 100px;
        height: 60px;
        display: block;
        line-height: 60px;
        text-align: center;
        font-size:15px;
    }
    ul li a.router-link-active{
        background: #4fa4da;
    }
    ul li a{
        text-decoration: none;
        color: white;
    }
    nav:after{
        content: ' ';
        clear: both;
        display: block;
    }
</style>

<template>
    <nav v-cloak>
        <div class="logo">
        </div>
        <div class="menu-icon">
            <i class="fa fa-align-right"></i>
        </div>
        <ul>
            <li v-for="menu in menus" :key="menu.id">
                <router-link :to="'/'+menu.id">{{menu.name}}</router-link>
            </li>
        </ul>
    </nav>
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