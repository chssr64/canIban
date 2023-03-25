<template>
<div class="absolute  top-0 pt-16 right-0 flex-col duration-300 bg-gray-100 w-1/4 h-full z-20" :class="opened ? '' : 'translate-x-full'">
  <div class="flex flex-col p-4 w-full h-full">
    <ticket v-for="(ticket, i) in searchTickets" :key="i" :ticket="ticket" hclass=""></ticket>
  </div>
</div>
</template>


<script>

import {ref} from 'vue'
import Ticket from '../components/Ticket.vue'



export default {
  components: {
    Ticket,
  },

  props: {
    opened: {
      type: Boolean
    },
    searchTickets: {
      type: Array
    }
  },



  setup() {

    //const opened = ref(true)


    return {

      //opened,

    }

  },
}
</script>
