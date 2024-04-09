<template>
  <h2 style="display: flex; justify-content: center; align-items: center">
    {{ t("home.homeHeader") }}
  </h2>
  <div class="card-container">
    <div class="card">
      <Card>
        <template #content>
          <img
            src="/img/products/apple/iphone/iphone-titanium.png"
            style="width: 200px; height: 200px"
          />
          <a
            href="/iphone"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <p class="m-0" style="max-width: 200px">{{ t("home.iphone") }}</p>
          </a>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #content>
          <img
            src="/img/products/apple/airpods/airpods.png"
            alt="Telefonid"
            style="width: 200px; height: 200px"
          />
          <a
            href="/airpods"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <p class="m-0" style="max-width: 200px">
              {{ t("home.headphones") }}
            </p>
          </a>
        </template>
      </Card>
    </div>
    <div class="card">
      <Card>
        <template #content>
          <img
            src="/img/products/apple/mac/mac-black.png"
            alt="Telefonid"
            style="width: 200px; height: 200px"
          />
          <a
            href="/mac"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <p class="m-0" style="max-width: 200px">{{ t("home.mac") }}</p>
          </a>
        </template>
      </Card>
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
  justify-content: center;
}
.card {
  display: flex;
  gap: 1rem;
}
</style>
