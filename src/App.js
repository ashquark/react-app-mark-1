import ListGroup from './components/ListGroup';
import Button from './components/Button';
import Alert from './components/Alert';
import { useState } from 'react';



function App() {
  let myHeading = "Cities"
  let myList = ['New York', 'Paris', 'London', 'Tokyo', 'Jaipur', 'Sydney'];
  let [displayAlert, setDisplayAlert] = useState(true);

  const handleClick = () => (setDisplayAlert(true));
  const handleClose = () => (setDisplayAlert(false));

  return (
    <div>
      <ListGroup heading={myHeading} items={myList} />
      <br/>
      {displayAlert && <Alert onClose = {handleClose}/>}
      <Button onClick={handleClick}>My Button</Button>
    </div>
  );
}

export default App;
