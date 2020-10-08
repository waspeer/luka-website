import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

import { SectionProps } from '../section';

import s from './about-section.module.css';

import { Typography } from '~view/components/typography';

interface Props extends SectionProps {
  bio: any[];
}

export function AboutSection({ bio, id }: Props) {
  return (
    <section className={s.aboutSection} id={id}>
      <Typography.SectionTitle>About</Typography.SectionTitle>
      <BlockContent blocks={bio} />
    </section>
  );
}
