<template>

  <Menu as="div" class="relative ml-3">
    <div>
      <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span class="absolute -inset-1.5" />
        <span class="sr-only">Open user menu</span>
        <img class="size-8 rounded-full" src="https://avatars.githubusercontent.com/u/1091742?v=4" alt="" />
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-700 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
        <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm hover:text-gray-700 text-white']">Ver Perfil</a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm hover:text-gray-700 text-white']">Configuración</a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a href="#" :class="[active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm hover:text-gray-700 text-white']">Cerrar sesión</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>

</template>

<script setup>

  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

</script>
