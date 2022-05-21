import axios from "axios"

const getCoordinates = async(url) => {
  
  const resp = await axios( url )
  const { data: {data} } = resp

  const result = {
    lat: data[0].latitude,
    lng: data[0].longitude,
  }

  return result
}

export default getCoordinates