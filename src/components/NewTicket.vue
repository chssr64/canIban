<template>



  <div :class="colorTicket" v-click-outside="closeTicket" class="newTicket absolute flex flex-col w-full h-auto top-10 z-10 rounded-b">
  <div class="headerOfTicket w-full p-1">
    <input v-focus v-model="title" type="text" placeholder="название" class="w-full  focus:ring-0 focus:outline-none focus:border-none border-none outline-none text-xs
    rounded h-6 p-1 placeholder-gray-300">

  </div>

  <div class="projectOfTicket w-full p-1">
    <input v-model="project" type="text" placeholder="проект" class="w-full  focus:ring-0 focus:outline-none focus:border-none border-none outline-none text-xs
    rounded h-6 p-1 placeholder-gray-300">
  </div>

  <div class="statusOfTicket w-full p-1">
    <input v-model="status" type="text" placeholder="статус" class="w-full  focus:ring-0 focus:outline-none focus:border-none border-none outline-none text-xs
    rounded h-6 p-1 placeholder-gray-300">
  </div>

  <!-- <div class="customerOfTicket w-full p-1">
    <input v-model="customer" type="text" placeholder="источник запроса" class="w-full  focus:ring-0 focus:outline-none focus:border-none border-none outline-none text-xs
    rounded h-6 p-1 placeholder-gray-300">
  </div> -->

  <div class="dateInOfTicket w-full p-1">
    <input v-model="dateIn" type="text" placeholder="дата создания" class="w-full  focus:ring-0 focus:outline-none focus:border-none border-none outline-none text-xs
    rounded h-6 p-1 placeholder-gray-300">
  </div>

  <div class="deadLineOfTicket w-full p-1">
    <input v-model="deadLine" type="text" placeholder="deadLine" class="w-full  focus:ring-0 focus:outline-none focus:border-none border-none outline-none text-xs
    rounded h-6 p-1 placeholder-gray-300">
  </div>



  <div :class="colorTicket" class="submit flex justify-center w-full p-2 rounded-full">
    <button @click="create" :class="colorTicket" class="w-full h-full">Создать</button>
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
    colorTicket: {
      type: String
    }
  },

  components: {
    Name,
    Project,
    Status,
    Customer,
  },
  directives: {
    focus: {
      mounted: (el) => el.focus()
    }
  },
  // setup(props, { emit }) {
  setup(props, {emit}) {
    // const emit = defineEmits(['createTicket'])
    // const { ticket, hclass } = toRefs(props)
    const store = useStore()
    const innerHeightGET = computed(() => store.getters['app/innerHeightGet'])
    const pageGET = computed(() => store.getters['app/pageGet'])

    // onMounted(() => {
    // })




    const title = ref('')
    const project = ref('')
    const status = ref('')
    // const customer = ref('')
    const dateIn = ref('')
    const deadLine = ref('')

    const create = () => {
      if(title.value.length > 0 && project.value.length > 0 && status.value.length > 0
      && dateIn.value.length > 0 && deadLine.value.length > 0) {
        emit('createTicket', {title: title.value, project: project.value, status: status.value, dateIn: dateIn.value, deadLine: deadLine.value})
        title.value = ''
        project.value = ''
        status.value = ''
        // customer.value = ''
        dateIn.value = ''
        deadLine.value = ''
      }
    }

    const closeTicket = () => {
      console.log("outside")
      emit('close')
    }




    return {
      title,
      project,
      status,
      // customer,
      dateIn,
      deadLine,

      create,
      closeTicket,
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
