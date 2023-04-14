import { Button, RadioInput } from 'devpj-reactc'
function App() {
  return (
    <div className='container mx-auto flex h-screen flex-col items-center justify-center'>
      <Button label='Submit' />
      <RadioInput id='name' name='id' />
    </div>
  )
}
export default App
