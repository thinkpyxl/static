import { series, parallel } from 'gulp';
import { scripts, styles, fonts, images, svgs, clean, monitor, vendors, templates } from './tools/index';
import { serve } from './tools/tasks/serve';

const start = parallel(
  serve,
  monitor
);

const build = series(
  clean,
  series(
    styles,
    scripts,
    fonts,
    svgs,
    images,
    vendors,
    templates,
  )
);

const prod = series(
  clean,
  parallel(
    scripts,
    styles,
    fonts,
    svgs,
    images,
    vendors,
    templates,
  )
);

export { build, start, prod, styles, scripts, fonts, images, vendors, templates };