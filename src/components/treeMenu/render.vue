<style lang="less">
    .nav-list {
        margin: 0;
        padding: 0;
        list-style: none;
        background-color: #f1f5f6;
        color:#5e7c98;
        position: absolute;
        width: 200px;
        top: 60px;
        bottom: 0;
        overflow: auto;
    }
    .nav-list>.rotate{
        background-color: #4f5052;
    }
    .nav-list > li:hover{
        cursor: pointer;
    }
    .nav-list > li.rotate>a{
        background-color: #4f5052;
    }
    .nav-list > li.rotate > a{
        border-top:1px solid #626262;
    }
    .nav-list > li > a:hover{
        background-color: #fff;
    }
    .nav-list > li.rotate > a:hover{
        background-color: #4f5052;
    }
    .nav-list li > a:focus {
        outline: none;
    }
    .nav-list > li {
        display: block;
        position: relative;
        float: none;
        padding: 0;
    }
    .nav-list > li:last-child {
        border-bottom-width: 1px;
    }
    .nav-list > li.rotate > a
    {
        color: #e0e0e0;
    }
    .nav-list > li > a {
        display: block;
        height: 39px;
        line-height: 17px;
        padding-left: 7px;
        text-shadow: none !important;
        font-size: 13px;
        text-decoration: none;
    }
    .nav-list > li > a > .menu-icon {
        display: inline-block;
        vertical-align: sub;
        text-align: center;
        font-size: 18px;
        font-weight: normal;
    }
    .nav-list > li:before {
        display: none;
        content: "";
        position: absolute;
        top: -1px;
        left: 0;
        z-index: 1;
        height: 41px;
        width: 3px;
        max-width: 3px;
        overflow: hidden;
    }
    .nav-list > li > a{
        padding: 10px 6px 12px 15px;
        height: 21px;
        display: block;
        line-height: 21px;
        font-size: 14px;

    }

    .nav-list > li > a > .menu-icon{
        vertical-align: middle;
        margin-left: -5px;
        height: 20px;
    }
    .nav-list > li.rotate > a > .menu-icon{
        color: #46bdf8;
    }

    .nav-list > li > .submenu{
        /*border: 0 none;*/
        padding-left:20px;
        background: url(treeline.png) 19px 0px repeat-y;
    }
    .nav-list > li > .submenu .submenu{
        border: 0 none;
        padding-left:20px;
        background: url(treeline.png) 19px 0px repeat-y;
    }
    .nav-list .menu-icon{
        width: 29px;
    }
    .nav-list .no-skin .nav-list > li{
        border: 0 none;
    }
    .nav-list .no-skin .nav-list > li.active,
    .nav-list .no-skin .nav-list > li.rotate
    {
        background-color: #fafcfb;
    }

    .nav-list .no-skin .nav-list > li.rotate > a,
    .nav-list .no-skin .nav-list > li.rotate > a:hover,
    .nav-list .no-skin .nav-list > li.rotate > a:focus{
        background: #4f5052;
    }
    .nav-list .no-skin .nav-list > li.active:after{
        display: none;
        border: 0 none;
    }

    .nav-list li.active > a:after{
        border: 0 none;
    }

    .nav-list > li:before{
        height: 46px;
        top: 0;
    }
    .nav-list li.active>.submenu{
        display: block;
    }
    .nav-list > li .submenu {
        list-style: none;
        background-color: #fafcfb;
        display: none;
        line-height: 1.5;
        position: relative;
    }
    .nav-list > li .submenu > li {
        /*background-color: #fafcfb;*/
        color:#555;
        margin-left: 0;
        position: relative;
    }
    .nav-list > li .submenu > li > a{
        border: 0 none;
        font-size: 12px;
        padding-right: 22px;
        color:#5e7c98;

    }
    .nav-list > li .submenu > li > a>span{
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
    }

    .nav-list > li .submenu > li > a:hover{
        color: #1391c5;
    }

    .nav-list > li .submenu > li .submenu > a{
        padding: 7px 0 9px 38px;
    }

    .nav-list > li .submenu > li {
        margin-left: 0;
        position: relative;
    }
    .nav-list > li .submenu > li > a {
        display: block;
        position: relative;
        padding: 7px 0 9px 25px;
        margin: 0;

    }
    .nav-list > li .submenu > li > a:hover {
        text-decoration: none;
    }
    .nav-list > li .submenu > li a > .menu-icon {
        display: block;
        font-size: 12px;
        font-weight: normal;
        width: 19px;
        height: 19px;
        line-height: 12px;
        text-align: center;
        position: absolute;
        left: 2px;
        top: 5px;
        z-index: 1;
        background-image: url(zTreeStandard.png);
        background-repeat: no-repeat;
    }
    .nav-list .more{
        background-position: -77px 0px;
    }

    .nav-list .active>a>.more,
    .nav-list .rotate>a>.more
    {
        background-position: -100px 0px;
    }
    .nav-list > li .submenu > li a > .fa-caret-right:before{
        content: '';
    }
     .nav-list > li .submenu > li:last-child {
        background: url(zTreeStandard.png) -166px -68px no-repeat;
        background-color: #fafcfb;
    }
</style>

<template>
    <ul class="nav-list">
    </ul>
</template>

<script>
    import treeView from './view';
    import treeModel from './model';
    module.exports = {
        props:['list'],
        data(){
            return {list:this.list}
        },
        watch:{
            list(){
//                debugger
                this.rest;
            }
        },
        computed:{
            rest(){
                new treeView({
                    el:this.$el,
                    model:new treeModel({list:this.list})
                })
            }
        },
    }
</script>