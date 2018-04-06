import { configure } from '@kadira/storybook';
//import '../src/dist/css/default.css';

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);