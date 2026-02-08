import Inicio from "./components/inicio";import Image from "next/image";
import Formacion from "./components/formacion";
import Habilidades from "./components/habilidades";
//import Proyectos from "./components/proyectos";
//import Contacto from "./components/contacto";

export default function Home() {
  return (
    <div className="pt-2"> 
    <Inicio/>
    <Formacion/>
    <Habilidades/>
    {/* <Proyectos/> */}
    {/* <Contacto/> */}
    </div>


  );
}
