import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function OtpInput() {
  let urlParams = useParams();
  let navigate = useNavigate();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('')

  const setTime = () => {
    if (seconds === 0 && minutes === 0) {
      return null;
    }
    if (seconds === 0) {
      setMinutes((minutes) => minutes - 1);
      setSeconds(59);
    } else {
      setSeconds((seconds) => seconds - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(setTime, 1000);
    return function cleanUp() {
      clearTimeout(timer);
    };
  });

  const handleFormChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL}/otp-verification/${urlParams.id}/${urlParams.token}`,
        method: 'POST',
        data: {
          otp,
        },
      })
      if (response.status === 200 ) navigate(`/account-verified`);
    } catch (error) {
      setError(error.response.data.message)
      console.log(error);
    }
  };

  const onResendOTP = async () => {
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_BASE_URL}/resend-otp/${urlParams.id}/${urlParams.token}`,
        method: 'POST',
      })
      if (response.status === 200 ) navigate(`/otp-verification/${response.data.id}/${response.data.token}`);
      // jika sukses restart timer.
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id='otpPage'>
      <div className='register-form'>
        <div className='container'>
          <div className='row' style={{ justifyContent: 'center' }}>
            <div className='col-7 mb-5 mt-5' id='cardOtp'>
              <div style={{ textAlign: 'center' }}>
                <img
                  src='https://www.pedulilindungi.id/assets/logo-with-text.svg'
                  alt='Peduli-lindungi-logo'
                  style={{ height: '70px', width: '200px' }}
                />
                <h6 style={{ fontSize: 12, color: '#0277bd' }}>Merchant CMS</h6>
                <img
                  src='https://ik.imagekit.io/fjaskqdnu0xp/logo-email_Vztzgz4bl.png?updatedAt=1639203405172'
                  alt='email-logo'
                  style={{ height: '100px', width: '100px', padding: 0 }}
                />
                <h4
                  style={{ fontSize: 18, fontColor: '#0B4C6F' }}
                  className='mb-2'
                >
                  <strong>Verifikasi Email</strong>
                </h4>
                <h6 style={{ fontSize: 12 }}>
                  Masukan 6 digit kode verifikasi yang telah kami kirimkan ke
                  email
                </h6>
              </div>
              {error ? (
                <div className="alert alert-danger alert-dismissible" role="alert">
                  <strong>Ups!</strong> {error}
                </div>
                ): (null)}
              <form onSubmit={onFormSubmit}>
                <div id="divOuter" className="text-center">
                  <div id="divInner">
                    <input
                      id='partitioned'
                      className='mt-5 mb-3'
                      type='text'
                      maxLength='6'
                      name='otp'
                      style={{fontSize: "36px"}}
                      value={otp}
                      onChange={handleFormChange}
                    />
                    </div>
                </div>
                <div className='d-grid gap-2 col-12 mt-3'>
                  <button
                    className='btn'
                    type='submit'
                    style={{ backgroundColor: '#0277bd', color: 'whitesmoke' }}
                  >
                    Register
                  </button>
                </div>
              </form>
              <div
                className='mt-2'
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                }}
              >
                <h6 className='my-3'>
                  Jika anda tidak menerima email, silahkan cek folder spam anda,
                  atau <br /> kirim ulang kode verifikasi
                  {seconds === 0 && minutes === 0 ? (
                    <a onClick={onResendOTP} className='text-decoration-none mb-3 mx-1'>
                      Resend OTP
                    </a>
                  ) : (
                    <span className='mx-2'>
                      ({minutes}:{seconds})
                    </span>
                  )}
                </h6>
                <br />
                <h6 className='my-3'>
                  Ingin mengubah email?
                  <Link to='/register-merchant' className='text-dark text-decoration-none mx-1'>
                    <strong>Registrasi Ulang</strong>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
