module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 390, // 设计稿的视窗宽度。
      viewportHeight: 667, // 设计稿的视窗高度，可以不配置
      unitPrecision: 5, // 转换后的小数位数
      viewportUnit: "vw", // 转换后使用的视窗单位
      selectorBlackList: [/^ignore-/], // 不转换的类名列表
      minPixelValue: 1, // 最小不转换的像素值
      mediaQuery: false, // 是否在媒体查询中转换px
      exclude: [/node_modules/], // 排除的文件，例如 /node_modules/
    },
  },
};
