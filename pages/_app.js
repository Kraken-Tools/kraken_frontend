import { GoogleOAuthProvider } from "@react-oauth/google";
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return(
    <GoogleOAuthProvider clientId="204455769773-8qvdfjklpitjbrg1ni3qgr9o3lrism0k.apps.googleusercontent.com">
      <Component {...pageProps} />
    </GoogleOAuthProvider> 
  );
}

export default MyApp
