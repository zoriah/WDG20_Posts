import {Link} from "react-router-dom";

export function PostCard(post) {
    const { id, title, content, cover } = post.post;

    return (
        <Link to={`/post/${id}`}>
            <div className='card bg-base-100 shadow-xl'>
                <figure className='bg-white h-48'>
                    <img src={cover} alt={title} className='object-cover h-full w-full'/>
                </figure>
                <div className='card-body h-56'>
                    <h2 className='card-title'>{title}</h2>
                    <p className='line-clamp-2'>{content}</p>
                </div>
            </div>
        </Link>
    );
}
