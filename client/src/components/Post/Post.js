import "./Post.css";

const Post = () => {
    return (
        <div className="post">
            <img src="https://images.unsplash.com/photo-1638627928594-47081f0bdaf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum architecto minima? Dignissimos iure ad alias minus nulla quam vero ducimus dolorem sunt sint molestias, vitae explicabo eius quasi modi consequatur accusantium saepe. Eaque corrupti laudantium facere dicta. Debitis eligendi itaque sequi a quae rem, molestiae consequatur! Pariatur tenetur quam deleniti facilis harum quidem rem eveniet delectus adipisci ipsa culpa voluptates sapiente quia nobis doloribus iste incidunt, natus blanditiis. Molestias voluptatibus excepturi officia voluptatem cum consectetur in quibusdam dolore! Natus iusto dolore vero itaque maxime? Tenetur nulla quia voluptatum consequatur ipsum, distinctio iure ducimus aliquam ipsa harum, aperiam exercitationem libero.</p>
        </div>
    )
}

export default Post
