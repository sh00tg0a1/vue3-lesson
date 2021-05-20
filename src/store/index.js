import { createStore } from "vuex";
import EventService from "@/services/EventService.js";

export default createStore({
  state: {
    user: {id: "abc", name: "cx"},
    categories: [
      'AAAAaa',
      'BBBB',
      'CCCC',
      'DDDD',
      'EEEE'
    ],
    events: [
      // {id: 1, title: '...', organizer: '...'},
      // {id: 2, title: '...', organizer: '...'},
      // {id: 3, title: '...', organizer: '...'},
      {
        "id": 1,
        "category": ["animal welfare"],
        "title": "Cat Adoption Day",
        "description": "Find your new feline friend at this event.",
        "location": "Somewhere",
        "date": "May 18, 2021",
        "time": "12:00",
        "petsAllowed": true,
        "organizer": "Someone"
      }
    ],
    // for test
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false},
      {id: 3, text: '...', done: true},
      {id: 4, text: '...', done: false},
    ],
    count: 0,
  },
  mutations: {
    INCREMENT_COUNT(state, value) {
      state.count += value
    },
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    updateCount({state, commit}, value) {
      if (state.user) {
        commit('INCREMENT_COUNT', value)
      }
    },
    createEvent({commit}, event) {
      return EventService.postEvent(event).then(()=> {
        commit('ADD_EVENT', event)
      })
    }
  },
  modules: {},
  getters: {
    count: state => state.count,
    catLength: state => state.categories.length,

    getEventByID: state => id => state.events.find(ev => ev.id === id),
    // for test
    doneTodos : state => state.todos.filter(todo => todo.done),
    // activeTodosCount : (state, getters) => state.todos.length - getters.doneTodos.length
    activeTodosCount : state => state.todos.filter(todo => !todo.done).length
  }
});
