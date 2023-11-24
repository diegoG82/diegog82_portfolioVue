<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <!-- <h1 class="text-white">
    sono header
  </h1> -->

  <div class="container mx-auto mt-20">
    <h1 class="font-mono text-6xl font-black text-[#1B3D3F]">Hi,I'm Diego</h1>
    <p class="mt-4 font-black text-[#1B3D3F] font mono text-1xl">
      Web Developer, Tech Addicted & Japan lover
    </p>
    <p class="flex justify-end text-white">
      Available to work
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-[#1B3D3F]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </p>
  </div>
</template>
