<template>
  <div>
    <ParticleBtn
      :visible.sync="btnOps.visible"
      :animating.sync="btnOps.animating"
      :options="btnOps"
      cls="btn-cls"
    >movie details</ParticleBtn>
    <h2>animating:{{btnOps.animating}}</h2>
    <h2>visible:{{btnOps.visible}}</h2>
    <button @click="btnOps.visible=!btnOps.visible">toggle</button>
  </div>
</template>

<script>
import ParticleEffectButton from "vue-particle-effect-buttons";

export default {
  data() {
    return {
      btnOps: {
        type: "triangle",
        easing: "easeOutQuart",
        size: 6,
        particlesAmountCoefficient: 4,
        oscillationCoefficient: 2,
        color: function() {
          return Math.random() < 0.5 ? "#ff6000" : "#ffffff";
        },
        onComplete: () => {
          console.log("complete");
        },
        onBegin: () => {
          console.log("begin");
        },
        visible: true,
        animating: false,
        default: "movie details"
      }
    };
  },
  components: {
    ParticleEffectButton
  }
};
</script>