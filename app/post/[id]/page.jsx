import blogData from '../../data/blogData.json'

export default async function postPage({ params: { id } }) {
    const inventory = blogData;
    const result = inventory.find(({ post_id }) => post_id == id);

    return (
        <>
            <h2 className='blogTitle'>
                {result.title}
            </h2>
            <p className='blogDetails'> {result.details}</p>
        </>
    )
}



