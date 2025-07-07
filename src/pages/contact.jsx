import { IconBrandLinkedin, IconBrandGithub ,IconBrandWhatsapp, IconMail } from '@tabler/icons-react';


export const Contact = () =>{
    return(
        <section className="flex justify-center flex-col items-center w-[99%] md:w-[40%] h-[50%] border-blue-950 rounded-r-2xl border-l-0 border-6 moveRight bg-[#121212]/50 ">
            <h2 className='text-3xl text-white font-extrabold mb-15'>Contacta me</h2>
            <ul className='text-white flex flex-col gap-5 '>
                <div className='flex gap-8'>
                    <li>
                        <a className='flex items-center hover:text-blue-950 transition-all duration-500 ease-in-out active:scale-90 aparecer' href='https://www.linkedin.com/in/adri%C3%A1n-a-lopez-santos-669ba4333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank">
                            <IconBrandLinkedin stroke={2} size={60} className='' />
                            <h2 className='text-3xl'>Linkedin</h2>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center hover:text-blue-950 transition-all duration-500 ease-in-out active:scale-90 aparecer'  href="https://github.com/Alex09121995/Curso-fullstack-talenting" target="_blank">
                            <IconBrandGithub stroke={2} size={60} /> 
                            <h2 className='text-3xl'>Github</h2>

                        </a>
                    </li>
                </div>
                <div className='flex gap-5'>
                    <li>
                        <a className='flex items-center hover:text-blue-950 active:scale-90 transition-all duration-500 ease-in-out aparecer' href='https://wa.me/18092322812' target="_blank">
                            <IconBrandWhatsapp stroke={2} size={60}  />
                            <h2 className='text-3xl'> Whatsapp</h2>
                        </a>
                    </li>
                    <li> 
                        <a className='flex items-center hover:text-blue-950 active:scale-90 transition-all duration-500 ease-in-out aparecer' href="mailto:Alexaghm411@gmail.com?subject=Hola&body=Quiero contactarte" target="_blank">
                            <IconMail stroke={2} size={60} />
                            <h2 className='text-3xl'>Gmail</h2>

                        </a>
                    </li>
                </div>
            </ul>
        </section>
    )
}