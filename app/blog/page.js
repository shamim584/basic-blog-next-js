import './blogList.css'
import blogData from './../data/blogData.json'
import Link from 'next/link';


export default function Blog() {

    return (
        <div>
            {
                blogData.map(blogData => {
                    // console.log(num + " " + index)
                    return (
                        <p className="blog-list" key={blogData.post_id}>
                            <Link href={`/post/${blogData.post_id}`}>
                                <span className="dot">{blogData.post_id}</span>  <b>{blogData.title}</b>
                            </Link>
                        </p>
                    )
                })
            }
        </div>
    );
}