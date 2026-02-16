
import "../styleheets/user.css"


export const User = ({image, nombre, Estado}) => {
  return (
 
    <>
<div className="card">
    <div className="image-container">
        <img src= {image} alt="Jessica" />
    </div>
    <div className="content">
        <h2>{nombre}</h2>
        <div className="status">
            <span className="dot"></span> {Estado}
        </div>

        <div className="info-group">
            <span className="label">Last known location:</span>
            <span className="value">Earth (Replacement Dimension)</span>
        </div>

        <div className="info-group">
            <span className="label">First seen in:</span>
            <span className="value">Ricksy Business</span>
        </div>
    </div>
</div>
    </>
  )
}
