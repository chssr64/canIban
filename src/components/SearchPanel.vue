<template>
<div class="absolute top-14 right-0 flex-col  bg-gray-200 duration-500 w-1/6 h-full z-20" :class="search ? '' : 'translate-x-full'">
      <div class="absolute top-3 right-3 h-9 w-9">

      </div>
      <div class="pt-20 pl-10 text-xl duration-500"><h1>проекты</h1></div>

      <div class="pt-10 px-4 rounded-lg text-xl duration-500">
        <div @click="openProject(project)" class="flex justify-start items-center w-full h-10 px-4 mb-2 rounded-lg text-lg hover:bg-gray-300"
        v-for="project in projects" :key="project">{{project}}</div>
      </div>
    </div>
</template>


<script>

import {ref} from 'vue'


export default {

  props: {
    search: {
      type: Boolean
    },
    projects: {
      type: Array
    }
  },
  // emits: ['openProject'],
  emits: {
    openProject: 'String'
  },

  setup(props, {emit}) {

    //const opened = ref(true)
    const openProject = (project) => {
      emit('openProject', project)
    }

    return {
      openProject,
      //opened,

    }

  },
}
</script>
