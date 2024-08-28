import { SearchIcon } from '@/assets/icon/search'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import * as Input from '@/components/input'
import { PageTitle } from '@/components/page-title'

import { ProductCard } from './components/product-card'

export function ProductsPage() {
  return (
    <div>
      <PageTitle
        title="Seus produtos"
        subtitle="Acesse gerencie a sua lista de produtos à venda"
      />
      <div className="flex gap-6">
        <Card as="form" className="min-w-[327px] h-fit">
          <Input.Control>
            <Input.Container>
              <Input.Icon icon={SearchIcon} />
              <Input.Field placeholder="Pesquisar" />
            </Input.Container>
          </Input.Control>
          <Button type="submit" size="lg" className="w-full mt-10">
            Aplicar filtro
          </Button>
        </Card>

        <div className="grid grid-cols-2 w-full gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
