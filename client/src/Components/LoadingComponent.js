import loadingSpinner from '../assets/images/Spinner-1s-200px.svg';
export default function LoadingComponent () {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <img src={ loadingSpinner } style={{ width: '400px' }}/>
            </div>
        </div>
    ); 
}