const Login = () => (
  <div className="container">
    <div className="mt-5 row justify-content-center">
      <div className="border border-light bg-light p-4 col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6">
        <h2 className="mb-4 text-center">Iniciar sesión</h2>
        <form action="">
          <div className="mb-3 row">
            <label
              htmlFor="exampleFormControlInput1"
              className="col-xl-4 col-form-label"
            >
              Correo
            </label>
            <div className="col-xl-8">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-xl-4 col-form-label">
              Contraseña
            </label>
            <div className="col-xl-8">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
