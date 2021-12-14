import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const FormText = {
    color: "black",
    fontWeight: "600",
    fontSize: "14px",
    fontFamily: 'Roboto',
    marginTop: 10,
    marginBottom: 10,
};

const layoutBorder = {
    padding: "36px",
    marginTop: 20,
    marginRight: 30,
    width: "50%"
  };

const container = {
    width: '1184px',
    heigth: '494px',
    backgroundColor: '#FFFFFF'
}

export default function ChangePassowrdForm() {
    const [formInput, setFormInput] = useState({
        oldPassword: '',
        password: '',
        password2: ''
      })
    
    const changeFormInput = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        setFormInput({
            ...formInput,
            [field]: value
        })
    }

    const navigate = useNavigate()

    const changePassword = async (e) => {
    e.preventDefault()
    try {
        const response = await axios({
        url: `http://localhost:3000/change-password`,
        method: 'post',
        data: formInput,
        })
        console.log(response.data)
        navigate('/login')
    } catch (error) {
        console.log(error);
        // error
    }
    }
    return (
        <div className="container-fluid mt-3" style={container}>
            <div className="p-3 mt-4 mb-4" style={layoutBorder}>
            <form method="post" onSubmit={changePassword}>
                {/* <!--Email--> */}
                <div className="px-4 py-4">
                    <div>
                        <label className="form-label" style={FormText}>
                        Password Lama
                        </label>
                        <input
                        id="inputForm"
                        type="password"
                        className="form-control"
                        name="oldPassword"
                        value={formInput.oldPassword}
                        onChange={changeFormInput}
                        />
                    </div>
                    <div className="mt-2">
                        <label className="form-label" style={FormText}>
                        Password Baru
                        </label>
                        <input
                        id="inputForm"
                        type="password"
                        className="form-control"
                        name="password"
                        value={formInput.password}
                        onChange={changeFormInput}
                        />
                    </div>
                    <div className="mt-2">
                        <label className="form-label" style={FormText}>
                        Konfirmasi Password Baru
                        </label>
                        <input
                        id="inputForm"
                        type="password"
                        className="form-control"
                        name="password2"
                        value={formInput.password2}
                        onChange={changeFormInput}
                        />
                    </div>
                    <div className="d-grid gap-2 col-12 mt-5">
                        <button
                        className="btn"
                        type="submit"
                        style={{ backgroundColor: "#0277bd", color: "whitesmoke" }}
                        >
                        Ubah Password
                        </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    )
}