import { v4 as uuidv4 } from 'uuid'

export const extract = () => {
  const Links = []
  const ShadowDivLinks = document.querySelectorAll('#shadow-div a')
  ShadowDivLinks.forEach( link => {
    Links.push(
      {
      id: uuidv4(),
      title: link.textContent,
      link: link.getAttribute('href')
      }
    )
  })
  return Links
}