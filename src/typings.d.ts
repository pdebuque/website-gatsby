declare module "*.module.css";

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.pdf"

declare module 'react-lazy-load' {
  import { ReactNode } from 'react';

  interface LazyLoadProps {
    height?: number | string;
    offset?: number | number[];
    once?: boolean;
    throttle?: number;
    debounce?: boolean | number;
    scroll?: boolean;
    resize?: boolean;
    children: ReactNode;
  }

  const LazyLoad: React.FC<LazyLoadProps>;

  export default LazyLoad;
}