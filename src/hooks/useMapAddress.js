import { useEffect, useState } from "react"
import getCoordinates from "../utils/getCoordinates"


const useMapAddress = (address, setIsLoading) => {

  const [ coordinates, setCoordinates ] = useState({})

  const API = 'http://api.positionstack.com/v1/forward'
  const apiKey = `?access_key=19a9f027c2e07aba1c6e03d1dd4bc276`
  const query = `&query=${encodeURI(address)}`
  const url = API + apiKey + query

  useEffect(() => {
    getCoordinates(url)
      .then(resp => setCoordinates(resp), setIsLoading(false))
  }, [])

  return coordinates
}

export default useMapAddress