import { pipe } from 'ramda';
import { menuMobile } from './menu/menuMobile';
import { lineClamping } from './features/lineClamping';
import { parallax } from './features/parallax';
import scrollDir from 'scrolldir';

pipe(
  scrollDir,
  parallax,
  menuMobile,
  lineClamping,
)();