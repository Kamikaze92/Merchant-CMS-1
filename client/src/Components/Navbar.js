import navbarImg from '../assets/images/Setting.svg';
import sideBarImg from '../assets/images/sidebar.png'
export default function Navbar(){
    return (
        <>
        <div className="d-flex flex-row-reverse p-2" style={{height: '48px', backgroundColor:'#FFFFFF'}}>
            <p style={{marginRight:'10px', marginTop:'2px'}}>Satgas Prov</p>
            <img className="img-fluid" src={ navbarImg } style={{width: 30, height: 30, marginRight: 10}}/>
            <img className="img-fluid" src={ sideBarImg } style={{width: 15, height: 15, marginRight: '880px', marginTop: '5px'}}/>
        </div>
        </>
    )
}