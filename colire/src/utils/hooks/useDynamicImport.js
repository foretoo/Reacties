import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

const useDynamicImport = (name = '', upload = () => {}) => {

  const [ component, setComponent ] = useState(null)

  useEffect(() => {
    let isMounted = true
    upload()
      .then(module => module[name] ? module[name] : module.default )
      .then(module => {
        isMounted && setComponent( () => module )
      })
    return () => (isMounted = false)
  }, [ name, upload ])

  return component
}

export default useDynamicImport
