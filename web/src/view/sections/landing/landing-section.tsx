import type { SanityImageObject } from '@sanity/image-url/lib/types/types';

import s from './landing-section.module.css';

import { imageUrlFor } from '~model/sanity/sanity-client';
import { CallToAction } from '~model/types';

interface Props {
  ctas: CallToAction[];
  mainImage: SanityImageObject;
}

export function LandingSection({ ctas, mainImage }: Props) {
  const imgUrl = imageUrlFor(mainImage).width(1000).url();

  return (
    <section id="landing">
      {imgUrl && <img alt="Luka" src={imgUrl} />}

      <div className={s.ctas}>
        {ctas.map(({ text, url }) => (
          <a href={url} target="_blank" rel="noreferrer" key={`cta-${url}`}>
            {text}
          </a>
        ))}
      </div>
    </section>
  );
}
