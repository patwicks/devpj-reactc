/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ChangeEvent } from 'react'

type IRadioInput = {
  id: string
  name: string
  value?: string
  title?: string
  label?: string
  type?: 'radio'
  required?: boolean
  disabled?: boolean
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onSetData?: (previousState: any) => void
}

export const RadioInput: FC<IRadioInput> = ({
  id,
  name,
  title,
  value,
  label,
  type = 'radio',
  checked,
  onChange,
  onSetData,
}) => {
  function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value: inputvalue } = event.target
    onSetData && onSetData((previousState: any) => ({ ...previousState, [name]: inputvalue }))
  }

  return (
    <div className='flex w-fit cursor-pointer select-none flex-wrap items-center space-x-2'>
      <div className='group relative flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-brand/10'>
        <input
          id={id}
          name={name}
          type={type}
          title={title}
          value={value ? value : id}
          checked={checked}
          className='peer absolute bottom-0 left-0 right-0 top-0 appearance-none'
          onChange={onChange ? onChange : handleRadioChange}
        />
        <div className='flex items-center justify-center rounded-full border-2 p-2 transition-all duration-300 ease-in-out group-hover:border-brand peer-checked:border-brand peer-checked:bg-brand'>
          <div className='h-3 w-3 rounded-full bg-appWhite'></div>
        </div>
      </div>
      <label htmlFor={id} className='capitalize dark:text-appWhite'>
        {label ? label : id}
      </label>
    </div>
  )
}
