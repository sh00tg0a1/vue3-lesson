<template>
    <div v-if="event" class="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }} </p>
        <p>{{ event.description }}</p>
        <h5>Organized by {{ event.user.name }}</h5>
        <h5>Category: {{ event.category }}</h5>
    </div>
</template>

<script>

import EventService from "@/services/EventService.js"

export default {
    name: "Event",
    props: ["id"],
    data() {
        return {
            // null will cause an error or you need v-if
            // event: null,
            //
            event: {},
        }
    },
    created() {
        EventService.getEvent(this.id)
            .then(response => {
                this.event = response.data

            })
            .catch(error => {
                console.log(error)
            });
    }
}
</script>
<style>
</style>