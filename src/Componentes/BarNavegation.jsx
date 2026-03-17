import { useState } from "react"
import { IconMenu2, IconX } from '@tabler/icons-react';

export const Navegation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: '#about', label: 'Sobre mí' },
        { href: '#projects', label: 'Proyectos' },
        { href: '#studies', label: 'Estudios' },
        { href: '#experience', label: 'Experiencia' },
        { href: '#contact', label: 'Contacto' },
    ];

    return (
        <>
            {/* Mobile hamburger button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white hover:border-sky-400/50 transition-all duration-300"
            >
                {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </button>

            {/* Mobile full-screen menu */}
            <div className={`md:hidden fixed inset-0 z-40 bg-slate-950/97 backdrop-blur-lg flex items-center justify-center transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <ul className="flex flex-col gap-8 text-center">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="text-3xl font-bold text-white/70 hover:text-sky-400 transition-colors duration-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop nav - fixed right side */}
            <nav className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-slate-950/75 backdrop-blur-md border border-white/10 border-r-0 rounded-l-2xl shadow-xl shadow-black/40">
                <ul className="flex flex-col gap-2 p-4 px-6">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="relative group flex items-center text-white/60 hover:text-white transition-all duration-200 text-lg font-medium py-1"
                            >
                                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 to-violet-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
