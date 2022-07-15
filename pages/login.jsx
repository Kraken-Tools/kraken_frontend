export default function Login() {
  
  return (
    <div className="min-h-full">
      <div className="flex flex-row justify-center min-h-screen items-center">
        <div className="flex justify-between items-center w-full max-w-5xl border-2 border-black px-16 py-8">
            <div className="flex flex-col border-2 border-red-700">
              <h1 className="text-4xl">Kraken</h1>
              <h1 className="text-5xl">Faça seu login na API</h1>
            </div>
            <form className="border-2 border-red-700 py-8">
              <section className="flex flex-col gap-5">
                  <label>
                    Email
                    <input placeholder="exemplo@domínio.com" type="email" className="text-black"></input>
                  </label>
                  
                  <label>
                    Senha
                    <input placeholder="Deve conter 8 caracteres" type="password"></input>
                  </label>
              </section>
              <a>Esqueci minha senha</a>
              <div>
                Não tem uma conta? <a>Registre-se</a>
              </div>
              <div className="border-b-2 border-black"/>
              <div className="flex">
                <h3>Ou entre com o </h3>
                <button className="bg-slate-500">Google</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}