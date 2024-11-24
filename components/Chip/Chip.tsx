import {  StyledChip } from './Chip.styled';
import Image from 'next/image';
import Helm from '../../assets/icons/helm.png';
import Mail from '../../assets/icons/mail.png';
import Greaves from '../../assets/icons/greaves.png';
import Axe from '../../assets/icons/switch_axe.png';
import Blades from '../../assets/icons/blades.png';
import SwordShield from '../../assets/icons/sword_shield.png';
import GreatSword from '../../assets/icons/great_sword.png';
import Bow from '../../assets/icons/bow.png';
import Gunlance from '../../assets/icons/gunlance.png';
import Glaive from '../../assets/icons/insect_glaive.png';
import ChargeBlade from '../../assets/icons/charge_blade.png';
import HeavyBowGun from '../../assets/icons/heavy_bowgun.png';

export const Chip = ({ usageItem }) => {
  const iconsMap = {
    Helm,
    Mail,
    Greaves,
    Axe,
    Blades,
    SwordShield,
    GreatSword,
    Bow,
    Gunlance,
    Glaive,
    ChargeBlade,
    HeavyBowGun
  };
  
  const renderIcon = (icon: string) => iconsMap[icon];

  return (
    <StyledChip
      size="small"
      label={usageItem.name}
      avatar={<Image src={renderIcon(usageItem.icon)} width="18" height="18" />}
      style={{backgroundColor:usageItem.color, marginRight: 3, marginBottom: 3}} />
  )
}