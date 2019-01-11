import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg', id: 'sdvscvc', title: 'Meetup in New York', date: '2017-07-17' },
      { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Sunset_over_the_base_of_the_Eiffel%2C_Paris_2007.jpg', id: 'fdvdfdfv', title: 'Meetup in Paris', date: '2017-07-19' }
    ],
    user: {
      id: 'adefsfefsdds',
      registeredMeetups: ['sdvscvc']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'sdcdc'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
