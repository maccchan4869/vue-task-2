<template>
  <div class="information">
    <div class="container divCommon">
      <Header msg="お客様の情報を入力してください" index="1"/>
      <div class="separate">
        <p class="has-text-info">-  性別 -</p>
        <div class="columns is-vcentered divAns">
          <input type="radio" value="0" v-model="selectedGender" @change="commitGender">
          <label>男性</label>
          <input type="radio" value="1" v-model="selectedGender" @change="commitGender">
          <label>女性</label>
        </div>
      </div>
      <div class="separate">
        <p class="has-text-info">- 生年月日 -</p>
        <div class="columns is-vcentered divAns divSelect">
          <div class="select">
            <select v-model="selectedYear" @change="commitYear">
              <option v-for="yearOption in yearOptions" :value="yearOption.year" v-bind:key="yearOption.year">{{ yearOption.text }}</option>
            </select>
          </div><label>年</label>
          <div class="select">
            <select v-model="selectedMonth" @change="commitMonth">
              <option v-for="month in 12" :value="month" v-bind:key="month">{{ month }}</option>
            </select>
          </div><label>月</label>
          <div class="select">
            <select v-model="selectedDay" @change="commitDay">
              <option v-for="day in maxDay" :value="day" v-bind:key="day">{{ day }}</option>
            </select>
          </div><label>日</label>
        </div>
      </div>
    </div>
    <TransButton next="Question" back="" nextText="次へ進む ＞"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TransButton from '@/components/TransButton.vue'
import definition from "@/helper/definition"

export default {
  data: () => {
    return {
      selectedGender: '',
      selectedYear: 2018,
      selectedMonth: 1,
      selectedDay: 1,
      maxDay: 0,
      yearOptions: []
    };
  },
  components: {
    Header,
    TransButton
  },
  created() {
    this.selectedGender = this.$store.getters.getSelectedGender;
    this.selectedYear = this.$store.getters.getSelectedYear;
    this.selectedMonth = this.$store.getters.getSelectedMonth;
    this.selectedDay = this.$store.getters.getSelectedDay;
    this.getMaxDay();
    definition.createYearOptions(this.yearOptions);
  },
  methods: {
    // 最大日数を取得
    getMaxDay() {
      // 年、月どちらかが変更された場合、必ず1日に戻す
      this.selectedDay = 1;
      this.maxDay = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    },
    commitGender() {
      this.$store.commit('commitGender', this.selectedGender);
    },
    commitYear() {
      this.$store.commit('commitYear', this.selectedYear);
      this.getMaxDay();
    },
    commitMonth() {
      this.$store.commit('commitMonth', this.selectedMonth);
      this.getMaxDay();
    },
    commitDay() {
      this.$store.commit('commitDay', this.selectedDay);
    }
  }
}
</script>

<style>
.divSelect {
  padding-top: 0.8rem;
}
</style>
