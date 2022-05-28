import { Text } from './components';

function App() {
  return (
    <div className="App">
      <Text as="h1">Polymorphic React Components</Text>
      <Text as="p">this is a paragraph</Text>
      <Text as="a" href="#">
        this is a link
      </Text>
    </div>
  );
}

export default App;
