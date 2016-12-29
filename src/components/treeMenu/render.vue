<style lang="less">
    .nav-list {
        margin: 0;
        padding: 0;
        list-style: none;
        /*border-top: 1px solid #76797b;*/
    }
    .nav-list > li,
    .nav-list > li > a,
    .nav-list .nav-header {
        margin: 0;
    }
    .nav-list li > a:focus {
        outline: none;
    }
    .nav-list > li {
        display: block;
        position: relative;
        float: none;
        padding: 0;
        border-style: solid;
        border-width: 1px 0 0;
    }
    .nav-list > li:last-child {
        border-bottom-width: 1px;
    }
    .nav-list > li.rotate > a
    {
        color: #e0e0e0;
        border-top: 1px solid #626262;
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
        /*background-color: #629cc9;*/
    }
    .nav-list > li > a{
        padding: 10px 6px 12px 15px;
        height: 45px;
        display: block;
        line-height: 23px;
        font-size: 14px;

    }

    .nav-list > li > a:hover{
        background-color: #fff;
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
        border: 0 none;
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
    .nav-list li .submenu{
        padding: 0 0 0 18px;
        /*background: url(treeline.png) 17px 0 repeat-y;*/
        display: none;
    }

    .nav-list > li .submenu {
        display: none;
        list-style: none;
        margin: 0;
        padding: 0;
        line-height: 1.5;
        position: relative;
    }
    .nav-list > li .submenu > li {
        margin-left: 0;
        position: relative;
    }

    .nav-list > li .submenu > li > a{
        border: 0 none;
        font-size: 12px;
        padding-right: 22px;
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
    .nav-list > li .submenu {
        display: none;
        list-style: none;
        margin: 0;
        padding: 0;
        line-height: 1.5;
        position: relative;
    }
    .nav-list > li .submenu > li {
        margin-left: 0;
        position: relative;
    }
    .nav-list > li .submenu > li > a {
        display: block;
        position: relative;
        padding: 7px 0 9px 22px;
        margin: 0;
        border-top-width: 1px;
        border-top-style: dotted;
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
        /*background-image: url(../img/zTreeStandard.png);*/
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


    .nav-list > li .submenu > li a > .fa{
        background-position: 0 4px;
        width: 12px;
    }

    .nav-list > li .submenu > li.active a > .fa{
        background-position: -29px 4px;
    }

    .nav-list > li .submenu > li a > .fa-caret-right:before{
        content: '';
    }

    .nav-list > li > .submenu {
        border-top: 1px solid;
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