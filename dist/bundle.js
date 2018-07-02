'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
		'h1',
		{ id: 'title',
				className: 'header',
				style: { backgroundColor: 'blue', color: 'white', fontFamily: 'verdana' } },
		'Hello World udah di ubah'
), document.getElementById('react-container'));
