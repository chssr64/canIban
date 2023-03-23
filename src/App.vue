<template>
  <div class="relative h-screen w-screen overflow-hidden">

    <main class="relative h-full w-full overflow-auto">
      <router-view />
    </main>

  </div>
</template>

<script>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'


export default {
  components: {

  },
  setup() {

    onMounted(() => {

    })

    return {
    }
  }
}
</script>

<style>
</style>
