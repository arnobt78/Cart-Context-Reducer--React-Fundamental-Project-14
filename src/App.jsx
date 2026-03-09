/**
 * Root layout component.
 * Shows a loading spinner while cart data is fetched, then Navbar + CartContainer.
 * All cart state is provided by AppProvider in main.jsx; this component only consumes it.
 */
// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';
// items

function App() {
  const { loading } = useGlobalContext();
  // Show loading UI until initial API fetch completes (see context.jsx fetchData)
  if (loading) {
    return (
      <main>
        <div className='loading' style={{ marginTop: '6rem' }}></div>
      </main>
    );
  }
  // Main app: top bar (cart count) + cart list or empty state
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
