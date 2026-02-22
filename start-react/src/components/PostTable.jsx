import React,{useState,useEffect}  from 'react';

function PostTable({title,onSelectPost}) {
        const [posts, setPosts] = useState([]);
    const[visability, setVisability] = useState(10);
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resp=>resp.json())
            .then(data=>setPosts(data.slice(0,visability)))
            .catch(error=>console.error('Error fetching posts:', error))
        },[visability])
      

        function loadMore(){
            setVisability(visability=>visability+10);
        }
    return (
        <div>
               <h3 className='text-center'>
     
         {title}
         </h3>
      
            <table className="table table-striped">
   <thead>
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">Btn</th>
    </tr>
  </thead>
  <tbody>
    
    {posts.map((post,index)=>{
        return <tr key={post.id}>
            <td>
                {post.userId}
                </td>

                <td>
                {post.id}
                </td>

                <td>
                {post.title}
                </td>
                <td>

                {post.body}
                </td>
                
                <td>
                <button className='btn btn-primary' onClick={()=>{onSelectPost(post)}}>
         Add to the list
              </button>
                </td>
    </tr>
    })}
  </tbody>
</table>

<div className='text-center'>
          <button className='btn btn-success' onClick={loadMore}>
         Load more
              </button>
            </div>
        </div>
    );
}

export default PostTable;