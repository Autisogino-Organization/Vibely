import AppRouter from "./routes/AppRouter";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const keepAlive = setInterval(() => {
      fetch("https://noctis-l37u.onrender.com/")
        .then((res) => console.log("Ping exitoso:", res.status))
        .catch((err) => console.error("Error en el ping:", err));
    }, 5 * 60 * 1000);

    return () => clearInterval(keepAlive);
  }, []);

  return <AppRouter />;
}

export default App;
