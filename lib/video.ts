export const convertVideoUrl = (url: string): string => {
  if (!url) return ""
  if (url.includes("vimeo.com")) {
    return `https://player.vimeo.com/video/${url.split("vimeo.com/")[1].split("?")[0]}`
  }
  let id = ""
  if (url.includes("/shorts/")) id = url.split("/shorts/")[1].split("?")[0]
  else if (url.includes("watch?v=")) id = url.split("watch?v=")[1].split("&")[0]
  else if (url.includes("youtu.be/")) id = url.split("youtu.be/")[1].split("?")[0]
  else if (url.includes("/embed/")) return url
  return id ? `https://www.youtube.com/embed/${id}` : url
}
