<template>
  <div class="card-container">
    <h2 style="display: flex; justify-content: center; align-items: center">
      {{ t("card.whyUs") }}
    </h2>
    <div class="cards">
      <div class="card">
        <Card>
          <template #title> {{ t("card.quality") }}</template>
          <template #content>
            <p class="m-0" style="max-width: 200px">
              {{ t("card.qualityText") }}
            </p>
          </template>
        </Card>
      </div>
      <div class="card">
        <Card>
          <template #title>{{ t("card.service") }}</template>
          <template #content>
            <p class="m-0" style="max-width: 200px">
              {{ t("card.serviceText") }}
            </p>
          </template>
        </Card>
      </div>
      <div class="card">
        <Card>
          <template #title>{{ t("card.delivery") }}</template>
          <template #content>
            <p class="m-0" style="max-width: 200px">
              {{ t("card.deliveryText") }}
            </p>
          </template>
        </Card>
      </div>
      <div class="card">
        <Card>
          <template #title>{{ t("card.selection") }} </template>
          <template #content>
            <p class="m-0" style="max-width: 200px">
              {{ t("card.selectionText") }}
            </p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Card from "primevue/card";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  border-radius: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0);
  padding: 1rem;
  width: 80%; 
  margin: auto;
}
.cards {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
