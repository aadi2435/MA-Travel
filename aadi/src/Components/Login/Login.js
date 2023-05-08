// importing its css
import "./Login.css";

const Login = () => {
  return (
     <div className="login">
    <h1>Login</h1>  
    <form>
        <input type={'email'} placeholder={'Email'} />
        <input type={'password'} placeholder={'password'} />
        <button type={'submit'}>Login</button>  
    </form>
   </div>
  );
};

export default Login;