// From Webpack https://webpack.js.org/guides/environment-variables/
// Setting up your env variable without assignment, 
// --env.production sets --env.production to true by 
// default. There are also other syntaxes that you can 
// use. See the webpack CLI documentation for more information.

type EnvConfig = { api: string, databaseUrl: string, production: boolean};

const environment: EnvConfig = {
  api: process.env.domain,
  databaseUrl: `mongodb://${process.env.domain}:27017/localDb`,
  production: Boolean(process.env.production)
};

export default environment;