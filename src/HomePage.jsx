import MainList from './MainList';
import { useStoreState } from 'easy-peasy';

const HomePage = ({ isLoading, fetchError }) => {
	const searchResults = useStoreState((state) => state.searchResults);

	return (
		<main className="Home">
			{isLoading && <p className="statusMsg">Loading posts...</p>}
			{!isLoading && fetchError && <p className="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
			{!isLoading && !fetchError && (searchResults.length ? <MainList posts={searchResults} /> : <p className="statusMsg">No posts to display.</p>)}
		</main>
	)
}

export default HomePage;