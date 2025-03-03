import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', routes);

app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
app.use("/js",express.static("./node_modules/bootstrap/dist/js"));
export default app;
