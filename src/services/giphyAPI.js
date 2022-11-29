import axios from "axios"

export const getGiphy = async (searchParam) => {
  const OPTIONS = {
    params: {
      api_key: "jTAuqirruj85Vtd9DISWXopoSqNOHRUG",
      q: searchParam,
      limit: 20
    }
  }
  try {
    const getItems = await axios.get(
      "https://api.giphy.com/v1/gifs/search",
      OPTIONS
    )

    return getItems.data.data
  } catch (e) {
    console.error("error", e)
  }
}
