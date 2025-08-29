import {
  IconCode,
  IconTerminal2,
  IconDatabase,
  IconServer,
  IconApi,
  IconBrandGithub,
  IconBug,
  IconBinary,
  IconCpu,
  IconCloud,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

export const Atom = () => {
  const [size, setSize] = useState(90);
  const esPantallaGrande = window.innerWidth >= 768;

  useEffect(() => {
    esPantallaGrande && setSize(300);
  }, [esPantallaGrande]);

  return (
    <>
      {esPantallaGrande && 
        <>
                  <IconCode
        stroke={1.5}
        size={size}
        className="absolute top-10 right-10 opacity-25 blur-sm text-blue-400"
      />
      <IconTerminal2
        stroke={1.5}
        size={size}
        className="absolute bottom-20 left-2 opacity-25 blur-sm text-green-400 rotate-12"
      />
      <IconDatabase
        stroke={1.5}
        size={size}
        className="absolute top-[40%] left-3 opacity-25 blur-sm text-purple-400"
      />
      <IconServer
        stroke={1.5}
        size={size}
        className="absolute bottom-[30%] right-4 opacity-25 blur-sm text-orange-400 rotate-6"
      />
      <IconApi
        stroke={1.5}
        size={size}
        className="absolute top-[70%] left-0 opacity-25 blur-sm text-pink-400 rotate-270"
      />
      <IconBrandGithub
        stroke={1.5}
        size={size}
        className="absolute top-[20%] right-0 opacity-25 blur-sm text-gray-400"
      />
      <IconBug
        stroke={1.5}
        size={size}
        className="absolute bottom-[10%] right-0 opacity-25 blur-sm text-red-400"
      />
      <IconBinary
        stroke={1.5}
        size={size}
        className="absolute top-[15%] left-0 opacity-25 blur-sm text-yellow-400"
      />
      <IconCpu
        stroke={1.5}
        size={size}
        className="absolute bottom-[50%] right-0 opacity-25 blur-sm text-cyan-400"
      />
      <IconCloud
        stroke={1.5}
        size={size}
        className="absolute top-[60%] right-[40%] opacity-25 blur-sm text-indigo-400"
      />
        </>

      }
    </>
  );
};
