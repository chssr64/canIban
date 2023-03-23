<template>
<div class="relative w-full h-full flex flex-col">

      <Sidebar :opened="isOpenSidebar" :projects="projects" @openProject="openProject" v-click-outside="closeSidebar"></Sidebar>
      <SearchPanel :search="openSearch" v-click-outside="openSearch = false"></SearchPanel>





    <!-- header -->
  <div class=" w-full h-16 p-0 m-0 bg-gray-200">
    <div class="flex justify-end h-10 pt-4 pr-4">
      <input @focus="openSearch = true" type="text" placeholder="поиск" class="w-16 focus:w-1/6 focus:ring-0 focus:outline-none focus:border-none border-none outline-none placeholder-gray-300
             text-xs justify-right rounded-lg duration-300">
    </div>

    <div class="filters flex pl-20 gap-x-5 w-auto">
      <button @click="isOpenSidebar = !isOpenSidebar">проекты</button>
      <a href="#">dfdfdfdfdfd</a>
      <a href="#">dfdfdfdfdfd</a>
      <button @click="reset" class="cursor-pointer">все задачи</button>
    </div>
  </div>

<!-- allProjects -->


    <div class="flex w-full h-full">


      <!-- in plans -->
        <div class="flex flex-col p-4 w-full bg-white">
          <div class="flex relative bg-gray-200 place-content-between items-center" :class="createNewPlan ? 'rounded-t' : 'rounded'"><p class="p-2">Планы</p>
          <button @click="createNewPlan = !createNewPlan" class="flex items-center justify-center mr-2 rounded-[25px] w-10 h-6 hover:bg-gray-300">
            <div v-if="!createNewPlan">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.31348 0.65686V11.9706M0.656622 6.31371H11.9703H0.656622Z" stroke="#3F3F46" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>


            <transition name="new">
              <new-ticket @createTicket="addTicket" @close="createNewPlan = false" colorTicket="bg-gray-100" v-if="createNewPlan"></new-ticket>
            </transition>
          </div>


          <ticket v-for="(ticket, i) in plans" :key="i" :ticket="ticket" hclass=""></ticket>
        </div>


        <div class="h-full border-r border-t-0 border-gray-200 my-4"></div>






<!-- for Work -->
        <div class="forWork flex flex-col p-4 w-full bg-white">

          <div class="flex relative bg-red-200 place-content-between items-center" :class="createNewForWork ? 'rounded-t' : 'rounded'"><p class="p-2">Сделать</p>
            <button @click="createNewForWork = !createNewForWork" class="flex items-center justify-center mr-2 rounded-[25px] w-10 h-6 hover:bg-red-300">
            <div v-if="!createNewForWork">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.31348 0.65686V11.9706M0.656622 6.31371H11.9703H0.656622Z" stroke="#3F3F46" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>

          <new-ticket @createTicket="addTicket" @close="createNewForWork = false" colorTicket="bg-red-100" v-if="createNewForWork"></new-ticket>
          </div>

            <ticket v-for="(ticket, i) in forWork" :key="i" :ticket="ticket" hclass=""></ticket>

        </div>




        <div class="h-full border-r border-gray-200 my-4"></div>



<!-- in work -->
        <div class="inWork flex flex-col p-4 w-full bg-white">
          <div class="flex relative bg-blue-200 place-content-between items-center" :class="createNewInWork ? 'rounded-t' : 'rounded'"><p class="p-2">В работе</p>
          <button @click="createNewInWork = !createNewInWork" class="flex items-center justify-center mr-2 rounded-[25px] w-10 h-6 hover:bg-blue-300">
            <div v-if="!createNewInWork">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.31348 0.65686V11.9706M0.656622 6.31371H11.9703H0.656622Z" stroke="#3F3F46" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>

          <new-ticket @createTicket="addTicket" @close="createNewInWork = false" colorTicket="bg-blue-100" v-if="createNewInWork"></new-ticket>
          </div>

          <ticket v-for="(ticket, i) in inWork" :key="i" :ticket="ticket" hclass=""></ticket>
        </div>



                <div class="h-full border-r border-t-0 border-gray-200 my-4"></div>





<!-- ready -->
        <div class="ready flex flex-col p-4 w-full bg-white">
          <div class="flex relative bg-green-200 place-content-between items-center" :class="createNewReady ? 'rounded-t' : 'rounded'"><p class="p-2">Готовые</p>
          <button @click="createNewReady = !createNewReady" class="flex items-center justify-center mr-2 rounded-[25px] w-10 h-6 hover:bg-green-300">
            <div v-if="!createNewReady">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.31348 0.65686V11.9706M0.656622 6.31371H11.9703H0.656622Z" stroke="#3F3F46" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>

          <new-ticket @createTicket="addTicket" @close="createNewReady = false" colorTicket="bg-green-100" v-if="createNewReady"></new-ticket>
          </div>

          <ticket v-for="(ticket, i) in ready" :key="i" :ticket="ticket" hclass=""></ticket>
        </div>


      </div>









