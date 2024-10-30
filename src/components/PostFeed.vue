<template>
  <div class="post-feed">
    <MessagePost v-for="post in posts" :key="post" :content="post" />
    <div id="load-more" :class="loadMoreStatus"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { loadFeed } from "../api/load_feed.js";
import MessagePost from "./MessagePost.vue";
import { LoadMoreStatus } from "@/models/LoadMoreStatus.js";
const posts = ref([]);
const next = ref(10);
const loadMoreStatus = ref(LoadMoreStatus.IDLE);

onMounted(async () => {
  posts.value = await loadFeed(0, next.value);
  window.addEventListener("scroll", async () => {
    if (
      loadMoreStatus.value == LoadMoreStatus.LOADING ||
      loadMoreStatus.value == LoadMoreStatus.FINISHED
    )
      return;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      loadMoreStatus.value = LoadMoreStatus.LOADING;
      // Создаем искусственную задержку
      await new Promise((res) => setTimeout(res, 500));
      let isFinished = await loadMore();
      if (isFinished) {
        loadMoreStatus.value = LoadMoreStatus.FINISHED;
        return;
      }
      loadMoreStatus.value = LoadMoreStatus.IDLE;
    }
  });
});

async function loadMore() {
  let prev = next.value;
  next.value += 10;
  let result = await loadFeed(prev, next.value);
  if (result.length == 0) {
    return true;
  } else posts.value = posts.value.concat(result);
  return false;
}
</script>
<style>
.post-feed {
  max-width: 1280px;
  margin: 0 auto;
}
#load-more {
  text-align: center;
  padding: 16px;
  margin-bottom: 4rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}
#load-more.idle::before {
  display: none;
}
#load-more.loading::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border: solid 2px #4cc;
  animation: spin 0.25s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
#load-more.finished::before {
  content: "Посты закончились";
}
</style>
