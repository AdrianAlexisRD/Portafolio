import { IconAtom, IconRadioactive, IconPlanet } from '@tabler/icons-react';
import { useEffect, useState } from 'react';


export const Atom = ()=>{
    const [aumentar , setAumentar] = useState(400)
    const esPantallaGrande = window.innerWidth >= 768;

    useEffect(()=>{
    esPantallaGrande && setAumentar(600)
    console.log(esPantallaGrande)

    },[esPantallaGrande])

    return(
        <>
            <IconAtom stroke={2} size={aumentar} className={`absolute top-190 md:top-0 md:right-0 rotate-20  opacity-30  blur text-orange-300 ` } />
            <IconRadioactive  stroke={2} size={aumentar} className='absolute md:bottom-[-300px] bottom-[-100px] md:left-12 opacity-30 blur rotate-45 text-blue-600 ' />
            <IconPlanet stroke={2} size={aumentar}  className='absolute left-0 md:top-[62%] top-[48%] opacity-30  blur text-orange-500 '/>
            <IconAtom stroke={2} size={aumentar} className='absolute right-0 bottom-[18%] opacity-30 rotate-20 blur text-blue-600 '/>

        </>

    )
}