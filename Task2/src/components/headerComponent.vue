<template>
  <nav class="navbar navbar-dark bg-dark align-items-baseline">
    <div class="container-fluid">

      <div class="d-flex align-items-baseline text-light justify-content-around">
        <router-link to="/" class="navbar-brand fs-5" style="color: wite; text-decoration: none;">Home</router-link>
        <router-link to="/student" class="navbar-brand fs-6" style="color: wite; text-decoration: none;">Student
        </router-link>
        <router-link to="/modal" class="navbar-brand fs-6" style="color: wite; text-decoration: none;">Modal
        </router-link>
        <router-link to="/about" class="navbar-brand fs-6" style="color: wite; text-decoration: none;">About
        </router-link>
      </div>


    </div>

  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  data: () => ({

  }),
};
</script>

<style scoped>
</style>