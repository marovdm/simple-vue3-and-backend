<script setup lang="ts">
  import useApi from '@/composables/useApi';
  import useApiRequest from '@/composables/useApiRequest';
  import Post from '@/components/Post.vue';

  const props = defineProps<{
    userId: string
  }>();

  const posts = useApiRequest(() => useApi().posts.getUserPostsById(props.userId));
</script>
 
<template>
  <AppLink name="home">Back to HomePage</AppLink>
  <div v-if="posts.pending">
		Loading...
	</div>
  <div v-if="posts.success">
    <div>User(id = {{ userId }}) posts:</div>
    <div class="row">
      <Post v-for="post in posts.data" :post="post" :key="post.id" class="col-3"/>
    </div>
  </div>
</template>