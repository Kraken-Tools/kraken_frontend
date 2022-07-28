import CustomInput from "../components/Layout/CustomInput";

export default function LoginForm() {
  
  async function oauthLogin() {
    const response = await fetch("http://localhost:8000/login/google");
    const redirectUrl = await response.json();
    window.location.assign(redirectUrl.target_url);
  }
  

  return (
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
        <button 
          type="button"
          onClick={oauthLogin} 
          className="bg-blue-500 p-2 mx-5">
            Google
          </button>
      </div>
    </form>
  );
}