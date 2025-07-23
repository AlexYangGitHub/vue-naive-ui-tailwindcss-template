<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div :class="['bg-white border-r shadow-md transition-all duration-300', collapsed ? 'w-16' : 'w-64']">
      <div class="flex items-center justify-between p-4">
        <span v-if="!collapsed" class="text-xl font-bold">MyApp</span>
        <button @click="collapsed = !collapsed" class="text-gray-500 hover:text-gray-700">
          <n-icon>
            <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" />
          </n-icon>
        </button>
      </div>

      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :options="menuOptions"
        :value="currentPath"
        @update:value="handleMenuSelect"
      />
    </div>

    <!-- Main content -->
    <div class="flex-1 p-6 overflow-auto">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { h, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NMenu, NIcon } from 'naive-ui'
import {
  HomeOutline,
  SettingsOutline,
  DocumentTextOutline
} from '@vicons/ionicons5'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@vicons/antd'


const router = useRouter()
const route = useRoute()

const collapsed = ref(false)

const currentPath = computed(() => route.path)

const menuOptions = [
  {
    label: 'Home',
    key: '/home',
    icon: renderIcon(HomeOutline)
  },
  {
    label: 'Settings',
    key: '/setting',
    icon: renderIcon(SettingsOutline)
  },
  {
    label: 'About',
    key: '/about',
    icon: renderIcon(DocumentTextOutline)
  }
]

function handleMenuSelect(key) {
  router.push(key)
}

// 工具函式：渲染 icon
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
</script>

<style scoped>
/* 讓 sidebar 固定高度與收合動作更平滑 */
</style>
