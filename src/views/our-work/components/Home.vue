<template>
  <section id="hero">
    <BorderContainer :theme="'dark'" :sections-length="4" :current-section="1" />
    <div class="container-custom d-flex flex-column justify-content-center">
      <div class="row w-100">
        <div class="col-12 col-md-10 d-flex flex-column">
          <SectionNumberComponent
            class="mt-auto"
            :number="'01 / 010'"
            :section-name="'Our Work'"
            style="width: 218px"
            :color="'#ffffff'"
          />
          <h1 class="monts-semilight-52 text-white mt-4">
            We believe in the creativity in software innovation
          </h1>
          <div class="d-flex flex-row justify-content-start align-items-start">
            <div class="shape-blue"></div>
            <p class="albert-reg-20 text-white">
              Our IT Solution is committed to give unparalleled quality, delighting our
              customers while staying within the budget. We're best to deliver our clients
              real high quality products with unlimited features & options
            </p>
          </div>
          <div
            class="d-flex flex-wrap d-flex align-items-center mt-5 pointer"
            @click="$router.push('/contact-us')"
          >
            <p class="ibm-semibold-17 text-white ms-3">GET IN TOUCH</p>
            <img
              class="d-flex align-items-center ms-3 mb-auto justify-content-center"
              src="@/assets/images/our-work/touch-icon.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <img class="asset-3" src="@/assets/images/who-we-are/asset-3.png" alt="asset" />
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#hero {
  background-image: url("@/assets/images/our-work/bg-ourwork.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  z-index: 1;
  .container-custom {
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    z-index: 1;
    .section-number {
      border: 2px solid #b8bdc6;
      border-radius: 25px;
      margin-right: auto;
      padding: 5px 10px;
      font-family: "IBM Plex Mono", sans-serif;
      hr {
        width: 20px;
        border-top: 2px solid;
      }
    }
    .shape-blue {
      width: 68px;
      height: 22px;
      background-color: #0c4aa9;
      margin-right: 20px;
      margin-top: 10px;
    }
  }
  .asset-2 {
    position: absolute;
    left: -1px;
    top: 30%;
  }
  .asset-3 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
@media screen and (max-width: 1024px) {
  #hero {
    padding: 0 80px;
  }
  .container-custom {
    height: 100vh;
    padding: 0;
  }
  .monts-semilight-52 {
    width: 85vw;
    font-size: 44px !important;
    line-height: 48px !important;
  }
}
@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
    background-image: url("@/assets/images/our-work/bg-mobile.png");
    background-size: contain;
    .container-custom {
      height: 100vh;
      padding: 0;
      border: none;
      .monts-semilight-52 {
        width: 85vw;
        font-size: 44px !important;
        line-height: 48px !important;
      }
      .albert-reg-20 {
        width: 380px;
      }
    }
  }
}
@media screen and (max-width: 567px) {
  .albert-reg-20 {
    width: 50vw !important;
  }
}
</style>
