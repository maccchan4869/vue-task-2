import { createStore } from 'vuex'

const gender = {
  male: '0',
  female: '1'
}

const choice = {
  yes: '0',
  no: '1'
}

export default createStore({
  state: {
    selectedGender: '',
    selectedYear: 2018,
    selectedMonth: 1,
    selectedDay: 1,
    insurance: '',
    hospital: '',
    surgery: '',
    consultation: ''
  },
  mutations: {
    commitGender(state, val) {
      state.selectedGender = val;
    },
    commitYear(state, val) {
      state.selectedYear = val;
    },
    commitMonth(state, val) {
      state.selectedMonth = val;
    },
    commitDay(state, val) {
      state.selectedDay = val;
    },
    commitInsurance(state, val) {
      state.insurance = val;
    },
    commitHospital(state, val) {
      state.hospital = val;
    },
    commitSurgery(state, val) {
      state.surgery = val;
    },
    commitConsultation(state, val) {
      state.consultation = val;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getSelectedGender: state => {
      return state.selectedGender;
    },
    getSelectedYear: state => {
      return state.selectedYear;
    },
    getSelectedMonth: state => {
      return state.selectedMonth;
    },
    getSelectedDay: state => {
      return state.selectedDay;
    },
    getInsurance: state => {
      return state.insurance;
    },
    getHospital: state => {
      return state.hospital;
    },
    getSurgery: state => {
      return state.surgery;
    },
    getConsultation: state => {
      return state.consultation;
    },
    getQuestionAns: state => {
      return {
        gender: state.selectedGender === gender.male ? '男性' : '女性',
        birthday: `${state.selectedYear}年${state.selectedMonth}月${state.selectedDay}日`,
        insurance: state.insurance === choice.yes ? 'はい' : 'いいえ',
        hospital: state.hospital === choice.yes ? 'はい' : 'いいえ',
        surgery: state.surgery === choice.yes ? 'はい' : 'いいえ',
        consultation: state.consultation
      };
    }
  }
})
