import "./App.css";
import Hero from "./components/Hero";
import Importancia from "./components/Importancia";
import Pilares from "./components/Pilares";
import Amenazas from "./components/Amenazas";
import BuenasPracticas from "./components/BuenasPracticas";
import DatoCurioso from "./components/DatoCurioso";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <main>
        <Importancia />
        <Pilares />
        <Amenazas />
        <BuenasPracticas />
        <DatoCurioso />
      </main>
      <Footer />
    </>
  );
}

export default App;