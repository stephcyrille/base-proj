import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Content } from './components/content';
import { Header } from './components/header';

function App() {
  return (
  <ChakraProvider>
    <div>
     <Header/>
     <Content/>
    </div>
  </ChakraProvider>
   
  );
}

export default App;
