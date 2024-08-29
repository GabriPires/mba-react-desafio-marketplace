import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { AccessIcon } from '@/assets/icon/access'
import { ArrowRightIcon } from '@/assets/icon/arrow-right'
import { ImageUploadIcon } from '@/assets/icon/image-upload'
import { MailIcon } from '@/assets/icon/mail'
import { ViewIcon } from '@/assets/icon/view'
import { ViewOffIcon } from '@/assets/icon/view-off'
import { Button } from '@/components/button'
import * as Input from '@/components/input'
import { phoneMask } from '@/utils/phone-mask'

const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png']

const registerFormSchema = z
  .object({
    name: z.string().min(1, 'Insira seu nome'),
    phone: z.string().min(1, 'Insira seu telefone'),
    avatar: z
      .custom<FileList>()
      // .refine((files) => {
      //   return Array.from(files ?? []).length !== 0
      // })
      .refine((files) => {
        return Array.from(files ?? []).every((file) =>
          ACCEPTED_FILE_TYPES.includes(file.type),
        )
      }, 'Tipo de arquivo precisa ser PNG ou JPEG')
      .nullish(),
    email: z.string().email('Insira um e-mail válido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z
      .string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

type RegisterFormData = z.infer<typeof registerFormSchema>

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(
    undefined,
  )

  function toggleShowPassword() {
    setShowPassword((prev) => !prev)
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatarPreview(imageUrl)
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      avatar: undefined,
      password: '',
      confirmPassword: '',
    },
  })

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <div className="bg-marketplace-shape-white m-6 rounded-4xl p-10 lg:py-[72px] lg:px-20 flex flex-col">
      <div>
        <h1 className="font-title text-2xl leading-tight text-marketplace-gray-500">
          Crie sua conta
        </h1>
        <span className="text-marketplace-gray-300 text-sm leading-tight">
          Informe os seus dados pessoais e de acesso
        </span>
      </div>

      <form
        className="flex flex-col gap-5 mt-12"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className="space-y-5">
          <h2 className="text-marketplace-gray-500 font-title text-lg font-bold leading-tight">
            Perfil
          </h2>

          <div className="flex flex-col items-start">
            <input
              id="avatar"
              type="file"
              className="sr-only"
              {...register('avatar', {
                onChange: handleImageChange,
              })}
            />
            {avatarPreview ? (
              <div className="flex flex-col items-center">
                <img
                  src={avatarPreview}
                  alt="Prévia do avatar do usuário"
                  className="size-[120px] object-cover rounded-xl"
                />
                <Button
                  variant="link"
                  className="text-xs"
                  onClick={() => {
                    setAvatarPreview(undefined)
                    setValue('avatar', undefined)
                  }}
                >
                  Remover foto
                </Button>
              </div>
            ) : (
              <label
                htmlFor="avatar"
                className="flex items-center justify-center rounded-xl size-[120px] bg-marketplace-shape-shape cursor-pointer"
              >
                <ImageUploadIcon className="text-marketplace-orange-base size-8" />
              </label>
            )}
          </div>

          <Input.Control error={errors.name?.message}>
            <Input.Label htmlFor="name">Nome</Input.Label>
            <Input.Container>
              <Input.Icon icon={MailIcon} />
              <Input.Field
                id="name"
                placeholder="Seu nome completo"
                {...register('name')}
              />
            </Input.Container>
          </Input.Control>

          <Input.Control error={errors.phone?.message}>
            <Input.Label htmlFor="phone">Telefone</Input.Label>
            <Input.Container>
              <Input.Icon icon={AccessIcon} />
              <Input.Field
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                {...register('phone', {
                  onChange: (e) => {
                    const { value } = e.target
                    e.target.value = phoneMask(value)
                  },
                })}
              />
            </Input.Container>
          </Input.Control>
        </div>

        <div className="space-y-5 mt-12">
          <h2 className="text-marketplace-gray-500 font-title text-lg font-bold leading-tight">
            Acesso
          </h2>

          <Input.Control error={errors.email?.message}>
            <Input.Label htmlFor="email">E-mail</Input.Label>
            <Input.Container>
              <Input.Icon icon={MailIcon} />
              <Input.Field
                type="email"
                id="email"
                placeholder="Seu e-mail de acesso"
                {...register('email')}
              />
            </Input.Container>
          </Input.Control>

          <Input.Control error={errors.password?.message}>
            <Input.Label htmlFor="password">Senha</Input.Label>
            <Input.Container>
              <Input.Icon icon={AccessIcon} />
              <Input.Field
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Sua senha de acesso"
                {...register('password')}
              />
              <button type="button" onClick={toggleShowPassword}>
                {showPassword ? (
                  <ViewOffIcon className="text-marketplace-gray-300 size-6" />
                ) : (
                  <ViewIcon className="text-marketplace-gray-300 size-6" />
                )}
              </button>
            </Input.Container>
          </Input.Control>

          <Input.Control error={errors.confirmPassword?.message}>
            <Input.Label htmlFor="confirmPassword">Confirmar senha</Input.Label>
            <Input.Container>
              <Input.Icon icon={AccessIcon} />
              <Input.Field
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Confirme a senha"
                {...register('confirmPassword')}
              />
              <button type="button" onClick={toggleShowPassword}>
                {showPassword ? (
                  <ViewOffIcon className="text-marketplace-gray-300 size-6" />
                ) : (
                  <ViewIcon className="text-marketplace-gray-300 size-6" />
                )}
              </button>
            </Input.Container>
          </Input.Control>
        </div>

        <Button type="submit" size="lg" className="mt-12 justify-between">
          Cadastrar
          <ArrowRightIcon className="w-6 text-white" />
        </Button>
      </form>

      <div className="mt-5 lg:mt-20 space-y-5">
        <span className="text-marketplace-gray-300">Já tem uma conta?</span>
        <Button
          variant="outline"
          size="lg"
          className="justify-between w-full"
          asChild
        >
          <Link to="/">
            Acessar
            <ArrowRightIcon className="w-6 text-marketplace-orange-base" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
