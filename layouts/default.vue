<template>
  <div>
    <main class="main-content">
      <Theader />
      <nuxt/>  
    </main>
    
  </div>
</template>
<script>
  import Theader from '@/components/Theader/Theader'
  export default{
    components: {
      Theader
    }
  }
</script>
<style>
*{
  box-sizing: border-box;
}
body{
  /*font-family: 'Faster One', cursive;*/
  /*font-family: 'Pacifico', cursive;*/
  /*font-family: 'Bungee Outline';*/
  font-family: 'Permanent Marker', cursive;
  font-size: 20px;
}
.main-content{
  margin-top: 4.5rem;
}
</style>
