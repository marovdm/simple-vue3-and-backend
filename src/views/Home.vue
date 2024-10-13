<script lang="ts" setup>

// import useApi from '@/composables/useApi';
// import useApiRequest from '@/composables/useApiRequest';

	// const productReq = useApiRequest(useApi().products.one, 100)

</script>

<template>
	<div>
		<h1>Home page</h1>
		<hr />
		<ul class="list-group">
			<li class="list-group-item">
				<AppLink name="posts.all">Get all posts /posts</AppLink>
			</li>
			<li class="list-group-item">
				<AppLink name="user.posts" :params="{ 'userId': 1 }">Get all user posts (userId=1 e.x.)</AppLink>
			</li>
		</ul>
	</div>
</template>