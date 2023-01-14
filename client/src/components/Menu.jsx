import React from 'react'

const Menu = () => {

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
        
      ];

  return(
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More..</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
