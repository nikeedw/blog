import Header from './Header';
import Nav from './Navigation';
import Footer from './Footer';
import Home from './HomePage';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './AboutPage';
import Missing from './PathErrorPage';
import { Route, Switch } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
	return (
		<div className="App">
			<Header title="React App" />
			<DataProvider>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/post" component={NewPost} />
					<Route path="/edit/:id" component={EditPost} />
					<Route path="/post/:id" component={PostPage} />
					<Route path="/about" component={About} />
					<Route path="*" component={Missing} />
				</Switch>
			</DataProvider>
			<Footer />
		</div>
	);
}

export default App;