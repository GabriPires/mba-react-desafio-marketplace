interface AlertCircleIconProps {
  className?: string
}

export function AlertCircleIcon({ className }: AlertCircleIconProps) {
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
        d="M16 3.66675C9.18851 3.66675 3.66669 9.18857 3.66669 16.0001C3.66669 22.8116 9.18851 28.3334 16 28.3334C22.8115 28.3334 28.3334 22.8116 28.3334 16.0001C28.3334 9.18857 22.8115 3.66675 16 3.66675ZM1.66669 16.0001C1.66669 8.084 8.08394 1.66675 16 1.66675C23.9161 1.66675 30.3334 8.084 30.3334 16.0001C30.3334 23.9162 23.9161 30.3334 16 30.3334C8.08394 30.3334 1.66669 23.9162 1.66669 16.0001Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.656 20.0001C14.656 19.2637 15.253 18.6667 15.9894 18.6667H16.0014C16.7377 18.6667 17.3347 19.2637 17.3347 20.0001C17.3347 20.7365 16.7377 21.3334 16.0014 21.3334H15.9894C15.253 21.3334 14.656 20.7365 14.656 20.0001Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 9.66675C16.5523 9.66675 17 10.1145 17 10.6667V16.0001C17 16.5524 16.5523 17.0001 16 17.0001C15.4477 17.0001 15 16.5524 15 16.0001V10.6667C15 10.1145 15.4477 9.66675 16 9.66675Z"
        fill="currentColor"
      />
    </svg>
  )
}
