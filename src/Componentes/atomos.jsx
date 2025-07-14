import { IconAtom, IconRadioactive, IconPlanet, IconAlien  } from '@tabler/icons-react';
import { useEffect, useState } from 'react';


export const Atom = ()=>{
    const [aumentar , setAumentar] = useState(200)
    const esPantallaGrande = window.innerWidth >= 768;

    useEffect(()=>{
    esPantallaGrande && setAumentar(400)
    },[esPantallaGrande])

    return(
        <>
            <IconAtom stroke={2} size={aumentar} className={`absolute top-100 right-50 md:top-0 md:right-14' rotate-20  opacity-30  blur ` } />
            <IconRadioactive  stroke={2} size={aumentar} className='absolute md:bottom-0 bottom-40  md:left-12 opacity-30  blur ' />
            <IconPlanet stroke={2} size={aumentar}  className='absolute left-0 md:top-[40%] top-[60%] opacity-30  blur '/>
            <IconAtom stroke={2} size={aumentar} className='absolute right-0 bottom-[20%] opacity-30 rotate-20  blur '/>

        </>

    )
}