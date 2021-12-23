import { useRef } from 'preact/hooks'

const useVar = any => {
  const ref = useRef(any)
  return ref.current
}

export default useVar
