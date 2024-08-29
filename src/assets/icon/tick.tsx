interface TickIconProps {
  className?: string
}

export function TickIcon({ className }: TickIconProps) {
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
        d="M26.0238 7.94339C26.4233 8.32473 26.438 8.95773 26.0567 9.35723L12.0567 24.0239C11.8708 24.2187 11.6142 24.3302 11.345 24.3333C11.0757 24.3365 10.8166 24.2309 10.6262 24.0405L5.95958 19.3739C5.56906 18.9833 5.56906 18.3502 5.95958 17.9596C6.3501 17.5691 6.98327 17.5691 7.37379 17.9596L11.3167 21.9026L24.61 7.97627C24.9913 7.57678 25.6243 7.56205 26.0238 7.94339Z"
        fill="currentColor"
      />
    </svg>
  )
}
