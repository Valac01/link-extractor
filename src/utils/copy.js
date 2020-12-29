export const copy = async (link) => {
  if(navigator) {
    try {
      await navigator.clipboard.writeText(link)
    } catch (error) {
      console.error(error)
    }
  }
  else {
    console.error('Copy to clipboard is not available in your device')
  }
}

export const copyAll = async (links) => {
  if(navigator) {
    try {
      let allLinksText = ''
      links.forEach(link => {
        allLinksText += link.link + '\n'
      });
      await navigator.clipboard.writeText(allLinksText)
    }
    catch (error) {
      console.error(error)
    }
  }
}