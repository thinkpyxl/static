import { create } from 'browser-sync';
import { config } from '../utils/env';

const { port, proxy, online, ui } = config.watch;
const server = create();

function serve (done) {
  server.init({
    server: './',
    port: port,
    ui: false,
    online: false, // reduces start-up time
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
        left: '0',
        right: 'auto',
      },
    },
  });
  done();
}

function reload (done) {
  server.reload();
  done();
}

function quit () {
  console.log('WARNING: build tools modified, killing watch processes');
  process.exit();
}

export { serve, reload, quit, server };