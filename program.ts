import StartUp from './startUp';

let port = process.env.PORT || 3000;

StartUp.app.listen(port, () => console.log(`Server running on port ${port}`)); 