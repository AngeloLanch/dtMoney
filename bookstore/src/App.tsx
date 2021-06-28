import GlobalStyles from './styles/GlobalStyles';
import { Routes } from './router';
import { AppProvider } from './contexts';

function App() {
  return (
    <div>
      <AppProvider>
        <GlobalStyles />
        <Routes />
      </AppProvider>
    </div>
  );
}

export default App;
