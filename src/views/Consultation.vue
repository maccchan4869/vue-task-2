<template>
  <div class="consultation">
    <div class="container divCommon">
      <Header msg="ご相談内容を入力してください" index="3"/>
      <div class="separate">
        <p class="has-text-info">- 相談内容 -</p>
        <textarea v-model="consultation" class="inputText" @change="commitConsultation"></textarea>
      </div>
    </div>
    <TransButton next="Confirm" back="Question" nextText="次へ進む ＞"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import TransButton from '@/components/TransButton.vue'

export default {
  data: () => {
    return {
      consultation: ''
    };
  },
  created() {
    this.consultation = this.$store.getters.getConsultation;
  },
  components: {
    Header,
    TransButton
  },
  methods: {
    commitConsultation() {
      this.$store.commit('commitConsultation', this.consultation);
    }
  }
}
</script>

<style>
.inputText {
  width: 90%;
  height: 300px;
}
</style>
