<template>
  <div class="container has-background-primary-light divHeader">
    <h1>{{ msg }}</h1>
    <div class="has-background-info step">STEP{{ index }}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
    index: String
  }
}
</script>

<style>
.divHeader {
  border-bottom: 0.5px solid;
  border-color: #00d1b2;
  border-radius: 4px 4px 0 0;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.step {
  color: white;
  width: 100px;
  border-radius: 4px;
  position:absolute; 
  top:0px; 
  left:0px;
}
</style>
