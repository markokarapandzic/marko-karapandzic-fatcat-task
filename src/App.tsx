import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Landing } from '@homework-task/pages/landing/Landing';
import { TestPage } from '@homework-task/pages/TestPage';

import './styles.css';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                {/* <Landing /> */}
                <TestPage />
            </main>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    );
}

export default App;
