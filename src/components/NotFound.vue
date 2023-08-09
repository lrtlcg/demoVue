<template>
  <el-result icon="error" title="提示">
    <template #sub-title>
      <p>您已经迷失了方向，请点击返回按钮，返回吧！</p>
    </template>
    <template #extra>
      <el-button type="primary" @click="getHome">返回</el-button>
    </template>
  </el-result>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const getHome = () => { router.push("/") }
</script>
<style scoped></style>
