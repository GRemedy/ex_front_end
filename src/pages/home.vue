<template>
  <div>
    <el-container>
      <myHeader></myHeader>
      <el-container>
        <myAside></myAside>
        <myMain></myMain>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        name:"home"
    }
    import myAside from '../components/myAside.vue';
    import myMain from '../components/myMain.vue';
    import myHeader from '../components/myHeader.vue';
</script>

<style lang="css" scoped>

</style>