import React from 'react';
import fire from './fire';
import { useCollectionData } from 'react-firebase-hooks/firestore'


const Messages = ({user}) => {
    const postsRef = fire.firestore().collection('posts');
    const query = postsRef.orderBy('createdAt');
    const [posts] = useCollectionData(query, {idField: 'id'});
    

    return (
        <>
        <h1>Test</h1>
        {posts && posts.map(post => <Post key={post.id} message={post} userid={post.userid} />)}
        </>
    ); 

    function Post(props) {
        const {text, uid, userid} = props.message;
    return <div className={"message"}><li>{text}</li></div>
    }
};

export default Messages;