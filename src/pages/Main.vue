<script>
export default {
  name: "Main",
};
</script>

<template>
  <div class="container w-2/4 p-6 h-[40rem] overflow-scroll">
    <h2 class="mb-4 font-mono text-6xl">About Me</h2>
    <p class="font-mono text-white">
      I have always been passionate about Tech, and I have decided to turn my
      passion into a career by becoming a web developer, In addition I am
      enthusiastic about Manga, Anime, and Video Games, which fuel my creativity
      and inspire me to create engaging and innovative digital experiences.
    </p>
    <h2 class="mt-4 mb-4 font-mono text-6xl">Stacks</h2>
    <p class="mb-4 font-mono text-3xl">Frontend</p>
    <div class="flex flex-wrap gap-10">
      <img class="object-contain w-12 h-12" src="../img/html.png" alt="html" />
      <img class="object-contain w-12 h-12" src="../img/css.png" alt="html" />
      <img
        class="object-contain w-12 h-12"
        src="../img/tailwind.png"
        alt="html"
      />
      <img class="object-contain w-12 h-12" src="../img/js.png" alt="html" />
    </div>

    <p class="mt-4 mb-4 font-mono text-3xl">Backend</p>
    <div class="flex flex-wrap gap-10">
      <img class="object-contain w-12 h-12" src="../img/php.png" alt="html" />
      <img class="object-contain w-12 h-12" src="../img/mysql.png" alt="html" />
    </div>

    <p class="mt-4 mb-4 font-mono text-3xl">Frameworks</p>
    <div class="flex flex-wrap gap-10">
      <img class="object-contain w-12 h-12" src="../img/vuejs.png" alt="html" />
      <img
        class="object-contain w-12 h-12"
        src="../img/laravel.png"
        alt="html"
      />
    </div>
  </div>

  <!-- <div class="container flex w-2/4">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit
    veniam? Magni sint consectetur sapiente consequatur expedita voluptate
    consequuntur, nisi dolorem fugit molestiae enim ipsum reprehenderit,
    deserunt sit, modi recusandae quae.
  </div> -->
</template>

<style>
.overflow-scroll::-webkit-scrollbar {
  display: none;
}
</style>
