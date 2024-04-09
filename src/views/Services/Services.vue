<template>
  <NavBarComp></NavBarComp>
  <h2 class="header">{{ t("repairs.repairs") }}</h2>
  <div class="container">
    <h2>{{ t("repairs.functioning") }}</h2>
    <p>{{ t("dummyText") }}</p>
    <p>{{ t("dummyText") }}</p>
  </div>
  <hr />
  <div class="accordion">
    <Accordion :activeIndex="activeIndex" @tabChange="onTabChange">
      <AccordionTab>
        <template #headericon>
          <p class="accordion-header">{{ t("repairs.prices") }}</p>
        </template>
        <div>
          <p class="sub-header">{{ t("repairs.repairs") }}</p>
          <ul class="price-list">
            <li>{{ t("repairs.diagnostics") }}</li>
            <li>{{ t("repairs.act") }}</li>
            <li>{{ t("repairs.actSwed") }}</li>
            <li>{{ t("repairs.software") }}</li>
            <li>{{ t("repairs.data") }}</li>
            <li>{{ t("repairs.dataTransfer") }}</li>
            <li>{{ t("repairs.rentMac") }}</li>
            <li>{{ t("repairs.rentIphone") }}</li>
            <li>{{ t("repairs.macService") }}</li>
            <li>{{ t("repairs.imacService") }}</li>
          </ul>
          <p class="sub-header">{{ t("repairs.repairParts") }}</p>
          <ul class="price-list">
            <li>{{ t("repairs.iphoneBatterySE") }}</li>
            <li>{{ t("repairs.iphoneBatteryX") }}</li>
            <li>{{ t("repairs.iphoneScreenSE") }}</li>
            <li>{{ t("repairs.iphoneScreenXR") }}</li>
            <li>{{ t("repairs.iphoneScreenXSeries") }}</li>
            <li>{{ t("repairs.iphoneScreenMini") }}</li>
            <li>{{ t("repairs.iphoneScreenMax") }}</li>
            <li>{{ t("repairs.iphoneScreenMaxPro") }}</li>
            <li>{{ t("repairs.lostAirPodsProCase") }}</li>
            <li>{{ t("repairs.lostAirPodsProEarbuds") }}</li>
            <li>{{ t("repairs.lostWirelessAirPodsCase") }}</li>
            <li>{{ t("repairs.lostAirPodsCase") }}</li>
            <li>{{ t("repairs.lostAirPodsEarbuds") }}</li>
          </ul>
        </div>
      </AccordionTab>
    </Accordion>
    <hr />
    <Accordion :activeIndex="activeIndex" @tabChange="onTabChange">
      <AccordionTab>
        <template #headericon>
          <p class="accordion-header">
            <p>{{ t("repairs.exchange_broken_device") }}</p>
          </p>
        </template>
        <div>
          <p>
            {{ t("repairs.exchange_offer") }}
          </p>
          <ul class="price-list">
            <li>
              <ul class="price-list">
                <li>{{ t("repairs.exchange_prices.iPhone_6_6S") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_6Plus_6SPlus") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_7") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_7Plus") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_SE_2020") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_SE_2022") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_8") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_8Plus") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_XR_11_12Mini_13Mini") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_12_13") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_X_XS_11Pro_12Pro_13Pro") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_XSMax_11ProMax_12ProMax_14_15Plus") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_14_15") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_14Pro_15Pro") }}</li>
                <li>{{ t("repairs.exchange_prices.iPhone_14ProMax_15ProMax") }}</li>
                </ul>
            </li>
          </ul>
          <span>
            <strong>{{ t("repairs.icloud_lock_message") }}</strong></span
          >
        </div>
      </AccordionTab>
    </Accordion>
  </div>
  <hr />
  <FooterComp />
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavBarComp from "@/components/NavBarComp.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import FooterComp from "@/components/FooterComp.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
let activeIndex = ref(null);

const onTabChange = (e) => {
  activeIndex.value = e.index;
};
</script>

<style scoped>
hr {
  border: none;
  border-top: 1px solid #ccc;
}
.header {
  font-size: 40px;
  justify-content: center;
  padding-left: 80px;
}
.container {
  padding-left: 80px;
}
.accordion-header {
  font-size: 32px;
  font-weight: bold;
}
.sub-header {
  font-size: 24px;
  font-weight: bold;
}
.price-list {
  list-style: none;
}
.accordion {
  padding-left: 80px;
}
</style>
