export function useTheme() {
  const themeList = ['light', 'dark']
  const currentTheme = ref<string>(themeList[0])
  let index = 0
  function changeTheme() {
    const body = document.body
    themeList.forEach((item) => {
      body.classList.remove(item + '-theme')
    })
    index++
    const theme = themeList[index % themeList.length]
    currentTheme.value = theme
    body.classList.add(theme + '-theme')
  }
  return {
    currentTheme,
    changeTheme,
  }
}
