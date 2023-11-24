<script>
export default {
  name: "NavbarSx",
};
</script>

<template>
  <div
    class="flex flex-col justify-center gap-10 text-green-700 align-middle basis-10 border-2 border-[#629b92] rounded"
  >
    <a class="text-green-700" href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-10 p-2"
        data-tooltip-target="tooltip-left-1"
        data-tooltip-placement="left"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
    </a>
    <div
      id="tooltip-left-1"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-[#273b38] bg-[#629b92] rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      About
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <a href="/Skills"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-10 p-2"
        data-tooltip-target="tooltip-left-2"
        data-tooltip-placement="left"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    </a>
    <div
      id="tooltip-left-2"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-[#273b38] bg-[#629b92] rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      Skills
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <a href=""
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-10 p-2"
        data-tooltip-target="tooltip-left-3"
        data-tooltip-placement="left"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
      </svg>
    </a>
    <div
      id="tooltip-left-3"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-[#273b38] bg-[#629b92] rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      Works
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    <a class="text-green-700" href="/Mail">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-12 h-10 p-2"
        data-tooltip-target="tooltip-left-4"
        data-tooltip-placement="left"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    </a>
    <div
      id="tooltip-left-4"
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-[#273b38] bg-[#629b92] rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      Contact
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>
