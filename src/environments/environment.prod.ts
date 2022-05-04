import { environmentGlobal } from './environment-global';

export const environment = {
  production: true,
  api: environmentGlobal.api,
  cache: environmentGlobal.cache,
  cacheBot: environmentGlobal.chatBot,
  reservations: environmentGlobal.reservations,
  wpp: environmentGlobal.wpp
};
