/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FC, ChangeEvent, FocusEvent } from 'react'

import { HideRevealEyeIcon } from '../icon/HideRevealEyeIcon'
import { useBoolean } from '../../hooks'
import classNames from 'classnames'

type TInputField = {
  id: string
  name: string
  value: string | number
  label?: string
  type?:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'time'
    | 'file'
  size?: 'small' | 'medium' | 'large'
  title?: string
  className?: string
  autoComplete?: string
  placeholder?: string
  accept?: string
  required?: boolean
  readonly?: boolean
  disabled?: boolean
  floatingLabel?: boolean
  error?: string
  touched?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  onSetData?: (previousState: any) => void
}

export const InputField: FC<TInputField> = ({
  id,
  name,
  type = 'text',
  label,
  className,
  title,
  value,
  size = 'medium',
  autoComplete = 'new-password',
  placeholder = '',
  accept,
  required = false,
  readonly = false,
  disabled = false,
  floatingLabel = false,
  touched = false,
  error,
  onChange,
  onBlur,
  onFocus,
  onSetData,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isToggled, handleToggle] = useBoolean(false)

  const SIZES = {
    small: 'h-[38px]',
    medium: 'h-[48px]',
    large: 'h-[58px]',
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value: inputvalue } = event.target
    onSetData && onSetData((previousState: any) => ({ ...previousState, [name]: inputvalue }))
  }

  function handleInputBlur() {
    setIsFocused(false)
  }
  function handleInputFocus() {
    setIsFocused(true)
  }

  return (
    <>
      <div
        className={`${SIZES[size]} relative  mt-12 select-none shadow-sm dark:bg-appDark dark:text-appWhite`}
      >
        <input
          type={!isToggled ? type : 'text'}
          name={name}
          title={title}
          value={value}
          required={required}
          readOnly={readonly}
          disabled={disabled}
          autoComplete={autoComplete}
          placeholder={!floatingLabel ? placeholder : ''}
          accept={accept}
          onChange={onChange ? onChange : handleInputChange}
          onBlur={onBlur ? onBlur : handleInputBlur}
          onFocus={onFocus ? onFocus : handleInputFocus}
          className={classNames(className, {
            'cursor-not-allowed': disabled,
            'file:h-8 file:text-[0.9rem]': size === 'small',
            'file:h-12 file:text-[1.2rem]': size === 'medium',
            'border-appRed focus:ring-appRed': error && touched,
            'border-appBlack/20 focus:border-none focus:ring-brand dark:border-appWhite/50':
              !error || !touched,
            'block h-full w-full rounded-md border bg-inherit px-4 py-2 text-inherit file:my-1 file:rounded-md file:border-none file:bg-brand file:px-5 file:py-2 file:text-appWhite focus:outline-none focus:ring-1 ':
              true,
          })}
        />
        {floatingLabel ? (
          <label
            className={classNames({
              '-top-[22px]':
                isFocused ||
                value !== '' ||
                type === 'time' ||
                type === 'datetime-local' ||
                type === 'date' ||
                type === 'file',
              'left-3  top-1/2 -translate-y-1/2 dark:text-appWhite/50':
                !isFocused &&
                value === '' &&
                type !== 'time' &&
                type !== 'datetime-local' &&
                type !== 'date' &&
                type !== 'file',
              'pointer-events-none absolute  select-none px-2 text-[1.3rem] capitalize transition-all duration-300 ease-in-out':
                true,
            })}
          >
            {label ? label : id}
          </label>
        ) : (
          <label
            htmlFor={id}
            className={classNames({
              'absolute -top-8 left-1 text-[1.3rem]': true,
            })}
          >
            {label ? label : id}
          </label>
        )}
        {type === 'password' ? (
          <HideRevealEyeIcon isToggled={isToggled} handleToggle={handleToggle} />
        ) : null}
      </div>
      {touched && error && (
        <p className='pt-2 text-[1.2rem] text-appRed first-letter:uppercase'>{error}</p>
      )}
    </>
  )
}
