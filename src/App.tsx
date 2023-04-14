import { ChangeEvent, useState } from 'react'
import { InputField } from 'devpj-reactc'

function App() {
  const [val, setVal] = useState<string>('')
  return (
    <div className='container mx-auto flex h-screen flex-col items-center justify-center'>
      Dev Pat
      <InputField
        id='name'
        name='id'
        type='password'
        label='label'
        value={val}
        floatingLabel
        onChange={(e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
      />
    </div>
  )
}
export default App
