import styles from './Post.module.sass'
import Headline from "@/atoms/headline/Headline";
import HTMLReactParser from "html-react-parser";
import Image from 'next/image';
import PostDetails from '../postDetails/PostDetails';
import { Post } from 'types/posts';

const Post = ({image, title, topic, sign_up_url, type, date, excerpt, body}: Post) => {
    const imageStyles: React.CSSProperties = {objectFit: 'contain', maxWidth: '100%', height: 'auto', maxHeight: 503, borderRadius: '10px'}

    return <>
        <div className={styles.postHeadline}>
            <Headline text={title} centered>
                <div className={styles.excerpt}>{HTMLReactParser(excerpt)}</div>
                <div className={styles.date}>{date.toLocaleString()}</div>
            </Headline>
        </div>
        <div className={styles.postEventInfo}>
            <Image src={image} alt={title}width={1020} height={503} style={imageStyles} />
            <PostDetails title={title} sign_up_url={sign_up_url} type={type} date={date} />
        </div>
        <div className={styles.postBody}>
            <h3 className={styles.postBodyHeadline}>About this event</h3>
            {HTMLReactParser(body)}
        </div>
    </>
}

export default Post;