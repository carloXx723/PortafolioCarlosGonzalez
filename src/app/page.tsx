import Inicio from "./components/inicio";import Image from "next/image";
import Formacion from "./components/formacion";
export default function Home() {
  return (
    <div className="pt-2"> 
    <Inicio/>
    <Formacion/>
    </div>


  );
}
