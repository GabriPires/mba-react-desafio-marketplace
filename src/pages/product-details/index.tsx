import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { z } from 'zod'

import { getCategories } from '@/api/categories/get-categories'
import { getProductById } from '@/api/products/get-product-by-id'
import { ArrowLeftIcon } from '@/assets/icon/arrow-left'
import { TickIcon } from '@/assets/icon/tick'
import { UnavailableIcon } from '@/assets/icon/unavailable'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import * as Input from '@/components/input'
import { PageTitle } from '@/components/page-title'
import * as Select from '@/components/select'
import { Tag } from '@/components/tag'

const productDetailsFormSchema = z.object({
  name: z.string().min(1, 'O título é obrigatório'),
  price: z.number().positive('O valor deve ser maior que zero'),
  description: z.string(),
  category: z.string().optional(),
})

type ProductDetailsFormData = z.infer<typeof productDetailsFormSchema>

export function ProductDetailsPage() {
  const navigate = useNavigate()

  const { id } = useParams()

  const { data: productData } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => await getProductById({ productId: id as string }),
  })

  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => await getCategories(),
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProductDetailsFormData>({
    resolver: zodResolver(productDetailsFormSchema),
    values: {
      name: productData?.product.title ?? '',
      price: productData?.product.priceInCents
        ? productData.product.priceInCents / 100
        : 0,
      description: productData?.product.description ?? '',
      category: productData?.product.category.id ?? undefined,
    },
  })

  async function handleUpdateProductDetails(data: ProductDetailsFormData) {
    console.log(data)
  }

  return (
    <div>
      <Button
        variant="link"
        className="text-sm mt-8"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon className="size-5 mr-2" />
        Voltar
      </Button>
      <div className="flex justify-between">
        <PageTitle
          title="Editar produto"
          subtitle="Gerencie as informações do produto cadastrado"
          className="mt-2"
        />
        <div className="flex items-center gap-4">
          <Button variant="link" className="text-sm">
            <TickIcon className="size-5 mr-2" />
            Marcar como vendido
          </Button>
          <Button variant="link" className="text-sm">
            <UnavailableIcon className="size-5 mr-2" />
            Desativar anúncio
          </Button>
        </div>
      </div>

      <div className="flex gap-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto do produto"
          className="w-[415px] h-[340px] object-cover rounded-lg "
        />
        <Card className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-marketplace-gray-300 font-title text-lg">
              Dados do produto
            </h1>
            <Tag variant="available" value="Anunciado" />
          </div>

          <form
            className="grid grid-cols-5 gap-5"
            onSubmit={handleSubmit(handleUpdateProductDetails)}
          >
            <Input.Control className="col-span-3" error={errors.name?.message}>
              <Input.Label htmlFor="name">Título</Input.Label>
              <Input.Container>
                <Input.Field
                  id="name"
                  placeholder="Título do produto"
                  {...register('name')}
                />
              </Input.Container>
            </Input.Control>

            <Input.Control className="col-span-2" error={errors.price?.message}>
              <Input.Label htmlFor="price">Valor</Input.Label>
              <Input.Container>
                <Input.Field
                  id="price"
                  placeholder="Valor do produto"
                  {...register('price', { valueAsNumber: true })}
                />
              </Input.Container>
            </Input.Control>

            <Input.Control
              className="col-span-5"
              error={errors.description?.message}
            >
              <Input.Label htmlFor="description">Descrição</Input.Label>
              <Input.Container>
                <Input.Textarea
                  id="description"
                  placeholder="Uma breve descrição do produto..."
                  {...register('description')}
                />
              </Input.Container>
            </Input.Control>

            <Controller
              control={control}
              name="category"
              render={({ field: { value, onChange } }) => (
                <Select.Control
                  className="col-span-5"
                  error={errors.category?.message}
                >
                  <Select.Label htmlFor="category">Categoria</Select.Label>
                  <Select.Container value={value} onValueChange={onChange}>
                    <Select.Trigger placeholder="Status" />
                    <Select.Content>
                      {categoriesData?.categories.map((category) => (
                        <Select.Item key={category.id} value={category.id}>
                          {category.title}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Container>
                </Select.Control>
              )}
            />

            <div className="col-span-5 flex gap-3 mt-5">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={!isDirty}
              >
                Salvar e atualizar
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
