import { series, watch } from 'gulp';
import { quit, reload } from './serve';
import { scripts, styles, svgs, fonts, clean, sprite, templates  } from '../index';

function monitor (cb) {
  watch(
    [
      `./tools/**/*`,
      `./gulpfile.babel.js`,
      `./babel.config.js`,
      `./package.json`,
    ],
    quit
  );
  watch(
    [
      `./src/**/*.svg`,
    ],
    series(
      svgs,
      reload
    )
  );
  watch(
    [
      `./src/**/*.js`,
      `./views/**/*.js`,
    ],
    series(
      scripts,
      reload
    )
  );
  watch(
    [
      `./src/**/*.scss`,
      `./views/**/*.scss`,
    ],
    series(
      styles,
    )
  );
  watch(
    [
      `./src/images/**/*`,
    ],
    series(
      reload
    )
  );
  watch(
    [
      `./**/*.php`,
      `./**/*.twig`,
      `./**/*.njk`,
    ],
    series(
      templates,
      reload
    )
  );
  cb();
}

export { monitor };