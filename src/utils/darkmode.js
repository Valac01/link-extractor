let isDarkmode = false
export const toggleDarkmode = () => {
  if(isDarkmode) {
    // Is in dark mode remove dark class
    document.querySelector('body').classList.remove('dark')
    localStorage.theme = 'light'
  }
  else {
    // Not in dark mode add dark class
    document.querySelector('body').classList.add('dark')
    localStorage.theme = 'dark'
  }

  // Invert the status of darkmode
  isDarkmode = !isDarkmode
}

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.querySelector('body').classList.add('dark')
  isDarkmode = true
}
else {
  document.querySelector('body').classList.remove('dark')
  isDarkmode = false
}