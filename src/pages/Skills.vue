<template>
  <div class="p-6">
    <h2 class="mt-2 mb-8 font-mono text-6xl">Stacks:</h2>
    <p class="mb-4 font-mono text-3xl text-white">Frontend:</p>
    <div class="flex flex-wrap gap-10">
      <img
        data-tooltip-target="tooltip-top-1"
        data-tooltip-placement="top"
        class="object-contain w-12 h-12"
        src="../img/html.png"
        alt="html"
      />
      <div
        id="tooltip-top-1"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Html
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <img
        data-tooltip-target="tooltip-top-2"
        data-tooltip-placement="top"
        class="object-contain w-12 h-12"
        src="../img/css.png"
        alt="html"
      />
      <div
        id="tooltip-top-2"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        CSS
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <img
        data-tooltip-target="tooltip-top-3"
        data-tooltip-placement="top"
        class="object-contain w-12 h-12"
        src="../img/tailwind.png"
        alt="html"
      />
      <div
        id="tooltip-top-3"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tailwind CSS
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <img
        data-tooltip-target="tooltip-top-4"
        data-tooltip-placement="top"
        class="object-contain w-12 h-12"
        src="../img/bootstrap.png"
        alt="html"
      />
      <div
        id="tooltip-top-4"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Bootstrap
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <img
        data-tooltip-target="tooltip-top-5"
        data-tooltip-placement="top"
        class="object-contain w-12 h-12"
        src="../img/js.png"
        alt="html"
      />
      <div
        id="tooltip-top-5"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Javascript
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
    <p class="mt-4 mb-4 font-mono text-3xl text-white">Backend:</p>
    <div class="flex flex-wrap gap-10">
      <img class="object-contain w-12 h-12" src="../img/php.png" alt="html" />
      <img class="object-contain w-12 h-12" src="../img/mysql.png" alt="html" />
      <img class="object-contain w-12 h-12" src="../img/mamp.png" alt="html" />
    </div>

    <p class="mt-4 mb-4 font-mono text-3xl text-white">Frameworks:</p>
    <div class="flex flex-wrap gap-10">
      <img class="object-contain w-12 h-12" src="../img/vuejs.png" alt="html" />
      <img
        class="object-contain w-12 h-12"
        src="../img/laravel.png"
        alt="html"
      />
      <img
        class="object-contain w-12 h-12"
        src="../img/dotnet.png"
        alt="html"
      />
    </div>

    <p class="mt-4 mb-4 font-mono text-3xl text-white">Tools:</p>
    <div class="flex flex-wrap gap-10">
      <img class="object-contain w-12 h-12" src="../img/figma.png" alt="html" />

      <img class="object-contain w-12 h-12" src="../img/vsc.png" alt="html" />
      <img
        class="object-contain w-12 h-12"
        src="../img/vstudio.png"
        alt="html"
      />
      <img class="object-contain w-12 h-12" src="../img/git.png" alt="html" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>
