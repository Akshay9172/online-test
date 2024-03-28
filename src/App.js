
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import ThankYouPage from './ThankyouPage';
import RagistrationPage from './RagistrationPage';
import TestInstruction from './TestInstruction';
import Test from './Test';


function App() {
  return (
<Router>
  <Routes>

<Route path={'/'} element={<RagistrationPage/>}  />
<Route path={'/test-instructions'} element={<TestInstruction/>}  />
<Route path={'/thank-you'} element={<ThankYouPage/>}  />
<Route path={'/test'} element={<Test/>}  />


  </Routes>
</Router>
  );
}

export default App;
