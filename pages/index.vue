<template>
  <section id="posts">
   <PostPreview
   v-for="post in posts"
   :key="post.id"
   :title="post.title"
   :excerpt="post.text"
   :thumbnailImage="post.thumbnailUrl"
   :id="post.id"
   /> 
  </section>
</template>

<script>

import PostPreview from '@/components/Blog/PostPreview'
export default {
  components: {
      PostPreview
    },
  data() {
    
    return {
      posts: [
        {
          title: 'Hong10',
          text: 'Hong10 is the best bboy in bc one all stars',
          id: 'bboyhong10',
          thumbnailUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521997330976&di=b7d04dab185131aef85077eb69c365b2&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3D4ebb20cab1de9c82a665f9875c8380d2%2Fd16cc8ea15ce36d309da47c338f33a87eb50b145.jpg'
        },
        {
          title: 'Wing',
          text: 'Wing is the better bboy in bc one all stars',
          id: 'bboy-hong10',
          thumbnailUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2380434714,1936652607&fm=27&gp=0.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
  #posts{
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
