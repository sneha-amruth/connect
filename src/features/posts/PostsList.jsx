import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PostsList = () => {
  const {posts} = useSelector(state => state.posts)

 
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      <div className=''>
			{posts?.map((post) => {
				return (
					<NavLink to={`/posts/${post._id}`} key={post._id}>
						{post.caption}
					</NavLink>
				);
			})}
		</div>
    </section>
  )
}