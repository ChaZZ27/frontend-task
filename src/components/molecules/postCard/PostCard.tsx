import Image from "next/image";
import styles from './PostCard.module.sass'
import HTMLReactParser from "html-react-parser";
import { Post } from "types/posts";
import Link from "next/link";

const PostCard = ({image, id, title, topic, author, date, excerpt}: Post) => {
    const imageStyles: React.CSSProperties = {width: '100%', maxHeight: 240, objectFit: 'cover', borderRadius: '8px', transition: 'all .3s ease'}

    return <article className={styles.postCard}>
        <Link href={`/blog/${id}`}>
            <Image src={image} alt={title} width={345} height={240} style={imageStyles} />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.labelGroup}>
                <span className={styles.label}>{topic}</span>
                <span className={styles.label}>{author}</span>
                <span className={styles.label}>{date.toLocaleString()}</span>
            </div>
            <div className={styles.excerpt}>
                {HTMLReactParser(excerpt)}
            </div>
            <div className={styles.date}>{date.toLocaleString()}</div>
        </Link>
    </article>
}

export default PostCard;