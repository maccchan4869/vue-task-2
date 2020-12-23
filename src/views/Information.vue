<template>
  <div class="information">
    <div class="container divCommon">
      <Header msg="お客様の情報を入力してください" index="1"/>
      <div class="separate">
        <p class="has-text-info">-  性別 -</p>
        <div class="columns is-vcentered divAns">
          <input type="radio" value="true" v-model="selectedGender">
          <label>男性</label>
          <input type="radio" value="false" v-model="selectedGender">
          <label>女性</label>
        </div>
      </div>
      <div class="separate">
        <p class="has-text-info">- 生年月日 -</p>
        <div class="columns is-vcentered divAns divSelect">
          <div class="select">
            <select v-model="selectedYear" @change="getMaxDay">
              <option v-for="yearOption in yearOptions" :value="yearOption.year" v-bind:key="yearOption.year">{{ yearOption.text }}</option>
            </select>
          </div><label>年</label>
          <div class="select">
            <select v-model="selectedMonth" @change="getMaxDay">
              <option v-for="month in 12" :value="month" v-bind:key="month">{{ month }}</option>
            </select>
          </div><label>月</label>
          <div class="select">
            <select v-model="selectedDay">
              <option v-for="day in maxDay" :value="day" v-bind:key="day">{{ day }}</option>
            </select>
          </div><label>日</label>
        </div>
      </div>
    </div>
    <TransButton next="Question" back=""/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TransButton from '@/components/TransButton.vue'

export default {
  data: () => {
    return {
      selectedGender: '',
      selectedYear: 2018,
      selectedMonth: 1,
      selectedDay: 1,
      maxDay: '',
      yearOptions: [],
      era: {
        reiwa: 2018,
        heisei: 1988,
        showa: 1925
      }
    };
  },
  components: {
    Header,
    TransButton
  },
  created() {
    this.getMaxDay();
    this.createYearOptions();
  },
  methods: {
    // 最大日数を取得
    getMaxDay() {
      // 年、月どちらかが変更された場合、必ず1日に戻す
      this.selectedDay = 1;
      this.maxDay = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
    },

    // 年の選択肢を取得
    createYearOptions() {
      for(let i = 1980; i < 2025; i++ ) {
        switch (true) {
          case i > this.era.reiwa:
            this.yearOptions.push({year: i, text: `${i}年（令和${i - this.era.reiwa}）`});
            break;
          case i > this.era.heisei && i <= this.era.reiwa: 
            this.yearOptions.push({year: i, text: `${i}年（平成${i - this.era.heisei}）`});
            break;
          default:
            this.yearOptions.push({year: i, text: `${i}年（昭和${i - this.era.showa}）`});
            break;
        }
      }
    }
  }
}
</script>

<style>
.divSelect {
  padding-top: 0.8rem;
}
</style>
