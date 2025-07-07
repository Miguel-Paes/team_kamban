import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useActivitiesStore = defineStore('activities', () => {
  const activities = ref([
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      status: 'todo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      limitToDO: new Date().toISOString(),
    },

    {
      id: 1,
      title: 'Task 2',
      description: 'Description for Task 2',
      status: 'doing',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      limitToDO: new Date().toISOString(),
    },

    {
      id: 1,
      title: 'Task 3',
      description: 'Description for Task 3',
      status: 'to revise',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      limitToDO: new Date().toISOString(),
    },

    {
      id: 1,
      title: 'Task 4',
      description: 'Description for Task 4',
      status: 'done',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      limitToDO: new Date().toISOString(),
    },
  ])

  const defaultActivity = ref({
    id: 1,
    title: '',
    description: '',
    status: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    limitToDO: new Date().toISOString(),
  })

  const todoActivities = ref(
    activities.value.filter(activity => activity.status === 'todo'),
  )
  const doingActivities = ref(
    activities.value.filter(activity => activity.status === 'doing'),
  )
  const reviseActivities = ref(
    activities.value.filter(activity => activity.status === 'to revise'),
  )
  const doneActivities = ref(
    activities.value.filter(activity => activity.status === 'done'),
  )

  function ariseActivity(activity) {
    const index = activities.value.findIndex(a => a.id === activity.id)
    if (index === -1) {
      return
    }

    const current = activities.value[index]

    switch (current.status) {
      case 'todo': {
        current.status = 'doing'
        doingActivities.value.push(current)
        todoActivities.value = todoActivities.value.filter(a => a.id !== activity.id)

        break
      }
      case 'doing': {
        current.status = 'to revise'
        reviseActivities.value.push(current)
        doingActivities.value = doingActivities.value.filter(a => a.id !== activity.id)

        break
      }
      case 'to revise': {
        current.status = 'done'
        doneActivities.value.push(current)
        reviseActivities.value = reviseActivities.value.filter(a => a.id !== activity.id)

        break
      }
    }

    current.updatedAt = new Date().toISOString()
  }

  function sinkActivity(activity) {
    const index = activities.value.findIndex(a => a.id === activity.id)
    if (index === -1) {
      return
    }

    const current = activities.value[index]

    switch (current.status) {
      case 'doing': {
        current.status = 'todo'
        todoActivities.value.push(current)
        doingActivities.value = doingActivities.value.filter(a => a.id !== activity.id)

        break
      }
      case 'to revise': {
        current.status = 'doing'
        doingActivities.value.push(current)
        reviseActivities.value = reviseActivities.value.filter(a => a.id !== activity.id)

        break
      }
      case 'done': {
        current.status = 'to revise'
        reviseActivities.value.push(current)
        doneActivities.value = doneActivities.value.filter(a => a.id !== activity.id)

        break
      }
    }

    function addActivity(activity) {
      activities.value.push({
        ...activity,
        id: activities.value.length + 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
    }

    return {
      defaultActivity,
      todoActivities,
      doingActivities,
      reviseActivities,
      doneActivities,
      ariseActivity,
      addActivity,
      sinkActivity,
    }
  }
})
