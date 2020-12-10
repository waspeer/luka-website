import React from 'react';
import SanityBlockContent, { MarkSerializerProps } from '@sanity/block-content-to-react';

/**
 * SERIALIZERS
 */

function Link({ children, mark }: MarkSerializerProps) {
  return (
    <a href={mark.url} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

/**
 * BLOCK CONTENT
 */

interface BlockContentProps {
  text: any[];
}

const BlockContent = ({ text }: BlockContentProps) => {
  return (
    <SanityBlockContent
      blocks={text}
      serializers={{
        marks: {
          link: Link,
        },
      }}
    />
  );
};

export { BlockContent };
