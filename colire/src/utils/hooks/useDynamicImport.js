import { useState, useEffect, useRef } from 'preact/hooks'

const useDynamicImport = (name = '', upload = () => null) => {

  const uploadRef = useRef(upload)
  useEffect(() => {
    uploadRef.current = upload
  }, [ upload ])

  const initState = {
    isLoading: false,
    module: null,
    error: null
  }
  const [ state, setState ] = useState(initState)

  useEffect(() => {
    let isMounted = true
    setState(state => {
      return { ...state, isLoading: true }
    })

    upload().then(data => data[name] ? data[name] : data.default)
      .then(module => {
        isMounted && setState(state => {
          return { ...state, module, error: null }
        })
      })
      .catch(error => {
        isMounted && setState(state => {
          return { ...state, error, component: null }
        })
      })
      .finally(() => {
        isMounted && setState(state => {
          return { ...state, isLoading: false }
        })
      })

    return () => (isMounted = false)
  }, [ name ])

  return state
}

export default useDynamicImport
