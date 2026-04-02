import { RouterProvider } from 'react-router';
import { router } from './routes';
import { Toaster } from './components/ui/sonner';
import { ScrollToTopButton } from "./components/ScrollToTopButton";

// Main App Component
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
      <ScrollToTopButton />
    </>
  );
}

export default App;