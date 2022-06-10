<template>
  <div >
    <div class="row">
      <div class="col-12 py-2 my-2">
        <HeaderComponent />
      </div>
    </div>
    <div class="row my-2">
      <div class="col-4">
        <AsideComponent />
      </div>
      <div class="col-8">
        <BodyComponent />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/headerComponent";
import FooterComponent from "./components/footerComponent";
import AsideComponent from "./components/asideComponent";
import BodyComponent from "./components/bodyComponent";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    BodyComponent,
  },
  
};
</script>