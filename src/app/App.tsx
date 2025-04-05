import './App.css';

import Header from '~/components/Header/Header';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <div>
                <Header />
            </div>
        </>
    );
}

export default App;
