import { Text } from './components';

const Emphasis = ({ children }: { children: string }) => {
  return (
    <em
      style={{
        backgroundColor: 'yellow',
        color: 'black',
        fontSize: '32px',
      }}
    >
      {children}
    </em>
  );
};

function App() {
  return (
    <div className="App">
      <Text as="h1">Polymorphic React Components</Text>
      <Text as="p">this is a paragraph</Text>
      <Text as="a" href="#">
        this is a link
      </Text>
      <br />
      <Text as={Emphasis}>this is an emphasised text</Text>
    </div>
  );
}

export default App;
