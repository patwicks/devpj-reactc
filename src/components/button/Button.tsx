import { FC, ReactElement } from 'react'

type TButton = {
  label: string
  className?: string
  size?: 'small' | 'medium' | 'large'
  type?: 'submit' | 'button'
  iconPosition?: 'left' | 'right'
  fit?: boolean
  disabled?: boolean
  isSubmitting?: boolean
  loaderComponent?: ReactElement
  iconElement?: ReactElement
  onClick?: () => void
}

export const Button: FC<TButton> = ({
  label,
  type = 'submit',
  className = 'bg-brand rounded-lg',
  size = 'medium',
  iconPosition = 'left',
  fit,
  disabled,
  isSubmitting,
  loaderComponent,
  iconElement,
  onClick,
}) => {
  const SIZES = {
    small: fit ? 'w-fit h-14 text-[1.4rem]' : 'w-full h-14 text-[1.4rem]',
    medium: fit ? 'w-fit h-16 text-[1.5rem]' : 'w-full h-16 text-[1.5rem]',
    large: fit ? 'w-fit h-20 text-[1.6rem]' : 'w-full h-20 text-[1.6rem]',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled ? disabled : isSubmitting}
      className={`
        ${className}
        ${SIZES[size]}
        ${(disabled || isSubmitting) && 'cursor-not-allowed opacity-80'}
        relative flex select-none items-center justify-center space-x-3 overflow-hidden px-8 text-appWhite shadow-md  transition-all duration-300 ease-in-out hover:opacity-80`}
    >
      {isSubmitting ? (
        <>
          <div className='absolute'>{loaderComponent}</div>
          {iconPosition === 'left' && <div className='opacity-0'>{iconElement}</div>}
          <span className='select-none whitespace-nowrap leading-[0] opacity-0'>{label}</span>
          {iconPosition === 'right' && <div className='opacity-0'>{iconElement}</div>}
        </>
      ) : (
        <>
          {iconPosition === 'left' && <>{iconElement}</>}
          <p className='select-none whitespace-nowrap leading-[0] tracking-wide'>{label}</p>
          {iconPosition === 'right' && <>{iconElement}</>}
        </>
      )}
    </button>
  )
}
