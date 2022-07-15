import CustomInput from "../components/Layout/CustomInput";

export default function Login() {
  
  return (
    <div className="min-h-full">
      <div className="flex flex-row justify-center min-h-screen items-center">
        <div className="flex p-8 justify-center w-full max-w-5xl">
          <div className="grid md:grid-cols-2 items-center justify-center gap-10">
            <div className="flex flex-col">
              <h1 className="text-4xl">Kraken</h1>
              <h1 className="text-5xl">Faça seu login na API</h1>
            </div>
            <form className="bg-slate-500 py-10 px-10">
              <section className="flex flex-col gap-5">
                <CustomInput label="E-mail" name="email" placeholder="email@domínio.com" type="email"/>
                <CustomInput label="Senha" name="password" placeholder="Mínimo 8 caracteres" type="password"/>
              </section>
              <a className="inline-block text-green-800 my-2 cursor-pointer font-black">Esqueci minha senha</a>
              <div className="">
                Não tem uma conta? <a>Registre-se</a>
              </div>
              <hr className="my-3 border-b- border-black"/>
              <div className="flex justify-center items-center">
                <h3>Ou entre com o </h3>
                <button className="bg-blue-400 p-2 mx-5">Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}