import Image from 'next/image'
import styles from '../styles/clientBlog.module.scss'

function BlogPage3({ data }) {

  // string date to date object to get day and month and year
  const date = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    return `${day} ${month} ${year}`
  }


  return (
    <div className={styles.blog3} >
      <Image src={data.image1} alt={data.title} width={1000} height={1000} />
      {/* head */}
      <div className={styles.head} >

        <h3>{data.title}</h3>
        <h5>{date(data.date)}</h5>
      </div>
      <p>{data.para1}</p>
      <p>{data.para2}</p>
    </div>
  )
}

export default BlogPage3