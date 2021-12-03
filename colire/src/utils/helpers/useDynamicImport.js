import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

const useDynamicImport = (name = '', callback = () => {}, props = {}) => {

  const [ component, setComponent ] = useState(null)
  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const Component = await callback().then(module => module.default ? module.default : module[name])
    setComponent(<Component {...props}/>)
  }

  return component
}

export default useDynamicImport
