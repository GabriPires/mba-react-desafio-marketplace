import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getProducts } from '@/api/products/get-products'
import { SaleTagIcon } from '@/assets/icon/sale-tag'
import { SearchIcon } from '@/assets/icon/search'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import * as Input from '@/components/input'
import { PageTitle } from '@/components/page-title'
import * as Select from '@/components/select'

import { ProductCard } from './components/product-card'

const productsFormSchema = z.object({
  search: z.string().nullable(),
  status: z.enum(['available', 'sold', 'cancelled']).nullable(),
})

type ProductsFormData = z.infer<typeof productsFormSchema>

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search')
  const status = searchParams.get('status') as ProductsFormData['status']

  const { data: products } = useQuery({
    queryKey: ['all-my-products', search, status],
    queryFn: async () => {
      const response = await getProducts({ search, status })

      const products = response.products

      return products
    },
  })

  const { register, control, handleSubmit } = useForm<ProductsFormData>({
    resolver: zodResolver(productsFormSchema),
    defaultValues: {
      search,
      status,
    },
  })

  async function onSearchProducts(data: ProductsFormData) {
    setSearchParams((params) => {
      if (data.status) {
        params.set('status', data.status)
      } else {
        params.delete('status')
      }

      if (data.search) {
        params.set('search', data.search)
      } else {
        params.delete('search')
      }

      return params
    })
  }

  return (
    <div>
      <PageTitle
        title="Seus produtos"
        subtitle="Acesse gerencie a sua lista de produtos à venda"
      />
      <div className="flex gap-6">
        <Card
          as="form"
          className="min-w-[327px] h-fit flex flex-col gap-5"
          onSubmit={handleSubmit(onSearchProducts)}
        >
          <Input.Control>
            <Input.Container>
              <Input.Icon icon={SearchIcon} />
              <Input.Field placeholder="Pesquisar" {...register('search')} />
            </Input.Container>
          </Input.Control>

          <Controller
            control={control}
            name="status"
            render={({ field: { value, onChange } }) => (
              <Select.Control>
                <Select.Container
                  value={value ? String(value) : undefined}
                  onValueChange={onChange}
                >
                  <Select.Trigger icon={SaleTagIcon} placeholder="Status" />
                  <Select.Content>
                    <Select.Item value="available">Anunciado</Select.Item>
                    <Select.Item value="sold">Vendido</Select.Item>
                    <Select.Item value="cancelled">Não disponível</Select.Item>
                  </Select.Content>
                </Select.Container>
              </Select.Control>
            )}
          />

          <Button type="submit" size="lg" className="w-full mt-5">
            Aplicar filtro
          </Button>
        </Card>

        <div className="grid grid-cols-2 w-full gap-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
