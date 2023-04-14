import { useState } from 'react'

type TuseBoolean = [boolean, () => void]

export const useBoolean = (initialValue = false): TuseBoolean => {
  const [value, setValue] = useState<boolean>(initialValue)

  function callback() {
    setValue(!value)
  }
  return [value, callback]
}
