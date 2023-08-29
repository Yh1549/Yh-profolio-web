<script setup>
import path1 from "../assets/cat-icon.jpg";
import Card from "../components/Card.vue";
import WorkSection from "../components/WorkSection.vue";
</script>
<template>
  <WorkSection>
    <template #title> ffffff </template>
    <template #content>vfefdsgfdsgs</template>
    <template #workItem>
      <Card :imgSrc="path1">
        <template #title>fffff</template>
        <template #content>fffff</template>
      </Card>
      <Card :imgSrc="path1">
        <template #title>fffff</template>
        <template #content>fffff</template>
      </Card>
      <Card :imgSrc="path1">
        <template #title>fffff</template>
        <template #content>fffff</template>
      </Card>
    </template>
  </WorkSection>
  <WorkSection>
    <template #title> ffffff </template>
    <template #content>vfefdsgfdsgs</template>
  </WorkSection>
  <WorkSection>
    <template #title> ffffff </template>
    <template #content>vfefdsgfdsgs</template>
  </WorkSection>
</template>
