import logger from 'fancy-log';

import app from './src/app';

app.listen(3000, () => {
  logger.info('app listening on port 3000');
});
