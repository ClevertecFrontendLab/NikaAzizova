import './App.css';

import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <div>Start sprint 1</div>
        </>
    );
}

export default App;
