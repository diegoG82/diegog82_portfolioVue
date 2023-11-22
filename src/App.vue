<script>
import AppHeader from "./components/Appheader.vue";
import NavbarDx from "./components/NavbarDx.vue";
import NavbarSx from "./components/NavbarSx.vue";
</script>

<template>
  <AppHeader />
  <!-- Sezione Cubone principale -->
  <section
    class="container flex flex-row mt-10 mx-auto h-[40rem] space-x-4 overflow-hidden border-2 border-solid"
  >
    <!-- Componente NavbarSx -->
    <NavbarSx />

    <main
      class="overflow-y-scroll text-2xl text-green-700 border-2 border-solid basis-full"
    >
      <router-view></router-view>
    </main>

    <!-- Componente NavbarSx -->
    <NavbarDx />
  </section>
</template>
