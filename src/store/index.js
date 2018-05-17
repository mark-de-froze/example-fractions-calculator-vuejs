import Vue from 'vue'
import Vuex from 'vuex'
import Fraction from 'fraction.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: [],
    operations: {
      'plus': '+',
      'minus': '-',
      'multiply': '×',
      'divide': '÷'
    },
    operation: 'plus',
    result: {
      n: 1,
      d: 1
    }
  },
  getters: {
    operation: (state) => state.operations[state.operation],
    history: (state) => state.history
  },
  mutations: {
    changeOperation (state, payload) {
      state.operation = payload
    },
    setResult (state, payload) {
      state.result = payload
    },
    addToHistory (state, payload) {
      state.history.push(payload)
    },
    clearHistory (state) {
      state.history = []
    }
  },
  actions: {
    calculate ({commit, state}, payload) {
      const left = new Fraction(payload.left).valueOf()
      const right = new Fraction(payload.right).valueOf()
      const operation = state.operation
      let result = 0
      switch (operation) {
        case 'plus':
          result = left + right
          break
        case 'minus':
          result = left - right
          break
        case 'multiply':
          result = left * right
          break
        case 'divide':
          result = left / right
          break
      }
      result = new Fraction(result)
      commit('setResult', result)
      commit('addToHistory', { left: payload.left, right: payload.right, operation, result })
    }
  }
})
