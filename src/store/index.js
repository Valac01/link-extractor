import { writable } from 'svelte/store'

export const DarkModeStatus = writable(false)

export const Links = writable([])

export const HtmlContent = writable('')