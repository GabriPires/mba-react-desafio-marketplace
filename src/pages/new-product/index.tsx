import { ImageUploadIcon } from '@/assets/icon/image-upload'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import * as Input from '@/components/input'
import { PageTitle } from '@/components/page-title'
import * as Select from '@/components/select'

export function NewProductPage() {
  return (
    <div>
      <PageTitle
        title="Novo produto"
        subtitle="Cadastre um produto para venda no marketplace"
      />

      <div className="flex gap-6">
        <div>
          <input id="product-image" type="image" className="sr-only" />
          <label
            htmlFor="product-image"
            className="min-w-[415px] h-[340px] rounded-card bg-marketplace-shape-shape flex flex-col items-center justify-center gap-4 cursor-pointer"
          >
            <ImageUploadIcon className="size-10 text-marketplace-orange-base" />
            <span className="text-marketplace-gray-300 text-sm max-w-40 block text-center">
              Selecione a imagem do produto
            </span>
          </label>
        </div>

        <Card className="w-full">
          <h1 className="text-marketplace-gray-300 font-title text-lg mb-6">
            Dados do produto
          </h1>

          <form className="grid grid-cols-5 gap-5">
            <Input.Control className="col-span-3">
              <Input.Label htmlFor="name">Título</Input.Label>
              <Input.Container>
                <Input.Field id="name" placeholder="Nome do produto" />
              </Input.Container>
            </Input.Control>

            <Input.Control className="col-span-2">
              <Input.Label htmlFor="price">Valor</Input.Label>
              <Input.Container>
                <span className="group-focus-within:text-marketplace-orange-base">
                  R$
                </span>
                <Input.Field id="price" placeholder="Valor do produto" />
              </Input.Container>
            </Input.Control>

            <Input.Control className="col-span-5">
              <Input.Label htmlFor="description">Descrição</Input.Label>
              <Input.Container>
                <Input.Textarea
                  id="description"
                  placeholder="Escreva detalhes sobre o produto, tamanho, características"
                />
              </Input.Container>
            </Input.Control>

            <Select.Control className="col-span-5">
              <Select.Label htmlFor="category">Categoria</Select.Label>
              <Select.Container>
                <Select.Trigger placeholder="Selecione" />
                <Select.Content>
                  <Select.Item value="teste-1">Teste</Select.Item>
                  <Select.Item value="teste-2">Teste</Select.Item>
                  <Select.Item value="teste-3">Teste</Select.Item>
                </Select.Content>
              </Select.Container>
            </Select.Control>

            <div className="col-span-5 flex gap-3 mt-5">
              <Button variant="outline" size="lg" className="w-full">
                Cancelar
              </Button>
              <Button variant="primary" size="lg" className="w-full">
                Salvar e publicar
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
