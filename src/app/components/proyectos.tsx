"use client";

import React from 'react';
import Image from 'next/image';
import { BsArrowUpRight } from "react-icons/bs";
import { DiMsqlServer } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiMysql,
    SiBootstrap,
    SiNestjs,
    SiSupabase,
    SiVercel,
    SiHtml5,
    SiCss3, 
    SiPostgresql
} from "react-icons/si";

const projects = [
    {
        id: 1,
        category: "Aplicación Web Full Stack",
        title: "Punto de Venta - Tenis Sport LZC",
        description: "Sistema integral de Punto de Venta (POS) para una tienda especializada en tenis. Incluye control de inventarios en tiempo real, gestión de roles de usuario (administrador/vendedor), seguridad avanzada y un diseño totalmente responsivo para usar en tabletas o escritorio.",
        image: "/proyecto1.png",
        link: "https://github.com/carloxx723",
        techs: [
            <SiHtml5 key="html" size={24} className="text-[#E34F26]" title="HTML5" />,
            <SiCss3 key="css" size={24} className="text-[#1572B6]" title="CSS3" />,
            <SiNextdotjs key="next" size={24} className="text-white" title="Next.js" />,
            <SiNestjs key="nest" size={24} className="text-[#E0234E]" title="NestJS" />,
            <SiSupabase key="supa" size={24} className="text-[#3ECF8E]" title="Supabase" />,
            <SiTailwindcss key="tail" size={24} className="text-[#06B6D4]" title="Tailwind CSS" />,
            <SiVercel key="vercel" size={24} className="text-white" title="Vercel" />
        ]
    },
    {
        id: 2,
        category: "Landing Page ",
        title: "Landing Page - Tenis Sport LZC",
        description: "Página web promocional diseñada para atraer clientes. Muestra productos destacados, ubicación y contacto con un diseño moderno y atractivo.",
        image: "/proyecto2.png",
        link: "https://github.com/carloxx723",
        techs: [
            <SiHtml5 key="html" size={24} className="text-[#E34F26]" title="HTML5" />,
            <SiCss3 key="css" size={24} className="text-[#1572B6]" title="CSS3" />,
            <SiNextdotjs key="next" size={24} className="text-white" title="Next.js" />,
            <SiTailwindcss key="tail" size={24} className="text-[#06B6D4]" title="Tailwind CSS" />,
            <SiVercel key="vercel" size={24} className="text-white" title="Vercel" />
        ]
    },
    {
        id: 3,
        category: "Aplicación Web",
        title: "Gestión de Empleados",
        description: "Sistema para el control administrativo de personal. Permite gestionar expedientes, asistencias y departamentos a través de un panel de control intuitivo.",
        image: "/proyecto3.png",
        link: "https://github.com/carloxx723",
        techs: [
            <SiHtml5 key="html" size={24} className="text-[#E34F26]" title="HTML5" />,
            <SiCss3 key="css" size={24} className="text-[#1572B6]" title="CSS3" />,
            <SiNextdotjs key="next" size={24} className="text-white" title="Next.js" />,
            <SiNestjs key="nest" size={24} className="text-[#E0234E]" title="NestJS" />,
            <SiPostgresql key="postgre" size={24} className="text-[#4169E1]" title="PostgreSQL" />,
            <SiTailwindcss key="tail" size={24} className="text-[#06B6D4]" title="Tailwind CSS" />
        ]
    },
    /*{
        id: 4,
        category: "Automatización",
        title: "Automatización de Reportes en Excel",
        description: "Herramienta que automatiza la creación de reportes financieros. Permite procesar datos masivos y exportarlos directamente a archivos Excel con tablas y gráficos.",
        image: "/proyecto4.png",
        link: "https://github.com/carloxx723",
        techs: [
            <SiHtml5 key="html" size={24} className="text-[#E34F26]" title="HTML5" />,
            <SiCss3 key="css" size={24} className="text-[#1572B6]" title="CSS3" />,
            <SiTypescript key="ts" size={24} className="text-[#3178C6]" title="TypeScript" />,
            <SiNestjs key="nest" size={24} className="text-[#E0234E]" title="NestJS" />,
            <SiMysql key="postgre" size={24} className="text-[#4169E1]" title="MySQL" />,
            <SiTailwindcss key="tail" size={24} className="text-[#06B6D4]" title="Tailwind CSS" />
        ]
    },*/
];

const Proyectos = () => {
    return (
        <section id="proyectos" className="w-full bg-[#131313] py-24 px-4 sm:px-10 scroll-mt-20">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-20">
                    <span className="text-[#FF014F] tracking-widest text-sm font-medium uppercase">
                        Portafolio
                    </span>
                    <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
                        Explora mis <span className="text-[#FF014F]">Proyectos</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >

                            <div className="w-full lg:w-3/5">
                                <div className="relative group overflow-hidden rounded-2xl bg-[#1a1d23] p-6 border border-transparent hover:border-[#FF014F]/50 transition-all duration-500 shadow-xl shadow-black/50">
                                    <div className="relative w-full h-auto rounded-lg overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={1200}
                                            height={800}
                                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-transparent group-hover:bg-white/5 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                                <span className="text-[#FF014F] font-medium tracking-wide text-sm uppercase mb-3">
                                    {project.category}
                                </span>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight hover:text-[#FF014F] transition-colors duration-300 cursor-pointer">
                                    {project.title}
                                </h3>

                                <p className="text-[oklch(70.7%_0.022_261.325)] text-lg leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4 mb-8 bg-[#1a1d23] py-3 px-5 rounded-full border border-white/5 flex-wrap">
                                    <span className="text-xs text-[oklch(70.7%_0.022_261.325)] uppercase tracking-widest font-semibold mr-2">Tech:</span>
                                    {project.techs.map((icon, i) => (
                                        <div key={i} className="hover:-translate-y-1 transition-transform duration-300">
                                            {icon}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 text-white font-medium transition-all"
                                >
                                    <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-[#FF014F] group-hover:border-[#FF014F] transition-all duration-300">
                                        <BsArrowUpRight
                                            size={22}
                                            className="text-[oklch(70.7%_0.022_261.325)] group-hover:text-white transition-colors duration-300 rotate-45 group-hover:rotate-0"
                                        />
                                    </div>
                                    <span className="text-[oklch(70.7%_0.022_261.325)] group-hover:text-white transition-colors uppercase text-sm tracking-wider">
                                        Ver en GitHub
                                    </span>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;