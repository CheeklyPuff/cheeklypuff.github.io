import { Grid } from '@mui/material';
import type { AppProps } from 'next/app';
import { Menu } from '../components/Menu/Menu';
import { GlobalStyle, ComponentContainer, BgShadow } from '../styles/_app.styled';
import 'styles/globals.css';
import { AppContextProvider, IAppContext } from '../context/AppContext';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [player, setPlayer] = useState('');
  const [playField, setPlayField] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [itemResetStatus, setItemResetStatus] = useState(false);
  const [expansions, setExpansions] = useState([]);
  const appContext: IAppContext = {
    player,
    playField,
    dialogOpen,
    itemResetStatus,
    expansions,
    setPlayer,
    setPlayField,
    setDialogOpen,
    setItemResetStatus,
    setExpansions
  };
  
  return (
    <>
      <GlobalStyle />
      <Grid container spacing={2}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <AppContextProvider value={appContext}>
            <ComponentContainer>
              <Menu />
              <Component {...pageProps} />
            </ComponentContainer>
          </AppContextProvider>
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
      <BgShadow />
    </>
  );
}
