<template>
    <div a>
        你好，我是张三
        <img src="../static/img/hello.png">
    </div>
</template>


<script>
    export default {
        mounted(){
            console.log(_.now())
        }
    }
</script>