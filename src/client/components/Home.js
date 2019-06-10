import React from 'react'

const Home = () => {
	return (
    <div>
      <h2>
        Hello, React SSR!
      </h2>
      <button onClick={() => console.log('Clicked!')}>
        Click Me!
      </button>
    </div>
	)
}

export default Home
