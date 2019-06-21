import path from 'path';

const { resolve } = path;
const root = resolve(process.env.PWD);

const paths = {
  src: {
    styles: `${root}/src/styles/`,
    scripts: `${root}/src/scripts/`,
    images: `${root}/src/images/`,
    templates: `${root}/src/views/`,
    fonts: `${root}/src/fonts/`,
    svgs: `${root}/src/svgs/`,
    blocks: `${root}/views/Blocks/`,
  },
  dist: {
    styles: `${root}/dist/styles/`,
    scripts: `${root}/dist/scripts/`,
    images: `${root}/dist/images/`,
    templates: `${root}/`,
    fonts: `${root}/dist/fonts/`,
    svgs: `${root}/dist/svgs/`,
    blocks: `${root}/dist/Blocks/`,
  }
};

export { paths, root };
