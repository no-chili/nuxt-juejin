/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  // 返回一个函数，透明度为可选参数，这样在 HTML 元素中使用颜色基础类时，既可以采用 text-blue-500 方式，也支持 text-blue-500/20 快捷同时设置透明度的形式
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgba(var(${variable}), ${opacityValue})`
  }
}
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      // 设置字体颜色基础类
      textColor: {
        highlight: withOpacityValue('--color-highlight'),
        main: withOpacityValue('--color-text-main'),
        muted: withOpacityValue('--color-text-muted'),
        invert: withOpacityValue('--color-text-invert'),
      },
      // 设置背景颜色基础类
      // 其中 base 基础类是用于设置网页背景色，nav 基础类用于设置导航栏背景色
      // 其他的基础类是用于设置元素的填充背景色
      backgroundColor: {
        highlight: withOpacityValue('--color-highlight'),
        base: withOpacityValue('--color-bg-base'),
        nav: withOpacityValue('--color-bg-nav'),
        tab: withOpacityValue('--color-bg-tab'),
        main: withOpacityValue('--color-fill-main'),
        muted: withOpacityValue('--color-fill-muted'),
      },
      // 设置渐变颜色基础类
      gradientColorStops: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置表单外框阴影颜色基础类
      ringColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置卡片阴影颜色基础类
      boxShadowColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置边框颜色基础类
      borderColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置光标颜色基础类
      caretColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
      // 设置表单强调色基础类
      accentColor: {
        highlight: withOpacityValue('--color-highlight'),
      },
    },
    fontSize: {
      'xs': '.075rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '802px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
  variants: {
    extend: {
      padding: ['hover'],
    }
  },
}
