<template>
    <div class="post-feed">
        <MessagePost v-for="post in posts" :key="post" :content="post" />
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { loadFeed } from '../api/load_feed.js'
import MessagePost from './MessagePost.vue';
const posts = ref([])
const next = ref(10)
onMounted(async () => {
    posts.value = await loadFeed(0, next.value)
})
</script>
<style>
.post-feed {
    max-width: 1280px;
    margin: 0 auto;
}
</style>
