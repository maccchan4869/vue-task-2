<template>
  <div class="question">
    <div class="container divCommon">
      <Header msg="以下にお答えください" index="2"/>
      <div class="separate">
        <p class="has-text-info">現在、生命保険に加入されていますか？</p>
        <div class="columns is-vcentered divAns divRadio">
          <input type="radio" value="true" v-model="isInsurance">
          <label>はい</label>
          <input type="radio" value="false" v-model="isInsurance">
          <label>いいえ</label>
        </div>
      </div>
      <div class="separate" v-if="this.isInsurance !== ''">
        <p class="has-text-info">現在入院中ですか？または、３ヶ月以内に医師の診察・検査の結果、入院・手術を進められたことはありますか？</p>
        <div class="columns is-vcentered divAns divRadio">
          <input type="radio" value="true" v-model="isHospitalized">
          <label>はい</label>
          <input type="radio" value="false" v-model="isHospitalized">
          <label>いいえ</label>
        </div>
      </div>
      <div class="separate" v-if="this.isHospitalized !== ''">
        <p class="has-text-info">過去５年以内に、病気や怪我で手術を受けたことまたは継続して７日以上の入院をしたことがありますか？</p>
        <div class="columns is-vcentered divAns divRadio">
          <input type="radio" value="true" v-model="isSurgery">
          <label>はい</label>
          <input type="radio" value="false" v-model="isSurgery">
          <label>いいえ</label>
        </div>
      </div>
    </div>
    <TransButton next="Consultation" back="/"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TransButton from '@/components/TransButton.vue'

export default {
  data: () => {
    return {
      isInsurance: '',
      isHospitalized: '',
      isSurgery: ''
    };
  },
  components: {
    Header,
    TransButton
  }
}
</script>

<style>
.divRadio {
  padding-left: 1.5rem;
}
</style>
