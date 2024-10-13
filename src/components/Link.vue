<script lang="ts" setup>
	import { RoutesMap } from '@/router/routes'
	import { RouteParamsRawGeneric } from 'vue-router'; 

	type LinkProps = {
		name: keyof RoutesMap,
		params?: RouteParamsRawGeneric
	}

	defineProps<LinkProps>();
</script>

<template>
	<RouterLink :to="{ name, params: params }">
		<slot></slot>
	</RouterLink>
</template>
