import { createContext, useState } from "react";
import { useSound } from "use-sound"

import gaming from "../assets/sounds/gaming.mp3"

const SoundContext = createContext();

const SoundProvider = ({ children }) => {

  const [playSound, setPlaySound] = useState(false);
  const [gamingSound] = useSound(gaming);

  function playGamingSound() {
      gamingSound()
  }

  return (
    <SoundContext.Provider
      value={{
        playSound,
        setPlaySound,
        playGamingSound
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export { SoundContext, SoundProvider };
