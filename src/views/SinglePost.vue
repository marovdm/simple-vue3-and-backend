<script setup lang="ts">
  import useApi from '@/composables/useApi';
  import useApiRequest from '@/composables/useApiRequest';
  import Post from '@/components/Post.vue';

  const props = defineProps<{
    id: string
  }>();

  const post = useApiRequest(() => useApi().posts.getPostById(props.id));
</script>
 
<template>
  <AppLink name="home">Back to HomePage</AppLink>
  <div v-if="post.pending">
		Loading...
	</div>
  <div v-if="post.success">
    <Post :post="post.data" />
  </div>
</template>