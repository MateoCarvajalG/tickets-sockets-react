import RouterPage from './views/Router.jsx';
import {UiProvider} from './context/UIContext'

function App() {
  return (
    <>
    <UiProvider>
      <RouterPage/>
    </UiProvider>
    </>
  );
}

export default App;
