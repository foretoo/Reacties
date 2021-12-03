import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

const useDynamicImport = (name = '', callback = () => {}) => {

  const [ component, setComponent ] = useState(null)
  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    await callback()
      .then(module => module.default ? module.default : module[name])
      .then(module => setComponent( () => module ))
  }

  return component

}

export default useDynamicImport
