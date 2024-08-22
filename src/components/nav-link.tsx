import {
  NavLink as LibNavLink,
  type NavLinkProps as LinkProps,
} from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center px-4 py-3 rounded-[10px] group transition-colors',
  variants: {
    active: {
      true: 'bg-marketplace-shape-shape',
    },
  },
})

const link = tv({
  base: 'text-marketplace-gray-300 font-medium group-hover:text-marketplace-orange-base',
  variants: {
    active: {
      true: 'text-marketplace-orange-base',
    },
  },
})

type NavLinkProps = LinkProps & {
  icon: React.ElementType
  title: string
}

export function NavLink({ icon: Icon, title, ...props }: NavLinkProps) {
  return (
    <LibNavLink
      className={({ isActive }) => button({ active: isActive })}
      {...props}
    >
      {({ isActive }) => (
        <>
          <Icon
            className={twMerge(link({ active: isActive }), 'size-5 mr-2')}
          />
          <span className={link({ active: isActive })}>{title}</span>
        </>
      )}
    </LibNavLink>
  )
}
