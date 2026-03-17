import { IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp, IconMail } from '@tabler/icons-react';
import { useInView } from '../hooks/useInView';

export const Contact = () => {
    const { ref, inView: desplegar } = useInView();

    const links = [
        {
            href: 'https://www.linkedin.com/in/adri%C3%A1n-a-lopez-santos-669ba4333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            icon: <IconBrandLinkedin stroke={2} size={50} />,
            label: 'LinkedIn',
            color: 'hover:border-[#0077b5]/60 hover:bg-[#0077b5]/10 hover:text-[#0077b5]',
        },
        {
            href: 'https://github.com/AdrianAlexisRD',
            icon: <IconBrandGithub stroke={2} size={50} />,
            label: 'GitHub',
            color: 'hover:border-white/40 hover:bg-white/10 hover:text-white',
        },
        {
            href: 'https://wa.me/18092322812',
            icon: <IconBrandWhatsapp stroke={2} size={50} />,
            label: 'WhatsApp',
            color: 'hover:border-[#25d366]/60 hover:bg-[#25d366]/10 hover:text-[#25d366]',
        },
        {
            href: 'mailto:Alexaghm411@gmail.com?subject=Hola&body=Quiero contactarte',
            icon: <IconMail stroke={2} size={50} />,
            label: 'Gmail',
            color: 'hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-400',
        },
    ];

    return (
        <section
            ref={ref}
            id="contact"
            className={`flex flex-col
            gap-7 p-8 items-center
            w-[99%] md:w-[60%] max-w-xl
            h-fit border border-orange-400/30
            rounded-2xl text-center
            bg-slate-950/60 backdrop-blur-md shadow-xl shadow-black/40
            transition-all duration-700 ease-out
            ${desplegar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
        >
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                Contáctame
            </h2>
            <ul className="grid grid-cols-2 gap-4 w-full mt-2">
                {links.map(({ href, icon, label, color }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-slate-900/50 text-white/70 transition-all duration-300 ${color}`}
                        >
                            {icon}
                            <span className="font-bold text-sm">{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
