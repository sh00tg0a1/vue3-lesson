<template>
  <h1>Events for Good</h1>
  <div class="events">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <EventCard
      v-for="event in events"
      v-bind:key="event.id"
      v-bind:event="event"
    />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js"

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    // this.events = [{
    //     "id": 1341234,
    //     "category": "animal welfare",
    //     "title": "Cat Adoption Day",
    //     "description": "Find your new feline friend at this event.",
    //     "location": "Somewhere",
    //     "date": "May 18, 2021",
    //     "time": "12:00",
    //     "petsAllowed": true,
    //     "organizer": "Someone"
    //   }]
      EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
