import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    strict: false,
    state: () => ({
      messages: []
    }),
    getters: {
      tags: state => state.messages
        .map(message => message.tags)
        .reduce((acc, val) => acc.concat(val), [])
        .reduce((obj, tag) => {
            if (!obj[tag]) { obj[tag] = 0 }
            obj[tag]++
            return obj
          }, {}),
      getMessageByTag: state => tag => {
        return state.messages.filter(message => message.tags.indexOf(tag) > -1)
      }
    },
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
