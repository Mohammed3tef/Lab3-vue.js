<template>
  <ul class="list-group">
    <li class="list-group-item"><a href="#" @click.prevent="targetcomponent ='homeComponent'">Home</a></li>
    <li class="list-group-item"><a href="#" @click.prevent="targetcomponent ='aboutComponent'">About</a></li>
    <li class="list-group-item"><a href="#" @click.prevent="targetcomponent ='gallaryComponent'">Gallary</a></li>
  </ul>
  <div class="col-6 offset-3">
    <Component :is="targetcomponent"/>
  </div>
</template>

<script>
import homeComponent from "./homeComponent"
import aboutComponent from "./aboutComponent"
import gallaryComponent from "./gallaryComponent"
export default {
  data() {
    return {
      targetcomponent:'homeComponent'
    };
  },
  components:{
    homeComponent,
    aboutComponent,
    gallaryComponent,
}
};
</script>

<style scoped>
</style>