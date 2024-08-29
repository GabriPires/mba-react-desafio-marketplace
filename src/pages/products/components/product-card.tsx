import { Link } from 'react-router-dom'

import { Card } from '@/components/card'
import { Tag } from '@/components/tag'

export function ProductCard() {
  return (
    <Link to={`/products/1`}>
      <Card className="p-1 relative">
        <div className="absolute flex gap-1 top-3 right-3">
          <Tag value="Anunciado" variant="announced" />
          <Tag value="Móvel" />
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto do produto"
          className="rounded-2xl w-full h-[144px] object-cover"
        />
        <div className="p-3 pt-0">
          <div className="flex items-center justify-between mt-4">
            <span className="text-marketplace-gray-400 font-semibold leading-tight">
              Sofá
            </span>
            <span>
              <span className="text-marketplace-gray-500 text-xs font-medium leading-tight mr-1">
                R$
              </span>
              <span className="text-marketplace-gray-500 font-title text-lg font-bold leading-tight">
                1.200,90
              </span>
            </span>
          </div>
          <span className="text-marketplace-gray-300 text-sm leading-tight line-clamp-2 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            unde est animi id debitis vel hic reiciendis beatae. Dolore officia
            minus, ex odit animi dignissimos ipsum error ducimus esse
            repudiandae?
          </span>
        </div>
      </Card>
    </Link>
  )
}
