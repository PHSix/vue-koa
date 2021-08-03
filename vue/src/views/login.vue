<template>
  <div
  class="login-box">
    <el-form
      :label-position="labelPosition"
      :model="user"
      class="login-card"
    >
    <el-form-item>
      <h1 style="text-align: center">登陆页</h1>

    </el-form-item>
      <el-form-item label="帐号">
        <el-input v-model="user.username" placeholder="请输入帐号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <div style="display:flex; justify-content: center">
        <el-button type="primary" @click="submit">提交</el-button>

        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods:{
    submit() {
    }

  }
};
</script>

<style scoped>
.login-box{
  background: url(../assets/background.png);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
  user-select: none;
}
.login-card {
  padding: 70px;
  border: 2px solid #aaa;
  border-radius: 10px;
  backdrop-filter: blur(20px);
}
</style>