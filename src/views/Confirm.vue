<template>
  <div class="Confirm">
    <div class="container divCommon">
      <Header msg="以下の内容をご確認ください" index="4"/>
      <div class="separate">
        <p class="has-text-info">-  性別 -</p>
        <p class="confirmText">{{ getAns.gender }}</p>
      </div>
      <div class="separate">
        <p class="has-text-info">- 生年月日 -</p>
        <p class="confirmText">{{ getAns.birthday }}</p>
      </div>
      <div class="separate">
        <p class="has-text-info">- 現在、生命保険に加入されていますか？ -</p>
        <p class="confirmText">{{ getAns.insurance }}</p>
      </div>
      <div class="separate">
        <p class="has-text-info">- 現在入院中ですか？または、３ヶ月以内に医師の診察・検査の結果、入院・手術を進められたことはありますか？ -</p>
        <p class="confirmText">{{ getAns.hospital }}</p>
      </div>
      <div class="separate">
        <p class="has-text-info">- 過去５年以内に、病気や怪我で手術を受けたことまたは継続して７日以上の入院をしたことがありますか？ -</p>
        <p class="confirmText">{{ getAns.surgery }}</p>
      </div>
      <div class="separate">
        <p class="has-text-info">- 相談内容 -</p>
        <p class="confirmText">{{ getAns.consultation }}</p>
      </div>
    </div>
    <TransButton next="Confirm" back="Consultation" nextText="送信 ＞"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TransButton from '@/components/TransButton.vue'

export default {
  components: {
    Header,
    TransButton
  },
  computed: {
    getAns() {
      return this.$store.getters.getQuestionAns;
    }
  }
}
</script>

<style>
.confirmText {
  margin-left: 1.5rem;
}
</style>