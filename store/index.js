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
        }))
    }
  })
}

export default createStore
