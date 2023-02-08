<template>
  <h1 id="Intro">intro page</h1>
  <button @click="arco = !arco">click</button>
  <transition name="fadeA">
    <!--  v-if="arco == true"랑 같은 것 -->
    <h2 v-if="arco" class="show">show contents</h2> 
  </transition>
  <div class="intro"></div>
</template>
<script>
export default {
  data() {
    return{
      arco: false,
    }
  }
}
</script>

<style scoped>
.intro{
  width: 100%;
  height: 800px;
  background-color: antiquewhite;
}
.show{
  padding: 10px 0;
  background-color: brown;
  color: aliceblue;
}
/* fade in일 때 */
.fadeA-enter-from{
  opacity: 0;
}
.fadeA-enter-active{
  transition: opacity 1s ease-in-out;
}
.fadeA-enter-to{
  opacity: 1;
}
/* fade out일때 */
.fadeA-leave-from{
  opacity: 1;
}
.fadeA-leave-active{
  transition: opacity 1s ease-in-out;
}
.fadeA-leave-to{
  opacity: 0;
}
</style>