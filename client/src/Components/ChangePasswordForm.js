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
    return (
        <div className="container-fluid mt-3" style={container}>
            <div className="p-3 mt-4 mb-4" style={layoutBorder}>
            <form>
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
                        name="full_name"
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