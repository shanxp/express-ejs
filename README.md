## express-with-view v1.0.0 

Sample web project using [Express](https://github.com/expressjs/express), [knex.js](https://github.com/tgriesser/knex) and [pm2](https://github.com/Unitech/pm2). Views are rendered by [ejs](https://github.com/mde/ejs) and i18n support provided by [i18n-node](https://github.com/mashpie/i18n-node). Sessions get stored in [Redis](https://redis.io) using [express session](https://github.com/expressjs/session), [connect redis](https://github.com/tj/connect-redis) and [NodeRedis](https://github.com/NodeRedis/node_redis) libraries. The project also supports a centralised logging and queueing mechanism. Please refer to prerequisite.

# Prerequisite
- Fluntd or td-agent. [Check here for docs](https://docs.fluentd.org/v1.0/articles/quickstart). Sample config file is available under [docs](./docs) folder.
- Agenda queue server


# Installation
- Copy **ecosystem.config.default.js** to **ecosystem.config.js**
- Copy **app/env/default.json** to **app/env/<environment\>.json**  e.g dev.json
- Populate values in the json file
- Run **npm install**
