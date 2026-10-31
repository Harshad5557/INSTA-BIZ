import { useLayoutEffect } from 'react'

export function CustomCursor() {
  useLayoutEffect(() => {
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const root = document.documentElement

    function updateCursorMode() {
      if (pointer.matches) {
        root.dataset.customCursor = 'enabled'
      } else {
        delete root.dataset.customCursor
      }
    }

    updateCursorMode()
    pointer.addEventListener('change', updateCursorMode)

    return () => {
      pointer.removeEventListener('change', updateCursorMode)
      delete root.dataset.customCursor
    }
  }, [])

  return null
}
