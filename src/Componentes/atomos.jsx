import { IconAtom, IconRadioactive, IconPlanet, IconAlien  } from '@tabler/icons-react';


export const Atom = ()=>{
    return(
        <>
            <IconAtom stroke={2} size={700} className='absolute top-0 right-14 rotate-20  opacity-30  animate-[atomos_5s_ease-in_infinite] ' />
            <IconRadioactive  stroke={2} size={800} className='absolute bottom-0 left-12 opacity-30 animate-[atomos_5s_ease-in_infinite]' />
            <IconPlanet stroke={2} size={600}  className='absolute left-0 top-[40%] opacity-30 animate-[atomos_5s_ease-in_infinite]'/>
            <IconAlien stroke={2} size={700} className='absolute right-0 bottom-[20%] opacity-30 rotate-20 animate-[atomos_5s_ease-in_infinite]'/>
            {/* <IconAtom stroke={2} size={400} className='abosolute top-0 '/>
            <IconAtom stroke={2} size={210}  className='abosolute top-0 '/> */}
        </>

    )
}