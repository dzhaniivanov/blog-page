import "./SinglePost.css";

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="sidePostWrapper">
                <img src="https://images.unsplash.com/photo-1636206508343-a6c955887476?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Vanko</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sunt quia iusto aperiam ad a distinctio ratione rerum magnam perferendis.</p>
            </div>
        </div>
    )
}

export default SinglePost
