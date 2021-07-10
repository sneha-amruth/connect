import { Nav } from '../../Nav/Nav';
import { useEffect } from 'react';
import { AddPostForm } from './AddPostForm';
import { PostsList } from './PostsList';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from './postsSlice';
import { statusEnum } from '../../utils';
import CircularProgress from '@material-ui/core/CircularProgress';

export const PostsContainer = () => {
    const dispatch = useDispatch();
	const { posts, status } = useSelector((state) => state.posts);
   
	useEffect(() => {
		if (status.LOAD_POSTS === statusEnum['IDLE'])
			dispatch(loadPosts());
	}, []);
	return (
		<div className='flex w-full items-start justify-center container'>
			<Nav />
			{posts ? (
				<div className='text-left w-full md:w-4/6 mb-20 md:mb-4 md:ml-10'>
					<h2 className='text-2xl font-bold text-left border-b py-2'>Home</h2>
					<AddPostForm />
					<PostsList />
				</div>
			) : (
				<div className='text-left w-full md:w-4/6 md:ml-10 min-h-screen flex items-center justify-center'>
					<CircularProgress />
				</div>
			)}
		</div>
	);
};