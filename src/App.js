import RouterPage from './views/Router.jsx';
import {UiProvider} from './context/UIContext'
import { SocketProvider } from './context/SocketContext.jsx';

function App() {
  return (
    <>
    <UiProvider>
      <SocketProvider>
        <RouterPage/>
      </SocketProvider>
    </UiProvider>
    </>
  );
}

export default App;
