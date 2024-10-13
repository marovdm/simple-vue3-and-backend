<script setup lang="ts">
  import useApi from '@/composables/useApi';
  import useApiRequest from '@/composables/useApiRequest';

	import { useRouter } from 'vue-router';
	const router = useRouter();

	const posts = useApiRequest(useApi().posts.getPosts);

	const getPostById = (id: number) => {
		router.push({ name: 'posts.once' , params: { id } })
	}

</script>

<template>
  <AppLink name="home">Back to HomePage</AppLink>
	<div v-if="posts.pending">
		Loading...
	</div>
	<div v-if="posts.success">
		<ul class="list-group">
			<li v-for="post in posts.data" class="list-group-item" @click="getPostById(post.id)">
				{{ post.title }}
			</li>
		</ul>
	</div>
</template>