import Link from 'next/link';
import { MenuContainer, MenuItem } from './Menu.styled';

export const Menu = () => {
  const links = [
    { title: 'My Bag', link: '/' },
    { title: 'About', link: '/about' },
  ];

  return (
    <MenuContainer>
      {links.map((item, index) => (
        <MenuItem key={`item-${index}`}>
          <Link href={`${item.link}`}>
            {item.title}
          </Link>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}
