const app = require('../app');
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listen on http://localhost:${port}`));