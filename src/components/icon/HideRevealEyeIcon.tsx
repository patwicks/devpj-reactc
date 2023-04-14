import { FC } from 'react'
import { VscEyeClosed, VscEye } from 'react-icons/vsc'

type THideRevealEyeIcon = {
  isToggled: boolean
  handleToggle: () => void
}

export const HideRevealEyeIcon: FC<THideRevealEyeIcon> = ({ isToggled, handleToggle }) => {
  return (
    <div
      className='absolute right-5 top-1/2 -translate-y-1/2  cursor-pointer text-[2rem] text-appBlack/50 dark:text-appWhite'
      onClick={handleToggle}
    >
      {isToggled ? (
        <VscEye className='transition-all duration-300 ease-in-out hover:opacity-90' />
      ) : (
        <VscEyeClosed className='transition-all duration-300 ease-in-out hover:opacity-90' />
      )}
    </div>
  )
}
