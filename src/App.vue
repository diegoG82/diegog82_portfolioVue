<script>
import AppHeader from "./components/Header.vue";
import NavbarDx from "./components/NavbarDx.vue";
import NavbarSx from "./components/NavbarSx.vue";
import { onMounted } from "vue";
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
});

export default {
  components: {
    AppHeader,
    NavbarDx,
    NavbarSx,
  },
};
</script>

<template>
  <AppHeader />
  <!-- Sezione Cubone principale -->
  <section class="container flex flex-row mt-10 mx-auto h-[40rem] space-x-4">
    <!-- Componente NavbarSx -->
    <NavbarSx />

    <main
      class="text-2xl text-green-700 border-2 border-[#629b92] rounded basis-full"
    >
      <router-view></router-view>
    </main>

    <!-- Componente NavbarSx -->
    <NavbarDx />
  </section>
</template>
