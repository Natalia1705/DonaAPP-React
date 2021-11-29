const Login = () => {
  return (
    <div class='container'>
      <div class='mt-5 row justify-content-center'>
        <div class='border border-light bg-light p-4 col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6'>
          <h2 class='mb-4 text-center'>Iniciar sesión</h2>
          <form action=''>
            <div class='mb-3 row'>
              <label
                for='exampleFormControlInput1'
                class='col-xl-4 col-form-label'
              >
                Correo
              </label>
              <div class='col-xl-8'>
                <input
                  type='text'
                  class='form-control'
                  id='exampleFormControlInput1'
                />
              </div>
            </div>
            <div class='mb-3 row'>
              <label for='inputPassword' class='col-xl-4 col-form-label'>
                Contraseña
              </label>
              <div class='col-xl-8'>
                <input
                  type='password'
                  class='form-control'
                  id='inputPassword'
                />
              </div>
            </div>
            <div class='col-12'>
              <button class='btn btn-primary' type='submit'>
                Iniciar Sesion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
