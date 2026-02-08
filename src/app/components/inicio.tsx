import Image from "next/image";
import { Inter } from "next/font/google";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const inter = Inter({
    weight: "400",
    subsets: ["latin"],
});

const Inicio = () => {
    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                    <p className={`${inter.className} text-sm md:text-base tracking-[0.2em] uppercase text-[oklch(70.7%_0.022_261.325)]`}>
                        Hola, mi nombre es
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        <span className="text-[#FF014F]">Carlos</span>{' '}
                        <span className="text-white">González</span>
                    </h1>

                    <h2 className={`${inter.className} text-base md:text-2xl text-[oklch(70.7%_0.022_261.325)]`}>
                        Ingeniero en Sistemas Computacionales
                    </h2>

                    <p className="text-white leading-relaxed max-w-lg mx-auto md:mx-0 text-base md:text-lg">
                        Soy un desarrollador mexicano y estudiante de 9no semestre de
                        Ingeniería en Sistemas en el Tecnológico de Morelia. Me apasiona
                        la tecnología, el deporte y la naturaleza, elementos que equilibran
                        mi enfoque creativo y analítico. Cuento con experiencia en el
                        desarrollo de aplicaciones web y de escritorio, especializándome
                        en crear soluciones dinámicas con tecnologías modernas, tomando
                        en cuenta la calidad, seguridad e infraestructura de los sistemas.
                    </p>

                    <div className="pt-0 flex gap-5 justify-center md:justify-start">

                        <a
                            href="https://www.linkedin.com/in/carloXx723"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-14 h-14 flex items-center justify-center rounded-lg   bg-transparent transition-all duration-300 hover:bg-[#FF014F] hover:border-[#FF014F] hover:-translate-y-1"
                        >
                            <FaLinkedinIn size={22} className="text-[oklch(70.7%_0.022_261.325)] group-hover:text-white transition-colors" />
                        </a>

                        <a
                            href="https://github.com/carloxx723"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-14 h-14 flex items-center justify-center rounded-lg   bg-transparent transition-all duration-300 hover:bg-[#FF014F] hover:border-[#FF014F] hover:-translate-y-1"
                        >
                            <FaGithub size={22} className="text-[oklch(70.7%_0.022_261.325)] group-hover:text-white transition-colors" />
                        </a>

                        <a
                            href="https://www.instagram.com/carloxx723/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-14 h-14 flex items-center justify-center rounded-lg   bg-transparent transition-all duration-300 hover:bg-[#FF014F] hover:border-[#FF014F] hover:-translate-y-1"
                        >
                            <FaInstagram size={22} className="text-[oklch(70.7%_0.022_261.325)] group-hover:text-white transition-colors" />
                        </a>

                        <a
                            href="mailto:gonzalezsosacarlosalberto@gmail.com"
                            className="group w-14 h-14 flex items-center justify-center rounded-lg  bg-transparent transition-all duration-300 hover:bg-[#FF014F] hover:border-[#FF014F] hover:-translate-y-1"
                        >
                            <FaEnvelope size={22} className="text-[oklch(70.7%_0.022_261.325)] group-hover:text-white transition-colors" />
                        </a>

                    </div>
                </div>

                <div className="flex justify-center order-1 md:order-2 relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-[#FF014F] opacity-80 z-0"></div>

                        <div className="absolute inset-0 rounded-full border-2 border-gray-800 z-10"></div>

                        <div className="relative w-full h-full rounded-full overflow-hidden z-20 p-2">
                            <Image
                                src="/foto-carlos.png"
                                alt="Carlos González"
                                fill
                                className="object-cover object-top rounded-full"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Inicio;