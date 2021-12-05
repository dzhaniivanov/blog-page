import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://images.unsplash.com/photo-1524561506982-601111bed7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZGVyJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="headerImg" />
        </div>
    )
}

export default Header
