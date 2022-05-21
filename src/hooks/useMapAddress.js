import { useEffect, useState } from "react"
import getCoordinates from "../utils/getCoordinates"


const useMapAddress = (address, setIsLoading) => {

  const [ coordinates, setCoordinates ] = useState({})

  const API = 'http://api.positionstack.com/v1/forward'
  const apiKey = `?access_key=${process.env.POSITIONTRACK_API_KEY}`
  const query = `&query=${encodeURI(address)}`
  const url = API + apiKey + query

  useEffect(() => {
    getCoordinates(url)
      .then(resp => setCoordinates(resp), setIsLoading(false))
  }, [])

  return coordinates
}

export default useMapAddress