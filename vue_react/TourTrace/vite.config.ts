import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 预先加载UI 组件库，在编译阶段自动分析代码，并根据需要动态地引入所需的组件，不需要手动去 import（导入）该组件
import Components from 'unplugin-vue-components/vite'
// 引入 vant 组件库 会在 编译阶段 自动按需引入组件（告诉 unplugin-vue-components 如何识别和处理 Vant 中的组件）
import { VantResolver} from '@vant/auto-import-resolver'
// 例如：
// 当你在 Vue 组件中使用 Vant 的 <van-button>，你无需手动编写 import { Button } from 'vant'。
// 插件会在编译阶段自动检测到 <van-button> 并按需引入对应的 Vant 组件代码。


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        VantResolver()
      ]
    }),
  ],
})
