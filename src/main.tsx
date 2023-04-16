import ReactDOM from 'react-dom/client';

function App() {
	return (
		<div>
			<p>Hello World!</p>
		</div>
	);
}

const element = document.getElementById('root');

if (element) {
	const root = ReactDOM.createRoot(element);

	root.render(<App/>);
}

