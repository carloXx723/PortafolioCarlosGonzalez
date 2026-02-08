"use client";

import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const educationData = [
    {
        id: 1,
        title: "Instituto Tecnológico de Morelia",
        subTitle: "Ingeniería en Sistemas Computacionales",
        date: "2021 - Presente",
        description: "Actualmente cursando la especialidad en Ingeniería de Software y Desarrollo de Aplicaciones para Móviles. Mi formación abarca desde la arquitectura de sistemas complejos hasta la implementación de soluciones móviles modernas, con un fuerte énfasis en la calidad del código, la seguridad y la escalabilidad de los proyectos.",
    },
    {
        id: 2,
        title: "CECyTEM 05 Michoacán",
        subTitle: "Técnico en Programación",
        date: "2018 - 2021",
        description: "Mi formación se centró en el desarrollo de aplicaciones funcionales, abarcando desde el diseño de algoritmos hasta el mantenimiento de sistemas, con un enfoque práctico en la productividad y los estándares de calidad en la programación.",
    },
];

const certificationData = [
    {
        id: 1,
        title: "Google Project Management Professional Certificate",
        subTitle: "Coursera / Google",
        date: "2026 (En curso)",
        description: "Programa profesional enfocado en la gestión de proyectos eficiente, metodologías Ágiles, gestión de riesgos, y liderazgo estratégico para la toma de decisiones en entornos tecnológicos.",
    },
    {
        id: 2,
        title: "CCNA: Enterprise Networking, Security, and Automation",
        subTitle: "Cisco Networking Academy / ITM",
        date: "Ene 2026 - Jul 2026",
        description: "Módulo avanzado de redes empresariales. Enfoque en arquitecturas escalables, configuración de VPNs y ACLs, seguridad de red y automatización de infraestructura.",
    },
    {
        id: 3,
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        subTitle: "Cisco Networking Academy / ITM",
        date: "Ago 2025 - Ene 2026",
        description: "Especialización en conmutación y enrutamiento. Configuración de VLANs, redundancia de LAN, seguridad de puertos y conceptos de redes inalámbricas (WLAN).",
    },
    {
        id: 4,
        title: "CCNA: Introduction to Networks",
        subTitle: "Cisco Networking Academy / ITM",
        date: "Ago 2024 - Feb 2025",
        description: "Fundamentos sólidos de arquitectura de redes, modelos OSI y TCP/IP, direccionamiento IPv4/IPv6 y configuración básica de dispositivos de red (Routers y Switches).",
    },
];

const ResumeCard = ({ item }: { item: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`group relative flex flex-col border-t-2 py-8 transition-colors duration-300 ${isOpen ? "border-[#FF014F]" : "border-[#1a1d23]"}`}>
            <div className="flex items-start justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex flex-col gap-2 md:max-w-[85%]">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? "text-[#FF014F]" : "text-white group-hover:text-[#FF014F]"}`}>
                        {item.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                        <span className="text-gray-300 italic">{item.subTitle}</span>
                        <span className="hidden sm:block text-gray-500">•</span>
                        <span className={`font-medium ${isOpen ? "text-white" : "text-[#FF014F]"}`}>
                            {item.date}
                        </span>
                    </div>
                </div>
                <button
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-[#FF014F] text-white shadow-lg shadow-red-500/30" : "bg-[#1a1d23] text-[#FF014F] hover:bg-[#FF014F] hover:text-white"}`}
                >
                    {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </button>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"}`}
            >
                <p className="text-gray-400 leading-relaxed text-base border-l-2 border-[#FF014F]/30 pl-4">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const Formacion = () => {
    return (
        <section id="formacion" className="w-full bg-[#111] py-20 px-4 sm:px-10 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-[#FF014F] tracking-widest text-sm font-medium uppercase">
                        Mi Formación
                    </span>
                    <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
                        Mi Trayectoria Académica
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <h4 className="mb-8 text-sm font-medium tracking-widest text-[#FF014F] uppercase">
                            Formación Académica
                        </h4>
                        <div className="flex flex-col">
                            {educationData.map((item) => (
                                <ResumeCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-8 text-sm font-medium tracking-widest text-[#FF014F] uppercase">
                            Certificaciones
                        </h4>
                        <div className="flex flex-col">
                            {certificationData.map((item) => (
                                <ResumeCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Formacion;