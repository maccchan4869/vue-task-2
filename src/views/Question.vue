<template>
  <div class="question">
    <div class="container divCommon">
      <Header msg="以下にお答えください" index="2"/>
      <div class="separate">
        <p class="has-text-info">現在、生命保険に加入されていますか？</p>
        <div class="columns is-vcentered divAns divRadio">
          <input type="radio" value="0" v-model="insurance" @change="commitInsurance">
          <label>はい</label>
          <input type="radio" value="1" v-model="insurance" @change="commitInsurance">
          <label>いいえ</label>
        </div>
      </div>
      <div class="separate" v-if="this.insurance">
        <p class="has-text-info">現在入院中ですか？または、３ヶ月以内に医師の診察・検査の結果、入院・手術を進められたことはありますか？</p>
        <div class="columns is-vcentered divAns divRadio">
          <input type="radio" value="0" v-model="hospital" @change="commitHospital">
          <label>はい</label>
          <input type="radio" value="1" v-model="hospital" @change="commitHospital">
          <label>いいえ</label>
        </div>
      </div>
      <div class="separate" v-if="this.hospital">
        <p class="has-text-info">過去５年以内に、病気や怪我で手術を受けたことまたは継続して７日以上の入院をしたことがありますか？</p>
        <div class="columns is-vcentered divAns divRadio">
          <input type="radio" value="0" v-model="surgery" @change="commitSurgery">
          <label>はい</label>
          <input type="radio" value="1" v-model="surgery" @change="commitSurgery">
          <label>いいえ</label>
        </div>
      </div>
    </div>
    <TransButton next="Consultation" back="/" nextText="次へ進む ＞"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TransButton from '@/components/TransButton.vue'

export default {
  data: () => {
    return {
      insurance: '',
      hospital: '',
      surgery: ''
    };
  },
  created() {
    this.insurance = this.$store.state.insurance;
    this.hospital = this.$store.state.hospital;
    this.surgery = this.$store.state.surgery;
  },
  components: {
    Header,
    TransButton
  },
  methods: {
    commitInsurance() {
      this.$store.commit('commitInsurance', this.insurance);
    },
    commitHospital() {
      this.$store.commit('commitHospital', this.hospital);
    },
    commitSurgery() {
      this.$store.commit('commitSurgery', this.surgery);
    },
  }
}
</script>

<style>
.divRadio {
  padding-left: 1.5rem;
}
</style>
