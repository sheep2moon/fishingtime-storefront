

export const titleToHandle = (s: string) => {
    return s.toLowerCase().split(" ").join("-")
  }

export const handleToTitle = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1).split("-").join(" ")
  }