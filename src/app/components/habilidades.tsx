"use client";

import React from 'react';
import { FaJava, FaDocker, FaGithub, FaNetworkWired } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiNextdotjs,
    SiNestjs,
    SiReact,
    SiTailwindcss,
    SiBootstrap,
    SiPostgresql,
    SiMysql,
    SiFigma,
    SiVercel,
    SiJira,
    SiSupabase,
    SiPostman,
    SiCisco
} from "react-icons/si";

const skills = [
    { name: "Java", icon: <FaJava size={40} className="text-[#ED8B00]" /> },
    { name: "HTML5", icon: <SiHtml5 size={40} className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 size={40} className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
    { name: "React", icon: <SiReact size={40} className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
    { name: "NestJS", icon: <SiNestjs size={40} className="text-[#E0234E]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-[#7952B3]" /> },
    { name: "SQL Server", icon: <DiMsqlServer size={40} className="text-[#CC2927]" /> },
    { name: "MySQL", icon: <SiMysql size={40} className="text-[#4479A1]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} className="text-[#4169E1]" /> },
    { name: "Supabase", icon: <SiSupabase size={40} className="text-[#3ECF8E]" /> },
    { name: "Docker", icon: <FaDocker size={40} className="text-[#2496ED]" /> },
    { name: "Postman", icon: <SiPostman size={40} className="text-[#FF6C37]" /> },
    { name: "GitHub", icon: <FaGithub size={40} className="text-white" /> },
    { name: "Figma", icon: <SiFigma size={40} className="text-[#F24E1E]" /> },
    { name: "Vercel", icon: <SiVercel size={40} className="text-white" /> },
    { name: "Jira", icon: <SiJira size={40} className="text-[#0052CC]" /> },
    { name: "Cisco", icon: <SiCisco size={40} className="text-[#1BA0D7]" /> },
    { name: "Packet Tracer", icon: <FaNetworkWired size={40} className="text-[#F39C12]" /> },
];

const Habilidades = () => {
    return (
        <section id="habilidades" className="w-full bg-[#131313] py-20 px-4 sm:px-10 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-[#FF014F] tracking-widest text-sm font-medium uppercase">
                        Habilidades Técnicas
                    </span>
                    <h2 className="mt-2 text-4xl font-bold text-white md:text-5xl">
                        Mi Stack Tecnológico
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center p-6 rounded-none aspect-square bg-[#1a1d23] shadow-lg shadow-black/30 border border-transparent hover:border-[#FF014F] transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                                {skill.icon}
                            </div>
                            <h3 className="text-[oklch(70.7%_0.022_261.325)] font-medium text-lg tracking-wide group-hover:text-white transition-colors">
                                {skill.name}
                            </h3>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Habilidades;