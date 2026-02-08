"use client";

import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contacto = () => {
    return (
        <section id="contacto" className="w-full bg-[#131313] py-24 px-4 sm:px-10 scroll-mt-20">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12">
                    <span className="text-[#FF014F] tracking-widest text-sm font-medium uppercase">
                        Contacto
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl leading-tight">
                        ¿Tienes algún proyecto en mente? <br />
                    </h2>
                </div>

                <div className="bg-[#1a1d23] p-10 rounded-2xl shadow-xl shadow-black/50 border border-transparent hover:border-[#FF014F]/30 transition-all duration-500">
                    <div className="flex flex-col items-center gap-4 mb-10">
                        <div className="w-16 h-16 bg-[#131313] rounded-full flex items-center justify-center text-[#FF014F] shadow-lg shadow-black/30 mb-2">
                            <FaEnvelope size={28} />
                        </div>
                        <h3 className="text-white text-xl font-medium">Envíame un correo</h3>
                        <a
                            href="mailto:gonzalezsosacarlosalberto@gmail.com"
                            className="text-gray-400 text-lg md:text-xl hover:text-[#FF014F] transition-colors break-all"
                        >
                            gonzalezsosacarlosalberto@gmail.com
                        </a>
                    </div>

                    <div className="w-full h-[1px] bg-gray-700/50 mb-10"></div>

                    <div className="flex flex-col items-center gap-6">
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                            Sigueme en mis redes
                        </p>

                        <div className="flex gap-6">
                            <a
                                href="https://www.linkedin.com/in/carloXx723"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="w-14 h-14 bg-[#131313] rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-[#FF014F] group-hover:text-white group-hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/40">
                                    <FaLinkedinIn size={24} />
                                </div>
                            </a>

                            <a
                                href="https://github.com/carloxx723"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="w-14 h-14 bg-[#131313] rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-[#FF014F] group-hover:text-white group-hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/40">
                                    <FaGithub size={24} />
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/carloxx723/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="w-14 h-14 bg-[#131313] rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-[#FF014F] group-hover:text-white group-hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-black/40">
                                    <FaInstagram size={24} />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-10 ">
                    <p className="text-gray-500 text-sm">
                        © 2026. Todos los derechos reservados por <span className="text-white font-medium">Carlos González</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contacto;