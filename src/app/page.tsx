"use client"; // Asegúrate de que page.tsx sea Client Component para usar el hook

import { useActiveSection } from "./hooks/useActiveSection";
import Inicio from "./components/inicio";
import Formacion from "./components/formacion";
import Habilidades from "./components/habilidades";
import Proyectos from "./components/proyectos";
import Contacto from "./components/contacto";

export default function Home() {
  useActiveSection(["inicio", "formacion", "habilidades", "proyectos", "contacto"]);

  return (
    <div className="pt-2"> 
      <Inicio/>
      <Formacion/>
      <Habilidades/>
      <Proyectos/> 
      <Contacto/> 
    </div>
  );
}