/* eslint-disable jsx-a11y/anchor-has-content */
import { SectionProps } from '../section';

import s from './shows-section.module.css';

import { Typography } from '~view/components/typography';
import { useRemoteScript } from '~lib/hooks/use-remote-script';

type Props = SectionProps;

export function ShowsSection({ id }: Props) {
  useRemoteScript({ id: 'songkick-widget', url: '//widget.songkick.com/8712383/widget.js' });

  return (
    <section className={s.showsSection} id={id}>
      <Typography.SectionTitle>Shows</Typography.SectionTitle>

      <a
        aria-label="Songkick Widget"
        href="https://www.songkick.com/artists/8712383"
        className={`songkick-widget ${s.widget}`}
        data-theme="light"
        data-detect-style="true"
        data-background-color="transparent"
        data-locale="en"
      />
    </section>
  );
}
