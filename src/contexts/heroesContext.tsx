import React, { createContext, SetStateAction, useState } from 'react';

interface HeroProps {
  id: string;
  name: string;

  thumbnail: {
    path: string;
    extension: string;
  };
}

interface HeroesContextData {
  heroesState: [HeroProps[], React.Dispatch<SetStateAction<HeroProps[]>>];
  nameStartsWithState: [string, React.Dispatch<SetStateAction<string>>];
}

const HeroesContext = createContext<HeroesContextData>({} as HeroesContextData);

const HeroesProvider: React.FC = ({ children }) => {
  const heroesState = useState<HeroProps[]>([]);
  const nameStartsWithState = useState('');

  return (
    <HeroesContext.Provider value={{ heroesState, nameStartsWithState }}>
      {children}
    </HeroesContext.Provider>
  );
};

export { HeroesProvider, HeroesContext };
