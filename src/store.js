import Vue from 'vue'
import Vuex from 'vuex'
import logger from './logger'

Vue.use(Vuex)

const NEXT_ITEMNUM = 'NEXT_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default new Vuex.Store({
  plugins: [logger],
  state: {
    level: '第一周',
    itemNumber: 1,
    itemDetail: [
      {
        itemID: 1,
        itemName: 'where you are?',
        answer: ['hangzhou', 'nanjing', 'ningbo', 'wenzhou'],
        correctAnswer: 'hangzhou'
      }, {
        itemID: 2,
        itemName: 'where are you from?',
        answer: ['zhongguo', 'riben', 'hanguo', 'meiguo'],
        correctAnswer: 'zhongguo'
      }
    ],
    answer: []
  },
  mutations: {
    [NEXT_ITEMNUM]: function(state, payload) {
      state.itemNumber+=1;
    },
    [REMBER_ANSWER]: function(state, answer) {
      state.answer.push(answer);
    },
    [INITIALIZE_DATA]: function(state, payload) {
      state.itemNumber = 1;
      state.answer = [];
    }
  },
  actions: {
    nextItem: function({ commit, state }, answer) {
      commit(REMBER_ANSWER, answer);
      if(state.itemNumber < state.itemDetail.length) {
        commit(NEXT_ITEMNUM, 1);
      }
    },
    initializeData: function({ commit }) {
      commit(INITIALIZE_DATA);
    }
  }
})
