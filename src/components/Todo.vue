<template>
    <button class="list-group-item text-left" @click="clickButton">
        {{ label }}
    </button>
</template>

<script>
    export default {
        //--- 외부에서 입력받을 lable 항목을 props 에 지정해준다.
        props : ['label'],
        methods : {
            clickButton() {
                this.$emit('componentclick');
            }
        }
    };
</script>