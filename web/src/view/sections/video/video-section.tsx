import React from 'react';
import { isFuture } from 'date-fns';
import ReactPlayer from 'react-player';

import { SectionProps } from '../section';

import s from './video-section.module.css';

import { Typography } from '~view/components/typography';
import { Video } from '~model/types';

interface Props extends SectionProps {
  videos: Video[];
}

export function VideoSection({ id, videos }: Props) {
  return (
    <section className={s.videoSection} id={id}>
      <Typography.SectionTitle>Videos</Typography.SectionTitle>

      <ul>
        {videos
          .filter(({ date }) => !isFuture(new Date(date)))
          .map(({ name, url }) => (
            <li key={`video-${name}`}>
              <ReactPlayer height="203px" width="100%" url={url} />
            </li>
          ))}
      </ul>
    </section>
  );
}
