<template>
  <div class="container">
    <button class="button is-primary transBtn" v-if="this.back !== ''" @click="backPage">＜ 前へ戻る</button>
    <button class="button is-primary transBtn" v-if="this.next !== ''" @click="nextPage">次へ進む ＞</button>
  </div>
</template>

<script>
export default {
  name: 'TransButton',
  props: {
    next: String,
    back: String
  },
  methods: {
    // 次のページへ進む
    nextPage() {
      this.$router.push(this.next);
    },

    // 前のページへ戻る
    backPage() {
      this.$router.push(this.back);
    },
  }
}
</script>

<style>
.transBtn {
  margin: 1rem 0.5rem 0 0.5rem;
}
</style>
