import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor magna aliquip ex ea commod',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      img:
        'https://images.pexels.com/photos/454507/pexels-photo-454507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor magna aliquip ex ea commod',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      img:
        'https://media.istockphoto.com/id/1396832724/photo/close-up-on-hands-holding-chestnuts-after-washing-them-shining-and-reflecting.jpg?b=1&s=612x612&w=0&k=20&c=qaI-FrMfdRA__dSrdDDe9KOyo2XAIaIk58XmoopYjxU=',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor magna aliquip ex ea commod',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      img:
        'https://media.istockphoto.com/id/1352758440/photo/paper-shopping-food-bag-with-grocery-and-vegetables.jpg?b=1&s=612x612&w=0&k=20&c=EsXEe6-_A6U_CXYGWm8INoFdbUmhvC1mj32lvDXpj_o=',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor magna aliquip ex ea commod',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      img:
        'https://images.pexels.com/photos/1653287/pexels-photo-1653287.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor magna aliquip ex ea commod',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img:
          'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 6,
        title: 'Lorem ipsum dolor magna aliquip ex ea commod',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        img:
          'https://images.pexels.com/photos/551622/pexels-photo-551622.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
  ]
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More..</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
