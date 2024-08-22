import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { AccessIcon } from '@/assets/icon/access'
import { ArrowRightIcon } from '@/assets/icon/arrow-right'
import { MailIcon } from '@/assets/icon/mail'
import { ViewIcon } from '@/assets/icon/view'
import { ViewOffIcon } from '@/assets/icon/view-off'
import { Button } from '@/components/button'
import * as Input from '@/components/input'

const loginFormSchema = z.object({
  email: z.string().email('Insira um e-mail válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword() {
    setShowPassword((prev) => !prev)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleLogin(data: LoginFormData) {
    console.log(data)
  }

  return (
    <div className="bg-marketplace-shape-white m-6 rounded-4xl py-[72px] px-20 flex flex-col">
      <div>
        <h1 className="font-title text-2xl leading-tight text-marketplace-gray-500">
          Acesse sua conta
        </h1>
        <span className="text-marketplace-gray-300 text-sm leading-tight">
          Informe seu e-mail e senha para entrar
        </span>
      </div>

      <form
        className="flex flex-col gap-5 mt-12"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Input.Control error={errors.email?.message}>
          <Input.Label htmlFor="email">E-mail</Input.Label>
          <Input.Container>
            <Input.Icon icon={MailIcon} />
            <Input.Field
              type="email"
              id="email"
              placeholder="Seu e-mail cadastrado"
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

        <Button type="submit" size="lg" className="mt-12 justify-between">
          Acessar
          <ArrowRightIcon className="w-6 text-white" />
        </Button>
      </form>

      <div className="mt-auto space-y-5">
        <span className="text-marketplace-gray-300">
          Ainda não tem uma conta?
        </span>
        <Button variant="outline" size="lg" className="justify-between w-full">
          Cadastrar
          <ArrowRightIcon className="w-6 text-marketplace-orange-base" />
        </Button>
      </div>
    </div>
  )
}
