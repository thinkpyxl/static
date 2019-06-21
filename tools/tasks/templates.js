import { paths } from '../utils/paths';
import { dest, src } from 'gulp';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import { compile } from 'gulp-nunjucks';
import pump from 'pump';

function templates (cb) {
  return pump(
    [
      src(`${paths.src.templates}/*.twig`),
      plumber(),
      compile(),
      rename({
        extname: `.html`
      }),
      dest(paths.dist.templates),
    ],
    cb
  );
}

export { templates };