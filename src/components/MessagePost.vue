<template>
  <div class="post">
    <div class="post-header">
      <p>Автор: {{ props.content.authorName }}</p>
      <p>Дата публикации: {{ props.content.date }}</p>
      <a href="{{ props.content.authorUrl }}"> {{ props.content.authorUrl }}</a>
    </div>
    <div class="post-content">
      <p v-html="coloredContent"></p>
    </div>
  </div>
</template>
<script setup>
import { defineProps, onMounted, ref } from "vue";
import { colorContent } from "@/helpers/color_content";
const coloredContent = ref("");
const props = defineProps(["content"]);
onMounted(() => {
  coloredContent.value = colorContent(
    props.content.content,
    props.content.contentPostTones
  );
});
</script>

<style>
.post {
  border: 1px solid lightgray;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  padding: 16px;
}
</style>