</div>

</template>

<script>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'
import Sidebar from '../components/Sidebar.vue'
import Ticket from '../components/Ticket.vue'
import NewTicket from '../components/NewTicket.vue'
import SearchPanel from '../components/SearchPanel.vue'



export default {
  components: {
    Sidebar,
    Ticket,
    NewTicket,
    SearchPanel,
  },

  setup() {

    const allTickets = ref([
      {
        title: 'js core',
        project: 'learning',
        status: 'plans',
        dateIn: '20.03.2023',
        deadLine: '25.03.2023'
      },
      {
        title: 'css core',
        project: 'learning',
        status: 'inWork',
        dateIn: '10.09.2022',
        deadLine: '25.03.2023'
      },
      {
        title: 'html',
        project: 'learning',
        status: 'forWork',
        dateIn: '20.09.2022',
        deadLine: '31.12.2022'
      },
      {
        title: 'find work',
        project: 'future',
        status: 'plans',
        dateIn: '20.03.2023',
        deadLine: '01.06.2023'
      },
      {
        title: 'firmware',
        project: 'gameboy zelda',
        status: 'plans',
        dateIn: '20.02.2023',
        deadLine: '20.04.2023'
      },
      {
        title: 'sale station',
        project: 'medicine',
        status: 'forWork',
        dateIn: '17.02.2023',
        deadLine: '01.05.2023'
      },
      {
        title: 'service',
        project: 'medicine',
        status: 'ready',
        dateIn: '24.10.2022',
        deadLine: '30.12.2022'
      }




      // {
      //       title: 'зарыбить',
      //       project: 'рыбоконь',
      //       status: 'forWork',
      //       customer: 'work',
      //       dateIn: '10.09.2022',
      //       deadLine: '01.10.2022',
      //       // isVisible: ref(false),
      //     },
      //     {
      //       title: 'законить',
      //       project: 'рыбоконь',
      //       status: 'inWork',
      //       customer: 'work',
      //       dateIn: '10.09.2022',
      //       deadLine: '01.10.2022',
      //       // isVisible: ref(false),
      //     },
    ])

    const projects = computed(() => {
      const result = []
      allTickets.value.forEach((el) => {
        if(result.includes(el.project)) {

        } else {
          result.push(el.project)
        }
      })
      return result
    })

    let workTickets = ref(allTickets.value.slice(0))



    const plans = computed(() => {
      return workTickets.value.filter((el) => el.status === 'plans')
    })
    const forWork = computed(() => {
      return workTickets.value.filter((el) => el.status === 'forWork')
    })
    const inWork = computed(() => {
      return workTickets.value.filter((el) => el.status === 'inWork')
    })
    const ready = computed(() => {
      return workTickets.value.filter((el) => el.status === 'ready')
    })


    const isOpenSidebar = ref(false)
    const closeSidebar = (event) => {
      if(event.target.innerHTML === 'проекты'){
        return
      }
      isOpenSidebar.value = false

    }


    const reset = () => {
      workTickets.value = allTickets.value.slice(0)
    }
    const openProject = (project) => {
      reset()
      workTickets.value = workTickets.value.filter((el) => el.project === project)
    }




    const createNewPlan = ref(false)
    const createNewForWork = ref(false)
    const createNewInWork = ref(false)
    const createNewReady = ref(false)

    const addTicket = (newTicket) => {
      console.log(newTicket)
      allTickets.value.push(newTicket)
      console.log(allTickets.value)
      reset()
            workTickets.value = allTickets.value.slice(0)

    }



    const openSearch = ref(false)
    const searchTickets = () => {
      console.log('search')
    }

  return {
    isOpenSidebar,
    closeSidebar,
    allTickets,
    plans,
    forWork,
    inWork,
    ready,
    projects,
    openProject,
    reset,
    createNewPlan,
    createNewForWork,
    createNewInWork,
    createNewReady,
    addTicket,
    searchTickets,
    openSearch,
    }
  }
}
</script>

<style>
.new-enter-active {
  animation: new-in .5s;
}
.new-leave-active {
  animation: new-in .5s reverse;
}


@keyframes new-in {
  0% {
    height: 0%;
  }
  50% {
    height: 50%;
  }

  100% {
    height: 100%;
  }
}
</style>
