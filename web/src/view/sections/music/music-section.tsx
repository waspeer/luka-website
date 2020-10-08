import React from 'react';

import { SectionProps } from '../section';

import s from './music-section.module.css';

import { Typography } from '~view/components/typography';
import { Release } from '~model/types';
import { imageUrlFor } from '~model/sanity/sanity-client';

interface Props extends SectionProps {
  releases: Release[];
}

export function MusicSection({ id, releases }: Props) {
  return (
    <section className={s.musicSection} id={id}>
      <Typography.SectionTitle>Music</Typography.SectionTitle>

      <ul>
        {releases.map(({ image, name, url }) => (
          <li key={`release-${name}`}>
            <a href={url} target="_blank" rel="noreferrer" title={name}>
              <img alt={name} src={imageUrlFor(image).width(400).height(400).url()!} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
