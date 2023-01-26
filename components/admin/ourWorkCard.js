import Image from "next/image"
import styles from "../../styles/admin/components/ourWorkCard.module.scss"
import { useRouter } from "next/router"
import { ADMIN_ROUTES } from "../../common/routes"

function OorWorkCard({data}) {
    const router = useRouter()
    return (
        <div className={styles.ourWork_card}>
            <h4>{data.title}</h4>
            <Image src={data.image2} height={1000} width={1000} alt="our work" />
            <div className={styles.footer} >
                <button onClick={(e)=>{
                    e.stopPropagation();
                    router.push(ADMIN_ROUTES.OUR_WORKS_EDIT + data.id)
                }} >Edit</button>
                <button onClick={(e) => {
                    e.stopPropagation();
                    // delete api with id as params
                    fetch(`/api/our-work/delete?id=${data.id}`)
                        .then(res => res.json())
                        .then(data => {
                            router.reload()
                        })
                }}>Delete</button>
            </div>
        </div>
    )
}

export default OorWorkCard