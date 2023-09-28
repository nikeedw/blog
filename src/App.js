import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import HomePage from './HomePage';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import AboutPage from './AboutPage';
import PahErrorPage from './PathErrorPage';
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';

function App() {
	const setPosts = useStoreActions((actions) => actions.setPosts);

	const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

	useEffect(() => {
		setPosts(data);
	}, [data, setPosts])

	return (
		<div className="App">
			<Header title="React App" />
			<Navigation />
			<Switch>
				<Route exact path="/">
					<HomePage
						isLoading={isLoading}
						fetchError={fetchError}
					/>
				</Route>
				<Route exact path="/post" component={NewPost} />
				<Route path="/edit/:id" component={EditPost} />
				<Route path="/post/:id" component={PostPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="*" component={PahErrorPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;