<template>
  <div class="consultation">
    <div class="container divCommon">
      <Header msg="ご相談内容を入力してください" index="3"/>
      <div class="separate">
        <p class="has-text-info">- 相談内容 -</p>
        <textarea v-model="consultation" class="inputText"></textarea>
      </div>
    </div>
    <TransButton next="Consultation" back="Question"/>
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
  components: {
    Header,
    TransButton
  },
}
</script>

<style>
.inputText {
  width: 90%;
  height: 300px;
}
</style>
