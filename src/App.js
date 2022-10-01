import { ProductsContextProvider } from "./components/context/ProductsContext.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="h-screen font-comissioner text-base">
      <ProductsContextProvider>
        <Home>Hola</Home>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
