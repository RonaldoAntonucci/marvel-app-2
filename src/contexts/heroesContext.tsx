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

  totalState: [number, React.Dispatch<SetStateAction<number>>];
  countState: [number, React.Dispatch<SetStateAction<number>>];
  limitState: [number, React.Dispatch<SetStateAction<number>>];
  offsetState: [number, React.Dispatch<SetStateAction<number>>];
}

const HeroesContext = createContext<HeroesContextData>({} as HeroesContextData);

const HeroesProvider: React.FC = ({ children }) => {
  const heroesState = useState<HeroProps[]>([]);
  const nameStartsWithState = useState('');

  const totalState = useState(0);
  const countState = useState(0);
  const limitState = useState(15);
  const offsetState = useState(0);

  return (
    <HeroesContext.Provider
      value={{
        heroesState,
        nameStartsWithState,
        totalState,
        countState,
        limitState,
        offsetState,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};

export { HeroesProvider, HeroesContext };
