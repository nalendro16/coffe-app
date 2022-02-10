import { useStore } from '../zustand/Store'
import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  const { respond } = useStore((state) => state)
  const type = respond.map((res) => res.token_type)
  const access = respond.map((res) => res.access_token)

  useEffect(() => {
    const fetchData = async () => {
      setPending(true)
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: type + ' ' + access,
          },
        })
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()
        setPending(false)
        setError(null)
        setData(data)
      } catch (err) {
        setError(`Couldn't fetch the data please login`)
      }
    }
    // return () => {
    //   cleanup
    // }
    fetchData()
  }, [])
  return { pending, error, data }
}
