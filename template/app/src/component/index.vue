<template>
    <div class="index">
        <p>Vuex Test: {{ test }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                test: this.$store.state.test
            };
        }
    };
</script>

<style>

</style>
