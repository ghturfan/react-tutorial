import Card from './Card';
import Student from './Student';

function App() {
  return (
    <>
      <Student name="John" age={25} isStudent={true}/>
      <Student name="Jane" age={30} isStudent={false}/>
      <Student />
    </>
  );
}

export default App;
