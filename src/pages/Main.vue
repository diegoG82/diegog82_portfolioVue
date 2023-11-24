<script>
export default {
  name: "Main",
};
</script>

<template>
  <div class="flex">
    <div class="container w-2/4 h-[40rem] overflow-scroll ml-6 p-2">
      <h2 class="mt-10 mb-4 font-mono text-8xl">About Me:</h2>
      <p class="mb-4 font-mono text-4xl text-white">
        I have always been passionate about Tech, and I have decided to turn my
        passion into a career by becoming a web developer, In addition I am
        enthusiastic about Manga, Anime, and Video Games, and i absolutely love
        Japan which fuel my creativity and inspire me to create engaging and
        innovative digital experiences.
      </p>
    </div>
    <div class="container h-[40rem] flex w-2/4 p-4">
      <img class="ml-2" src="../img/jap.jpg" alt="" />
    </div>
  </div>
</template>

<style>
.overflow-scroll::-webkit-scrollbar {
  display: none;
}
</style>
