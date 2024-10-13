import { RouteRecordRaw } from "vue-router";

import HomePage from '@/views/Home.vue'
import AllPosts from "@/views/AllPosts.vue";
import SinglePost from "@/views/SinglePost.vue";
import UserPosts from "@/views/UserPosts.vue";

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/posts',
		name: 'posts.all',
		component: AllPosts
	},
	{
		path: '/posts/:id', 
		name: 'posts.once',
		component: SinglePost,
		props: true,
	},
	{
		path: '/users/:userId/posts', 
		name: 'user.posts',
		component: UserPosts,
		props: true,
	}
] as const satisfies RouteRecordRaw[];

export default routes;

export type TRoutes = typeof routes;

export type RoutesMap = {
	[ K in TRoutes[number] as K['name']]: K['path']
}