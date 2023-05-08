import "./FooterStyles.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>MA Travel</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/aadi_394/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aadi-gandhi-643561215/?originalSubdomain=in">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-youtube-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="https://github.com/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="https://www.linkedin.com/in/aadi-gandhi-643561215/?originalSubdomain=in">Linked-in</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/service">Service</a>
                    <a href="/LoginSignupContainer">Signup</a>
                    <a href="/contact">Contact us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/Service">Terms of Service</a>
                    <a href="/about">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer