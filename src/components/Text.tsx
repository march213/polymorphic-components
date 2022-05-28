import React, { FC } from 'react';

interface Props<T> {
  as?: T;
  children: React.ReactNode;
}

export const Text = <T extends React.ElementType>({ as, children }: Props<T>) => {
  const Component = as || 'span';
  return <Component>{children}</Component>;
};
