<script setup lang="ts">
import { TPost } from '@/types/data';

  const props = defineProps<{
    post: TPost
  }>();

  const formattDate = (date: string) => {
    return new Date(date).toLocaleDateString('ru-RU')
  }

</script>

<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ props.post.title }}</h5>
      <p class="card-text">{{  props.post.title }}</p>
      <p class="card-text">Create: {{ formattDate(props.post.createdAt) }}</p>
      <p class="card-text">Update: {{ formattDate(props.post.createdAt) }}</p>
    </div>
  </div>
</template>

