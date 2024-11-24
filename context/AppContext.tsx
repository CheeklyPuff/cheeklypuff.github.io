import React, { useContext } from 'react';

export interface IAppContext {
  player: string;
  playField: string;
  dialogOpen: boolean;
  itemResetStatus: boolean;
  expansions: string[];
  setPlayer: (val: string) => void;
  setPlayField: (val: string) => void;
  setDialogOpen: (val: boolean) => void;
  setItemResetStatus: (val: boolean) => void;
  setExpansions: (val: string[]) => void;
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppContextProvider = AppContext.Provider;

export function useAppContext() {
  return useContext(AppContext);
}