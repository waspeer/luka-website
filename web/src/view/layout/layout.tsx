import classNames from '@sindresorhus/class-names';
import { useState } from 'react';
import { FaGlobeEurope } from 'react-icons/fa';

import s from './layout.module.css';

import { icons } from '~lib/icons';
import { PageInfo, SocialLink as SocialLinkType } from '~model/types';
import { Typography } from '~view/components/typography';

interface LayoutProps {
  children?: React.ReactNode;
  pages: PageInfo[];
  socialLinks: SocialLinkType[];
}

export const Layout = ({ children, pages, socialLinks }: LayoutProps) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const closeMenu = () => {
    setMenuOpened(false);
  };

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={s.layout}>
      <header className={classNames(s.header, menuOpened && s.menuOpened)}>
        <Typography.Title>Luka</Typography.Title>

        <button
          aria-expanded={menuOpened}
          aria-label={`${menuOpened ? 'hide' : 'show'} menu`}
          id="main-menu-button"
          onClick={toggleMenu}
          type="button"
        >
          {menuOpened ? 'close' : 'menu'}
        </button>

        <nav aria-labelledby="main-menu-button" className={s.menu}>
          <ul className={s.mainNav}>
            {pages
              .flatMap(({ external, name, title }) => [
                <li key={`navItem-${name}`}>
                  <Typography.Underlined>
                    <a href={`${external ? '/' : '#'}${name}`} onClick={closeMenu}>
                      {title}
                    </a>
                  </Typography.Underlined>
                </li>,
                <li key={`navItem-${name}-divider`} className={s.divider} />,
              ])
              .slice(0, -1)}
          </ul>

          <ul className={s.socials}>
            {socialLinks.map((link) => (
              <li key={`socialLink-${link.name}`}>
                <SocialLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={s.main}>{children}</main>
    </div>
  );
};

function SocialLink({ iconName, name, url }: SocialLinkType) {
  const Icon = icons[iconName] ?? FaGlobeEurope;

  return (
    <a href={url} title={name}>
      <Icon />
    </a>
  );
}
