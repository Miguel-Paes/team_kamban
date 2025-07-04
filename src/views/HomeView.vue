<script setup>
  import { useActivitiesStore } from '@/stores/activitiesStore'

  const activitiesStore = useActivitiesStore()

  function stepDone (activity) {
    activitiesStore.elevateActivity(activity)
  }
</script>

<template>
  <v-container class="bg-grey-darken-4 pa-2 d-flex ga-2 mt-2 rounded-lg">
    <v-row>
      <v-col cols="12" sm="3">
        <v-card color="red-darken-4 ">
          <v-card-title class="bg-red-accent-4">PARA FAZER</v-card-title>
          <v-card-item
            v-for="activity in activitiesStore.todoActivities"
            :key="activity.id"
            class="text-white"
          >
            <div class="d-flex justify-space-between align-center leading-loose">
              {{ activity.title }}
              <v-btn class="rounded-pill" text="Step done" variant="tonal" @click="stepDone(activity)" />
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card color="pink-darken-4">
          <v-card-title class="bg-pink-accent-4">EM AÇÃO</v-card-title>
          <v-card-item
            v-for="activity in activitiesStore.doingActivities"
            :key="activity.id"
            class="text-white"
          >
            <div class="d-flex justify-space-between align-center leading-loose">
              {{ activity.title }}
              <v-btn class="rounded-pill" text="Step done" variant="tonal" @click="stepDone(activity)" />
            </div>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="3">
        <v-card color="deep-purple-darken-4">
          <v-card-title class="bg-deep-purple-accent-4">PARA REVISAR</v-card-title>
          <v-card-item
            v-for="activity in activitiesStore.reviseActivities"
            :key="activity.id"
            class="text-white"
          >
            <div class="d-flex justify-space-between align-center leading-loose">
              {{ activity.title }}
              <v-btn class="rounded-pill" text="Step done" variant="tonal" @click="stepDone(activity)" />
            </div>
          </v-card-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="3">
        <v-card color="blue-darken-4">
          <v-card-title class="bg-blue-accent-4">CONCLUÍDOS</v-card-title>
          <v-card-item
            v-for="activity in activitiesStore.doneActivities"
            :key="activity.id"
            class="text-white"
          >
            <div class="py-1">
              {{ activity.title }}
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
