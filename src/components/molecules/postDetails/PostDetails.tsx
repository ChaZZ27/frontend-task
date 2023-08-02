import styles from './PostDetails.module.sass'
import { useRouter } from 'next/router';
import { parse, format } from 'date-fns';
import { PostDetails } from 'types/posts';

const PostDetails = ({type, sign_up_url, title, date}: PostDetails) => {

    const dateObject = parse(date, 'dd MMM yyyy', new Date());
    const newDate = format(dateObject, 'HH:mm a | dd MMM yyyy');

    const router = useRouter();
    const onClickHandler = () => router.push(sign_up_url)

    return (
        <div className={styles.postDetails}>
            <div className={styles.postDetailsWrapper}>
                <div>
                    <h3 className={styles.postDetailTitle}>{title}</h3>
                    <span className={styles.postDetailType}>{type}</span>
                    <span className={styles.postDetailDate}>{newDate}</span>
                </div>
                <button onClick={onClickHandler} className={styles.postDetailButton} type='button'>Sign up to this event</button>
            </div>
        </div>
    )
}

export default PostDetails;