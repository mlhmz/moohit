import React from 'react';
import fire from './fire';
import { useCollectionData } from 'react-firebase-hooks/firestore'


const Messages = ({user}) => {
    const postsRef = fire.firestore().collection('posts');
    const query = postsRef.orderBy('createdAt')
    const [posts] = useCollectionData(query, {idField: 'id'});
    

    return (
        <div className="messages">
        <>
        {posts && posts.map(post => <Post key={post.id} message={post} uid={post.id} userid={post.userid} />).reverse()}
        </>
        </div>
    ); 

    function Post(props) {
        const {text, name} = props.message;
    return (
    <div onClick={() => Like(fire.auth().currentUser.uid)}className={"message"}>
        <h3>{name}</h3>
        <p>{text}</p>
        {/*<p>{Object.keys(likes).length} Likes</p>*/}
    </div>
    )
    }
};

function Like(userid) {
    // fire.firestore().collection('posts').doc('UdCCft2ZmDkfInhFFzir').collection('likes').add({userid})
}

export default Messages;