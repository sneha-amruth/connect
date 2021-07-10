// import React from 'react';
// import { useParams } from 'react-router';
// import { useSelector } from 'react-redux';

// export const SinglePostPage = () => {
//   const { postId } = useParams();

//   const post = useSelector(state =>
//     state.posts.find(post => post.id === postId)
//   )

//   if (!post) {
//     return (
//       <section>
//         <h2>Post not found!</h2>
//       </section>
//     )
//   }

//   return (
//     <section>
//       <article className="post">
//         <p className="post-content">{post.caption}</p>
//       </article>
//     </section>
//   )
// }