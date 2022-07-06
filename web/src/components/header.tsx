import { createSignal } from 'solid-js';

import type { PageInfo } from '../lib/types';

import s from './header.module.css';

interface HeaderProperties {
  pages: PageInfo[];
  socialLinks?: string;
}

export function Header({ pages, socialLinks }: HeaderProperties) {
  const [menuOpened, setMenuOpened] = createSignal(false);

  const toggleMenu = () => {
    setMenuOpened((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpened(false);
  };

  return (
    <header class={[s.header, menuOpened() && s.menuOpened].filter(Boolean).join(' ')}>
      <h1 class="heading">Luka</h1>

      <button
        aria-expanded={menuOpened()}
        aria-label={`${menuOpened() ? 'hide' : 'show'} menu`}
        id="main-menu-button"
        onClick={toggleMenu}
        type="button"
      >
        {menuOpened() ? 'close' : 'menu'}
      </button>

      <nav aria-labelledby="main-menu-button" class={s.menu}>
        <ul class={s.mainNav}>
          {pages
            .flatMap(({ external, name, title }) => [
              <li>
                <a class="underlined" href={`${external ? '/' : '#'}${name}`} onClick={closeMenu}>
                  {title}
                </a>
              </li>,
              <li class={s.divider} />,
            ])
            .slice(0, -1)}
        </ul>

        {socialLinks}
      </nav>
    </header>
  );
}
