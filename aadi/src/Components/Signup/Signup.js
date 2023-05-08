import "./Signup.css";

const SignUp = () => {
    return (
        <div className="Signup">
            <h1>Signup</h1>
            <form>
                <input type={'email'} placeholder={'Email'} />
                <input type={'password'} placeholder={'password'} />
                <input type={'password'} placeholder={'confirm password'} />
                <button type={'submit'}>Signup</button>
            </form>
        </div>
    );
};

export default SignUp;