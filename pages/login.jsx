import Script from 'next/script'
import LoginForm from "../components/LoginForm";

export default function Login() {
  
  return (
    <>
      <div className="min-h-full bg-main-background">
        <div className="flex flex-row justify-center min-h-screen items-center">
          <div className="flex p-8 justify-center w-full max-w-5xl">
            <div className="grid md:grid-cols-2 items-center justify-center gap-10">
              <div className="flex flex-col text-white">
                <h1 className="text-4xl text-main-highlight-color font-bold">Kraken</h1>
                <h1 className="text-5xl">Faça seu login na API</h1>
              </div>
                <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <Script src="https://apis.google.com/js/platform.js" async defer/>
    </>
  );
}