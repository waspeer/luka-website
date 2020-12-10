import { format, isFuture } from 'date-fns';

import { SectionProps } from '../section';

import s from './news-section.module.css';

import { NewsItem } from '~model/types';
import { BlockContent } from '~view/components/block-content';
import { Typography } from '~view/components/typography';

interface Props extends SectionProps {
  items: NewsItem[];
}

export function NewsSection({ id, items }: Props) {
  const { date, text, title } = items.filter((item) => !isFuture(new Date(item.date)))[0];

  return (
    <section className={s.newsSection} id={id}>
      <Typography.SectionTitle>News</Typography.SectionTitle>

      <section key={`newsItem-${date.toString()}`}>
        <h3>
          {format(new Date(date), 'd.M.y')} - {title}
        </h3>

        <BlockContent text={text} />
      </section>
    </section>
  );
}
