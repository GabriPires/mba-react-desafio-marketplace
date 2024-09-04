import { Link } from 'react-router-dom'

import { ProductProps } from '@/api/products/get-products'
import { Card } from '@/components/card'
import { Tag } from '@/components/tag'

interface ProductCardProps {
  product: ProductProps
}

enum Status {
  available = 'Anunciado',
  cancelled = 'Não Disponível',
  sold = 'Vendido',
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <Card className="p-1 relative">
        <div className="absolute flex gap-1 top-3 right-3">
          <Tag value={Status[product.status]} variant={product.status} />
          <Tag value={product.category.title} />
        </div>
        <img
          src={product.attachments[0].url}
          alt="Foto do produto"
          className="rounded-2xl w-full h-[144px] object-cover"
        />
        <div className="p-3 pt-0">
          <div className="flex items-center justify-between mt-4">
            <span className="text-marketplace-gray-400 font-semibold leading-tight">
              {product.title}
            </span>
            <span>
              <span className="text-marketplace-gray-500 text-xs font-medium leading-tight mr-1">
                R$
              </span>
              <span className="text-marketplace-gray-500 font-title text-lg font-bold leading-tight">
                {Number(product.priceInCents / 100).toLocaleString()}
              </span>
            </span>
          </div>
          <span className="text-marketplace-gray-300 text-sm leading-tight line-clamp-2 mt-2">
            {product.description}
          </span>
        </div>
      </Card>
    </Link>
  )
}
