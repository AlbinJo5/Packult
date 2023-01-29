import Image from 'next/image'
import styles from '../styles/clientBlog.module.scss'

function BlogPage2({ data }) {

    // string date to date object to get day and month and year
    const date = (date) => {
        const d = new Date(date);
        const month = d.toLocaleString('default', { month: 'long' });
        const day = d.getDate();
        const year = d.getFullYear();
        return `${day} ${month} ${year}`
    }


    return (
        <div className={styles.blog2} >
            <div className={styles.head} >
                <Image src={data.image1} alt={data.title} width={1000} height={1000} />
                <h3>{data.title}</h3>
                <h5>{date(data.date)}</h5>
                <p>{data.para1 + data.para2}</p>
            </div>
                <Image src={data.image2} alt={data.title} width={1000} height={1000} />
            <p>{data.para3}</p>
            <p>{data.para4}</p>
            <p>{data.para5}</p>
            <p>{data.para6}</p>
         
        </div>
    )
}

export default BlogPage2