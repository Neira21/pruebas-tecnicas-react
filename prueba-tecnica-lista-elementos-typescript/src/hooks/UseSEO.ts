import { useEffect } from "react"

export function UseSEO (
  { title, description} :
  { title: string, description: string}
) {
  useEffect(() => {
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])
}

export default UseSEO