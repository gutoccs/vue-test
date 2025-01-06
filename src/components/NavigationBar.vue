<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View Sidebar</span>
            <Bars3BottomLeftIcon v-if="isMobile && !open" class="size-7" aria-hidden="true" />
            <Bars3BottomRightIcon v-if="!isMobile && !open" class="size-7" aria-hidden="true" />
            <XMarkIcon v-if="open" class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <span class="text-3xl sm:text-4xl text-lilac-light">
              <span class="font-normal sm:font-semibold">TEST</span>FLIX
            </span>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <a href="#" class="inline-flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                <ArrowRightCircleIcon class="w-5 h-5 mr-2 text-purple-300" aria-hidden="true" />
                AGREGAR PELÍCULA
              </a>
            </div>
          </div>

          <DisclosureButton type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hidden sm:block">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View Sidebar</span>
            <Bars3BottomLeftIcon v-if="isMobile && !open" class="size-7" aria-hidden="true" />
            <Bars3BottomRightIcon v-if="!isMobile && !open" class="size-7" aria-hidden="true" />
            <XMarkIcon v-if="open" class="block size-6" aria-hidden="true" />
          </DisclosureButton>

          <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hidden sm:block">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon class="size-7" aria-hidden="true" />
            <div v-if="hasNotifications" class="absolute top-2 right-2 w-2 h-2 rounded-full bg-lilac-light border border-white"></div>
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
  import { computed , ref, onMounted, onUnmounted } from 'vue';
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { ArrowRightCircleIcon, BellIcon, XMarkIcon, Bars3BottomRightIcon, Bars3BottomLeftIcon} from '@heroicons/vue/24/outline'

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  const hasNotifications = true;
  const windowWidth = ref(window.innerWidth);
  const isMobile = computed(() => windowWidth.value < 640);

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

</script>
