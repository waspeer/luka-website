import classNames from '@sindresorhus/class-names';
import React from 'react';

import styles from './typography.module.css';

/**
 * UNDERLINED
 *
 * Underlines its children with the colorfull luka-line
 */

interface UnderlinedProps {
  children: React.ReactElement;
}

const Underlined = ({ children }: UnderlinedProps): JSX.Element => {
  const underlinedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      className: classNames(child.props.className, styles.underlined),
    }),
  );

  return <>{underlinedChildren}</>;
};

/**
 * TITLE
 *
 * An underlined title component
 */

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
}

type HeadingElement = React.FunctionComponent<{ children: React.ReactNode; className?: string }>;

const headingMap = new Map<TitleProps['level'], HeadingElement>([
  [1, ({ children, className }) => <h1 className={className}>{children}</h1>],
  [2, ({ children, className }) => <h2 className={className}>{children}</h2>],
  [3, ({ children, className }) => <h3 className={className}>{children}</h3>],
]);

const Title = ({ children, className, level = 1 }: TitleProps) => {
  const Heading = headingMap.get(level);

  if (!Heading) {
    throw new Error(`Unrecognized heading level provided: ${level}`);
  }

  return (
    <Underlined>
      <Heading className={classNames(styles.heading, className)}>{children}</Heading>
    </Underlined>
  );
};

/* ------- */
/** EXPORT */

export const Typography = { Title, Underlined };
