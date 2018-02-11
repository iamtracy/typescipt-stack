const cors = require('cors');
const corsOptions = {
  preflightContinue: true,
  origin: 'http://localhost:4200',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
};
const Http = cors(corsOptions);

export default Http;