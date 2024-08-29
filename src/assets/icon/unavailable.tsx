interface UnavailableIconProps {
  className?: string
}

export function UnavailableIcon({ className }: UnavailableIconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 15.76C2 8.16056 8.16056 2 15.76 2C23.3594 2 29.52 8.16056 29.52 15.76C29.52 23.3594 23.3594 29.52 15.76 29.52C8.16056 29.52 2 23.3594 2 15.76ZM6.73643 8.09407C4.97989 10.1597 3.92 12.8361 3.92 15.76C3.92 22.299 9.22095 27.6 15.76 27.6C18.6839 27.6 21.3603 26.5401 23.4259 24.7835L6.73643 8.09407ZM8.09407 6.73643L24.7835 23.4259C26.5401 21.3603 27.6 18.6839 27.6 15.76C27.6 9.22095 22.299 3.92 15.76 3.92C12.8361 3.92 10.1597 4.97989 8.09407 6.73643Z"
        fill="currentColor"
      />
    </svg>
  )
}
