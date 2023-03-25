<template>

  <div :class="hclass" class="z-0" v-click-outside="closeTicket">
    <div id="headerOfTicket" @click="openContent = !openContent" :class="openContent ? 'h-[calc(100%-.5rem)]' : 'h-8'"
         class="flex flex-col bg-white duration-300 relative w-full place-content-between overflow-hidden border border-gray-400 border-opacity-500 mt-2 mb-2 p-1 rounded"
         >

         <name :name="ticket.title" titleClass=""></name>


      <!-- <div><h2 class="text-sm">{{ ticket.title }}</h2></div> -->
      <div class="flex justify-center"><hr class="mt-2 block w-full  border border-gray-300"></div>

      <project :project="ticket.project" projectclass="text-xs"></project>
      <!-- <div class="text-xs">Проект: {{ ticket.project }}</div> -->
      <status :status="ticket.status" statusclass="text-xs"></status>


      <customer :customer="ticket.customer" customerclass="text-xs"></customer>

      <div class="flex justify-center"><hr class="block w-full  border border-gray-300"></div>

      <div class="flex place-content-between ">
        <div class=" text-xs bg-green-300">Дата создания: {{ ticket.dateIn }}</div>
        <div class=" text-xs bg-red-300">DeadLine: {{ ticket.deadLine }}</div>
      </div>

    </div>
  </div>

</template>

<script>
import {ref, computed, watch, onMounted, nextTick, toRefs} from 'vue'
import { useStore } from 'vuex'
import Name from '@/components/ticket/Name.vue'
import Project from '@/components/ticket/Project.vue'
import Status from '@/components/ticket/Status.vue'
import Customer from '@/components/ticket/Customer.vue'


export default {
  props: {
    ticket: {
      type: Object
    },
    hclass: {
      type: String
    }
  },
  components: {
    Name,
    Project,
    Status,
    Customer,
  },
  setup(props, { emit }) {
    // const { ticket, hclass } = toRefs(props)
    const store = useStore()
    // const innerHeightGET = computed(() => store.getters['app/innerHeightGet'])
    // const pageGET = computed(() => store.getters['app/pageGet'])

    onMounted(() => {
    })

    const openContent = ref(false)
    const closeTicket = () => {
      openContent.value = false
    }


    return {
      openContent,
      closeTicket,
      // innerHeightGET,
      // pageGET,
      //ticket,
      //hclass
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
