import navbarImg from '../assets/images/Setting.svg';
export default function Navbar(){
    return (
        <>
        <div className="d-flex flex-row-reverse p-2">
            <div className="d-flex flex-row p-2">
            <img className="img-fluid" src={ navbarImg } style={{width: 30, height: 30, marginRight: 10}}/>
            <p>Satgas</p>
            </div>
        </div>
        </>
    )
}