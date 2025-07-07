<script setup>
  import { useActivitiesStore } from '@/stores/activitiesStore'

  const activitiesStore = useActivitiesStore()

  function stepDone (activity) {
    activitiesStore.elevateActivity(activity)
  }

  function backStep (activity) {
    activitiesStore.sinkActivity(activity)
  }
</script>

<template>
  <v-container class="bg-grey-darken-4 pa-2 d-flex ga-2 mt-2 rounded-lg">
    <v-row>
      <v-col cols="12" sm="3">
        <v-card color="grey-darken-3">
          <v-card-title class="bg-red-accent-4">PARA FAZER</v-card-title>
          <v-card-item
            v-for="activity in activitiesStore.todoActivities"
            :key="activity.id"
            class="bg-red-darken-4 pa-2 text-white my-2 mx-6 pa-0 rounded-lg"
          >
            <v-row class="d-flex justify-space-between pa-2 text-h6 align-center" dense>
              {{ activity.title }}
              <v-btn class="rounded-pill" text="Step done" variant="tonal" @click="stepDone(activity)" />
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card color="grey-darken-3">
          <v-card-title class="bg-pink-accent-4">EM AÇÃO</v-card-title>
          <v-card-item
            v-for="activity in activitiesStore.doingActivities"
            :key="activity.id"
            class="bg-pink-darken-4 pa-2 text-white my-2 mx-6 pa-0 rounded-lg"
          >
            <v-row class="d-flex justify-space-between pa-2 align-center" dense>
              {{ activity.title }}
              <v-btn class="rounded-pill" text="Step done" variant="tonal" @click="stepDone(activity)" />
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="3">
        <v-card color="grey-darken-3">
          <v-card-title class="bg-deep-purple-accent-4">PARA REVISAR</v-card-title>
          <v-card-item
            v-for="activity in activitiesStore.reviseActivities"
            :key="activity.id"
            class="bg-deep-purple-darken-4 pa-2 text-white my-2 mx-6 pa-0 rounded-lg"
          >
            <v-row class="d-flex justify-space-between pa-2 align-center" dense>
              {{ activity.title }}
              <v-btn class="rounded-pill" text="Step done" variant="tonal" @click="stepDone(activity)" />
            </v-row>
            <v-row class="d-flex justify-space-between pa-2 align-center" dense>
              {{ activity.title }}
              <v-btn class="rounded-pill" text="Back Step" variant="tonal" @click="backStep(activity)" />
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="3">
        <v-card color="grey-darken-3">
          <v-card-title class="bg-blue-accent-4">CONCLUÍDOS</v-card-title>
          <v-card-item
            v-for="activity in activitiesStore.doneActivities"
            :key="activity.id"
            class="bg-blue-darken-4 pa-2 text-white my-2 mx-6 pa-0 rounded-lg"
          >
            <v-row class="d-flex justify-space-between pa-2 align-center" dense>
              {{ activity.title }}
            </v-row>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
