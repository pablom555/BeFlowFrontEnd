import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import HolidayList from './components/HolidayList';

const queryClient = new QueryClient();

function App() {


  return (
    <div className="w-screen h-full m-auto p-8">
      <QueryClientProvider client={queryClient}>
        <HolidayList />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
