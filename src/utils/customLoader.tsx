import { ImageLoaderProps } from 'next/image';

export const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://example.com/path/to/images/${src}?w=${width}&q=${quality || 75}`;
};