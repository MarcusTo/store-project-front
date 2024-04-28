<template>
  <div>
    <div class="card-container">
      <h2 style="display: flex; justify-content: center; align-items: center">
        {{ t("warranty.service") }}
      </h2>
      <div class="card">
        <Card>
          <template #content>
            <div class="card-content">
              <img src="/img/other/speed-service.png" style="width: 120px; height: 100px" />
              <p class="m-0" style="max-width: 200px; text-align: center;">
                {{ t("warranty.warrantyText") }}
              </p>
            </div>
          </template>
        </Card>
        <Card>
          <template #content>
            <div class="card-content">
              <img src="/img/other/replacement.png" style="width: 100px; height: 100px;" />
              <p class="m-0" style="max-width: 200px; text-align: center;">
                {{ t("warranty.warrantyText1") }}
              </p>
            </div>
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
  width: 55%; 
  margin: auto;
}
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 50%;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
