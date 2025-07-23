<template>
    <div class="w-64 h-full bg-white dark:bg-gray-900 text-black dark:text-white border-r">
      <n-menu
        :options="menuOptions"
        :value="route.path"
        @update:value="onSelect"
        :root-indent="18"
        :indent="24"
        accordion
      />
    </div>
  </template>
  
  <script setup>
  import { h, computed } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { NMenu, NIcon } from 'naive-ui'
  import {
    HomeOutline,
    PeopleOutline,
    SettingsOutline,
    HelpCircleOutline
  } from '@vicons/ionicons5'
  
  const props = defineProps({
    collapsed: Boolean
  })
  const emit = defineEmits(['update:collapsed'])
  
  const router = useRouter()
  const route = useRoute()
  
  const renderIcon = (icon) => () =>
    h(NIcon, null, {
      default: () => h(icon)
    })
  
  const menuOptions = computed(() => [
    {
      type: 'group',
      label: 'Main',
      key: 'main',
      children: [
        {
          label: 'Dashboard',
          key: '/dashboard',
          icon: renderIcon(HomeOutline)
        },
        {
          label: 'Users',
          key: '/users',
          icon: renderIcon(PeopleOutline)
        }
      ]
    },
    {
      type: 'group',
      label: 'Settings',
      key: 'settings',
      children: [
        {
          label: 'System Settings',
          key: '/settings',
          icon: renderIcon(SettingsOutline)
        },
        {
          label: 'Help',
          key: '/help',
          icon: renderIcon(HelpCircleOutline)
        }
      ]
    }
  ])
  
  const onSelect = (key) => {
    router.push(key)
    emit('update:collapsed', true) // 📱 hide sidebar on mobile
  }
  </script>
  