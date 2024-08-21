import { Button } from '@/components/button'

export function LoginPage() {
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

      <form className="flex flex-col gap-5 mt-12">
        <div className="flex flex-col">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" />
        </div>

        <Button className="mt-12">Acessar</Button>
      </form>

      <div className="mt-auto flex flex-col">
        <span>Ainda não tem uma conta?</span>
        <Button variant="outline">Cadastrar</Button>
      </div>
    </div>
  )
}
