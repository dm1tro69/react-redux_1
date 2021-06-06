export const postActionType = {
    SET_POSTS: 'POSTS.SET_POSTS',
    CLEAR: 'POSTS.CLEAR',
    SET_LOADING: 'POSTS.SET_LOADING'
}
export const postsActions = {
    setPosts: (posts)=> ({type: postActionType.SET_POSTS, payload: posts}),
    setLoading: (loading) => ({type: postActionType.SET_LOADING, payload: loading}),
    clearPosts: ()=> ({type: postActionType.CLEAR}),
    fetchPosts: ()=> async (dispatch)=> {
        dispatch(postsActions.setLoading(true))
        try{
           const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
            const posts = await res.json()

            dispatch(postsActions.setPosts(posts))

        }catch (e) {
            console.log(e.message)
        }finally {
            dispatch(postsActions.setLoading(false))

        }
    }
}