import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/accesorios/Navbar";
import Footer from "./components/accesorios/Footer";

//Este componente pertenece a la ruta "principal, la ruta que engloba al resto.
//Permite cargar un Navbar y un footer que se vea en cada una de las rutas.
//Las subrutas cargaran su contenido dentro de una sección determinada de esta ruta. "Entre el navbar y el footer"
function App() {
  return (
    <div className="App">
      {/* Colocamos el navbar arriba */}
      <Navbar />

      {/*Colocamos el contenido dinamico de las rutas en el medio */}
      {/** Permite visualizar las sub-rutas que están dentro de esta ruta  **/}
      <section className="app-section">
        <Outlet />
      </section>

      {/* Abajo colocamos el footer de la página */}
      <Footer />
    </div>
  );
}

export default App;
