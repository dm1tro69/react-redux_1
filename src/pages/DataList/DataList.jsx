import React, {useEffect} from 'react'
import './style.css'
import PageAnimated from "../../components/PageAnimated/PageAnimated";
import {useDispatch, useSelector} from "react-redux";
import {postsActions} from "../../store/posts/actions";
import Loading from "../../components/Loading/Loading";

const DataList = () => {
    const dispatch = useDispatch()
    const {posts, loading} = useSelector((store => store.posts))
    useEffect(()=> {
        dispatch(postsActions.fetchPosts())
    },[])



return (
    <>
<PageAnimated>
    <div className={'data-list'}>
        {posts.map((post, i) => (
            <div className={'block block-left'} key={i}>{post.title}</div>))}
    </div>
</PageAnimated>
        {loading && <Loading/>}
    </>
)
}
export default DataList