import React from 'react'
import Saif from '../image/saif.jpg'
import Edit from '../image/edit.png'
import Delete from '../image/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'


const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <div className="user">
          <img src={Saif} />
          <div className="info">
            <span>Md.Saif</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          praesentium.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          molestiae suscipit eligendi aperiam qui sequi ratione dolores,
          cupiditate maxime voluptate dicta laborum blanditiis nemo ipsum odit
          molestias eum. Non, quia? Quisquam expedita cumque rem deleniti
          perferendis nihil natus facere distinctio, aut, eaque molestiae
          quibusdam et magni laboriosam! Facere, excepturi enim?
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          deleniti itaque nihil vero excepturi! Quod mollitia quam, eos dolor
          quo quidem dignissimos, minus maiores laborum inventore praesentium.
          A, maiores. Provident possimus neque beatae? Rerum, quaerat ad.
          Accusamus perspiciatis odio suscipit. Repudiandae sed nesciunt enim,
          magni animi nulla voluptatibus sequi laudantium!
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          maxime, officia asperiores quas ducimus quam sunt quo, atque minima
          veniam, culpa quia tempore nisi alias error eius dolorum autem quasi
          dolores. Amet debitis a sapiente eum dolores vero ab voluptatem
          similique nulla iure facere adipisci ea eveniet quia animi repellat
          magnam dolorem, quisquam mollitia cum eaque. Porro, reiciendis
          adipisci quam quibusdam perspiciatis provident obcaecati quas in,
          animi corrupti rem soluta?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
          ullam! Necessitatibus culpa pariatur accusamus quisquam aspernatur
          deserunt suscipit eius repellendus aliquam illum reprehenderit quam
          adipisci, quaerat, numquam facere. Accusantium vel sunt exercitationem
          labore possimus? Ea, consequuntur nulla. Repellendus illo atque, ipsa
          quod quidem sint placeat, doloribus aspernatur facere vitae incidunt
          mollitia reiciendis Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Consequuntur deleniti itaque nihil vero excepturi!
          Quod mollitia quam, eos dolor quo quidem dignissimos, minus maiores
          laborum inventore praesentium. A, maiores. Provident possimus neque
          beatae? Rerum, quaerat ad. Accusamus perspiciatis odio suscipit.
          Repudiandae sed nesciunt enim, magni animi nulla voluptatibus dolorum
          numquam, nobis nam error minima fugit velit dolores nisi. Nostrum enim
          earum, possimus dolore eligendi consequuntur incidunt harum sit
          temporibus omnis quam! Mollitia quam deleniti sapiente, voluptatem
          vero cumque a necessitatibus repellendus vitae libero laboriosam autem
          incidunt assumenda corrupti omnis aspernatur sunt soluta
          reprehenderit! Dolorum, velit sint.
        </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
