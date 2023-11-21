<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ title }}</p>
    <p>{{ content }}</p>
<slot>
  
</slot>
  </div>
</template>

<script lang="ts">
export default{
  data(){
    return{
      title:'this is title',
      content:'this is content'
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
