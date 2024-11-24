import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ItemList } from '../components/ItemList/ItemList';
import { AppContext, IAppContext } from '../context/AppContext';
import { items } from '../json/items';
import { expansionItems } from '../json/expansions';
import { PlayerSelect } from '../components/PlayerSelect/PlayerSelect';

export default function Home() {
  const { player }: IAppContext = useContext(AppContext);
  const nergigante = expansionItems.nergigante.items;
  const getAllItems = [...items, ...nergigante];

  return (
    <>
      <Helmet>
        <title>My bag</title>
        <meta name="My Bag" content="Monster Hunter Boardgame Item Maganer" />
      </Helmet>
      <PlayerSelect />
      {player && <ItemList data={getAllItems} />}
    </>
  );
}