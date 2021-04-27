import React from 'react';
import Router, { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import NavLink from 'components/nav-link/nav-link';
import { OFFER_MENU_ITEM, HELP_MENU_ITEM } from 'site-settings/site-navigation';
import LanguageSwitcher from '../language-switcher/language-switcher';
import { HelpIcon } from 'assets/icons/HelpIcon';
import { RightMenuBox ,Boxed} from './right-menu.style';
import Popover from 'components/popover/popover';
import * as categoryMenuIcons from 'assets/icons/category-menu-icons';
import { FormattedMessage } from 'react-intl';
import { CATEGORY_MENU_ITEMS } from 'site-settings/site-navigation';
import { MenuDown } from 'assets/icons/MenuDown';
import { OfferIcon } from 'assets/icons/OfferIcon';
import { Notications } from 'assets/icons/Notications';
import { NotificationIcon } from 'assets/icons/NotificationIcon';
import {
  MainMenu,
  IconWrapper,
  MenuItem,
  SelectedItem,
  Icon,
  Arrow,
  LeftMenuBox,
} from '../../../header/menu/left-menu/left-menu.style';
const AuthMenu = dynamic(() => import('../auth-menu'), { ssr: false });

type Props = {
  onLogout: () => void;
  onJoin: () => void;
  avatar: string;
  isAuthenticated: boolean;
};
const CategoryIcon = ({ name }) => {
  const TagName = categoryMenuIcons[name];
  return !!TagName ? <TagName /> : <p>Invalid icon {name}</p>;
};
export const RightMenu: React.FC<Props> = ({
  onLogout,
  avatar,
  isAuthenticated,
  onJoin,
}) => {

  const router = useRouter();
  const initialMenu = CATEGORY_MENU_ITEMS.find(
    (item) => item.href === router.asPath
  );
  const [activeMenu, setActiveMenu] = React.useState(
    initialMenu ?? CATEGORY_MENU_ITEMS[0]
  );
  const CategoryMenu = (props: any) => {
    const handleOnClick = (item) => {
      if (item.dynamic) {
        Router.push('/[type]', `${item.href}`);
        props.onClick(item);
        return;
      }
      Router.push(`${item.href}`);
      props.onClick(item);
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {CATEGORY_MENU_ITEMS.map((item) => (
          <MenuItem key={item.id} {...props} onClick={() => handleOnClick(item)}>
            <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
          </MenuItem>
        ))}
      </div>
    );
  };
  return (
    <RightMenuBox>
      {/* <NavLink
        className="menu-item"
        href={OFFER_MENU_ITEM.href}
        label={OFFER_MENU_ITEM.defaultMessage}
        intlId={OFFER_MENU_ITEM.id}
      /> */}
      {/* <NavLink
        className="menu-item"
        href={HELP_MENU_ITEM.href}
        label={HELP_MENU_ITEM.defaultMessage}
        intlId={HELP_MENU_ITEM.id}
        iconClass="menu-icon"
        icon={<HelpIcon />}
      /> */}
      <Boxed>
          <Notications></Notications>
          <OfferIcon></OfferIcon>
          <NotificationIcon></NotificationIcon>
      </Boxed>
    <MainMenu>
            <Popover
              className="right"
              handler={
                <SelectedItem>
                  <span>
                    <span>
                      <FormattedMessage
                        id={activeMenu?.id}
                        defaultMessage={activeMenu?.defaultMessage}
                      />
                    </span>
                  </span>
                  <Arrow>
                    <MenuDown />
                  </Arrow>
                </SelectedItem>
              }
              content={<CategoryMenu onClick={setActiveMenu} />}
            />
      </MainMenu>

      <LanguageSwitcher />

      <AuthMenu
        avatar={avatar}
        onJoin={onJoin}
        onLogout={onLogout}
        isAuthenticated={isAuthenticated}
      />
    </RightMenuBox>
  );
};
