<template>
    <div class="post">
        <div class="post-header">
            <p>Автор: {{ props.content.authorName }}</p>
            <p>Дата публикации: {{ props.content.date }}</p>
            <a href="{{ props.content.authorUrl }}"> {{ props.content.authorUrl }}</a>
        </div>
        <div class="post-content">
            <p>{{ coloredContent }}</p>
        </div>
    </div>
</template>
<script setup>
import { defineProps, onMounted, ref } from 'vue';
import { colorContent } from '@/api/color_post';
const coloredContent = ref('')
const props = defineProps(['content'])
onMounted(() => {
    coloredContent.value = colorContent(props.content.content, props.content.contentPostTones)
})
</script>

<style>
    .post {
        border: 1px solid grey;
        border-radius: 4px;
        background: rgb(248, 248, 248);
        margin-bottom: 10px;
        padding: 10px;
    }   
</style>