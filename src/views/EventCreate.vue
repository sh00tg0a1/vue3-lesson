<template lang="">
    <div class="create">
        <h1>Create an Event, {{ user.name }}</h1>
        <form @submit.prevent="createEvent">
            <div class="field">
            <label>Select a category</label>
            <select v-model="event.category">
                <option v-for="cat in categories" :key="cat">{{ cat }}</option>
            </select>
            </div>
          <h3>Name & describe your event</h3>
          <div class="field">
            <label>Title</label>
            <input v-model="event.title" type="text" placeholder="Add an event title"/>
          </div>
          <div class="field">
            <label>Description</label>
            <input v-model="event.description" type="text" placeholder="Add a description"/>
          </div>
          <h3>Where is your event?</h3>
          <div class="field">
            <label>Location</label>
            <input v-model="event.location" type="text" placeholder="Add a location"/>
          </div>
          <h3>When is your event?</h3>
          <div class="field">
            <label>Date</label>
            <datepicker v-bind:style="dp_style" v-model="event.date" placeholder="Select a date"/>
          </div>
          <div class="field">
            <label>Select a time</label>
            <select v-model="event.time">
              <option v-for="time in times" :key="time">{{ time }}</option>
            </select>
          </div>
          <input type="submit" class="button -fill-gradient" value="Submit"/>
        </form>
        <!-- <p>This event was created by {{ user.name }}</p>
        <p>There are {{ catLength }} categories</p>
        <p>{{ getEventByID(3) }}</p>
        <ul>
            <li 
                v-for="cat in categories"
                v-bind:key="cat"
            >
            {{cat}}
            </li>
        </ul> -->
    </div>
    <!-- <div>
        <input type="number" v-model.number="incrementBy" />
        <button @click="incrementCount">Increment</button>
        <p>Value of mutation: {{ count }}</p>
    </div> -->
</template>
<script>

// import { mapState, mapGetters } from 'vuex'
import Datepicker from "vue3-datepicker"

export default {
    components: {
        Datepicker
    },
    data() {
        const  times = []
        for (let i = 0; i<24; i++) {
            times.push(i+":00")
        }
        return {
            categories: this.$store.state.categories,
            event: this.createNewEventObj(),
            user: this.$store.state.user,
            times: times,
            dp_style: `
                border: 1px solid #bbbdc0;
                height: 30px;
                width: 200px;
                border-radius: 0;
                box-sizing: border-box;`
        }
    },
    methods: {
        createEvent() {
            this.$store.dispatch('createEvent', this.event).then(()=>{
                // 可有可无
                // this.$route.push({
                //     name: 'events',
                //     params: {id: this.event.id}
                // })
                this.event = this.createNewEventObj()
            }).catch(() => {
                console.log("some thing rong")
            })
        },
        createNewEventObj() {
            const user = this.$store.state.user
            const id = Math.floor(Math.random() * 100000)

            return {
                id: id,
                user: user,
                category: "",
                title: "",
                description: "",
                location: "",
                date: "",
                time: "",
                attendees: []
            }
        }
    },
    // data() {
    //     return {
    //         incrementBy: 1
    //     }
    // },
    // methods: {
    //     incrementCount() {
    //         this.$store.dispatch('updateCount', this.incrementBy)
    //     }
    // },
    // style 1
    // computed: mapState({
    //     userName: state => state.user.name,
    //     userID: state => state.user.id,
    //     categories: state => state.categories
    // })
    // style 2
    // computed: mapState({
    //     user: 'user',
    //     categories: 'categories'
    // })
    // computed: {
    //     catLength() {
    //         return this.$store.getters.catLength
    //     },
    //     getEvent() {
    //         return this.$store.getters.getEventByID
    //     },
    //     ...mapGetters(['catLength', 'getEventByID']),
    //     ...mapState(['user', 'categories'])
    // }
}
</script>
<style scoped>
form {
    text-align: center;
    align-items: center;
    justify-content: center;
}

ul {
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    margin: auto;
}

.field {
    text-align: start;
    margin-bottom: 10px;
    width: 20%;
    margin-left: 40%;
}

form h3 {
    text-align: start;
    margin-left: 40%;
    margin-top: 30px;
    margin-bottom: 10px;
}

input[type=text], select  {
    border: 1px solid #bbbdc0;
    height: 30px;
    width: 200px;
    border-radius: 0;
    box-sizing: border-box;
}

/* .dp_style[readonly] {
    border: 1px solid #bbbdc0;
    height: 30px;
    width: 200px;
    border-radius: 0;
    box-sizing: border-box;
} */

input[type=submit] {
    border: 1px solid #a2abb4;
    height: 30px;
    width: 100px;
    border-radius: 0;
    box-sizing: border-box;
}

.field label  {
    display: block;
    position: relative;
    -webkit-appearance: none；
}
</style>