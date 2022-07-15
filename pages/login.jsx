import CustomInput from "../components/Layout/CustomInput";

export default function Login() {
  
  return (
    <div className="min-h-full bg-main-background">
      <div className="flex flex-row justify-center min-h-screen items-center">
        <div className="flex p-8 justify-center w-full max-w-5xl">
          <div className="grid md:grid-cols-2 items-center justify-center gap-10">
            <div className="flex flex-col text-white">
              <h1 className="text-4xl text-main-highlight-color font-bold">Kraken</h1>
              <h1 className="text-5xl">Faça seu login na API</h1>
            </div>
            <form className="bg-secondary-background text-white py-10 px-10">
              <section className="flex flex-col gap-5">
                <CustomInput label="E-mail" name="email" placeholder="email@domínio.com" type="email"/>
                <CustomInput label="Senha" name="password" placeholder="Mínimo 8 caracteres" type="password"/>
              </section>
              <a className="inline-block text-main-highlight-color my-2 cursor-pointer font-black">Esqueci minha senha</a>
              <div className="">
                Não tem uma conta? <a>Registre-se</a>
              </div>
              <hr className="my-3 border-main-background"/>
              <div className="flex justify-center items-center">
                <h3>Ou entre com o </h3>
                <button className="bg-blue-500 p-2 mx-5">Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}