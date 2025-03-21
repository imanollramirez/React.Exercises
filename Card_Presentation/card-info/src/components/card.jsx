import './styles.css'
import ProfilePic from '../profilePic.jpg'

const Card = ({Name, Occupation, Description}) => {
    return(
        <>
        <aside className="profile-card">
  <header>
    <a target="_blank" href="#">
      <img src={ProfilePic} className="hoverZoomLink"/>
    </a>

    <h1>
            {Name}
          </h1>

    <h2>
            {Occupation}
          </h2>

  </header>

  <div className="profile-bio">

    <p>
      {Description}
    </p>

  </div>

  <ul className="profile-social-links">
    <li>
      <a target="_blank" href="https://github.com/imanollramirez">
        <i class="fa fa-facebook"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/imanollramirez">
        <i class="fa fa-instagram"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://https://github.com/imanollramirez">
        <i class="fa fa-github"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://https://github.com/imanollramirez">
       
        <i class="fa fa-behance"></i>
      </a>
    </li>
  </ul>
</aside>
        </>
    )
};

export default Card;