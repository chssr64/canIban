<template>


<div :class="titleClass">{{name}}</div>

</template>

<script>
import {ref, computed, watch, onMounted, nextTick, toRefs} from 'vue'
import { useStore } from 'vuex'


export default {
  props: {
    name: {
      type: String
    },
    titleClass: {
      type: String
    }
  },
  components: {
  },
  setup(props, { emit }) {
    const { name, titleClass } = toRefs(props)
    //const { ticket, hclass } = toRefs(props)
    const store = useStore()
    const innerHeightGET = computed(() => store.getters['app/innerHeightGet'])
    const pageGET = computed(() => store.getters['app/pageGet'])

    onMounted(() => {
    })

    const show = ref(true)


    return {
      innerHeightGET,
      pageGET,
      show
    }
  }
}
</script>

<style>
.liquid-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-weight: bold;
  text-transform: uppercase;
}
.liquid-button:hover text{
  fill: #d50000 !important;
}
.liquid-button path {
  cursor: pointer;
}
.site-bar{
  background: rgba(24, 255, 255, 0.25);
  /*box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);*/
  backdrop-filter: blur(9.2px) saturate(185%);
  -webkit-backdrop-filter: blur(9.2px) saturate(185%);
  z-index: 999;
  border: none;
}
</style>
