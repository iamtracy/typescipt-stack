// From Webpack https://webpack.js.org/guides/environment-variables/
// Setting up your env variable without assignment, 
// --env.production sets --env.production to true by 
// default. There are also other syntaxes that you can 
// use. See the webpack CLI documentation for more information.

type Environment = { 
    api: string,
    production: boolean
};

const environment: Environment = {
  api: process.env.domain,
  production: false
};

export default environment;