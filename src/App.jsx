import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const keepAlive = setInterval(() => {
      fetch("https://tu-web-service.onrender.com/ping")
        .then(() => console.log("Ping enviado"))
        .catch((e) => console.error("Ping fallido", e));
    }, 5 * 60 * 1000);

    return () => clearInterval(keepAlive);
  }, []);

  return <AppRouter />;
}

export default App;
