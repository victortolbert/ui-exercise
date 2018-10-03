import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    strict: false,
    state: () => ({
      messages: []
    }),
    mutations: {
      INIT: (state, messages) =>
        (state.messages = messages.map(message => {
          return {
            ...message,
            isSelected: false
          }
        })),
      TOGGLE_ALL: (state, messages) =>
        (state.messages = messages.map(message => {
          return {
            ...message,
            isSelected: !message.isSelected
          }
        }))
    }
  })
}

export default createStore
