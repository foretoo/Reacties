import { useState, useEffect, useRef } from "preact/hooks"

const useDynamicImport = (
  name = "" || [""],
  upload = () => {},
) => {

  const initState = {
    isLoading: false,
    module:    null,
    error:     null,
  }
  const [ state, setState ] = useState(initState)

  useEffect(() => {
    let isMounted = true
    setState((state) => ({ ...state, isLoading: true }))

    upload()
      .then((data) => {
        if (Array.isArray(name)) {
          const result = []
          for (let key of name) result[key] = data[key]
          return result
        }
        else return data[name] ? data[name] : data.default
      })
      .then((module) => {
        isMounted && setState((prev) => ({ ...prev, module, error: null }))
      })
      .catch((error) => {
        isMounted && setState((prev) => ({ ...prev, error, component: null }))
      })
      .finally(() => {
        isMounted && setState((prev) => ({ ...prev, isLoading: false }))
      })

    return () => (isMounted = false)
  }, [ name ])

  return state
}

export default useDynamicImport
