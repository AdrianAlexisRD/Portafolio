import { IconAtom, IconRadioactive, IconPlanet, IconAlien  } from '@tabler/icons-react';
import { useEffect, useState } from 'react';


export const Atom = ()=>{
    const [aumentar , setAumentar] = useState(350)
    const esPantallaGrande = window.innerWidth >= 768;

    useEffect(()=>{
    esPantallaGrande && setAumentar(600)
    },[esPantallaGrande])

    return(
        <>
            <IconAtom stroke={2} size={aumentar} className={`absolute ${aumentar === 350? 'top-80 right-14':'top-0 right-0' }  rotate-20  opacity-30  animate-[atomos_5s_ease-in_infinite]` } />
            <IconRadioactive  stroke={2} size={aumentar} className='absolute bottom-0 left-12 opacity-30 animate-[atomos_5s_ease-in_infinite]' />
            <IconPlanet stroke={2} size={aumentar}  className='absolute left-0 top-[40%] opacity-30 animate-[atomos_5s_ease-in_infinite]'/>
            <IconAlien stroke={2} size={aumentar} className='absolute right-0 bottom-[20%] opacity-30 rotate-20 animate-[atomos_5s_ease-in_infinite]'/>

        </>

    )
}