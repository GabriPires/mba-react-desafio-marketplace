import { useNavigate } from 'react-router-dom'

import { ArrowLeftIcon } from '@/assets/icon/arrow-left'
import { TickIcon } from '@/assets/icon/tick'
import { UnavailableIcon } from '@/assets/icon/unavailable'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import * as Input from '@/components/input'
import { PageTitle } from '@/components/page-title'
import * as Select from '@/components/select'
import { Tag } from '@/components/tag'

export function ProductDetailsPage() {
  const navigate = useNavigate()

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
            <Tag variant="announced" value="Anunciado" />
          </div>

          <form className="grid grid-cols-5 gap-5">
            <Input.Control className="col-span-3">
              <Input.Label htmlFor="name">Título</Input.Label>
              <Input.Container>
                <Input.Field id="name" placeholder="Título do produto" />
              </Input.Container>
            </Input.Control>

            <Input.Control className="col-span-2">
              <Input.Label htmlFor="price">Valor</Input.Label>
              <Input.Container>
                <Input.Field id="price" placeholder="Valor do produto" />
              </Input.Container>
            </Input.Control>

            <Input.Control className="col-span-5">
              <Input.Label htmlFor="description">Descrição</Input.Label>
              <Input.Container>
                <Input.Textarea
                  id="description"
                  placeholder="Uma breve descrição do produto..."
                />
              </Input.Container>
            </Input.Control>

            <Select.Control className="col-span-5">
              <Select.Label htmlFor="category">Categoria</Select.Label>
              <Select.Container>
                <Select.Trigger placeholder="Status" />
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
                Salvar e atualizar
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
