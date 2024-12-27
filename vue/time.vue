<script setup>
import all from "../generate/all.json";
import { useRouter } from "vitepress";
const router = useRouter();
const goTo = (link) => {
  router.go(link);
};
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.items">
      <div
        @click="goTo(item.link)"
        v-for="item in all"
        :key="item.title"
        :class="$style.item"
      >
        <div :class="$style.latestBox">
          <div :class="$style.box">
            <div :class="$style.titleBox">
              <p :class="$style.title">
                {{ item.title }}({{
                  new Date(item.timestamp).toLocaleDateString()
                }})
              </p>
              <p :class="$style.date">{{ item.categories }}</p>
            </div>
            <p :class="$style.details">{{ item.firstParagraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module>
.container {
  margin: 0px auto;
  max-width: 1152px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
}
.item {
  padding: 8px;
  width: 100%;
}
.item :active {
  border-color: var(--vp-c-brand);
}
.latestBox {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}
.box {
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
}
.titleBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  margin: 0 !important;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}
.details {
  margin: 0 !important;
  flex-grow: 1;
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
</style>
