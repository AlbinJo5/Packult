import Image from 'next/image'
import AdminLayout from '../../../components/admin/adminLayout'
import styles from '../../../styles/admin/components/layouts.module.scss'

function Index() {
    return (
        <AdminLayout>
            <div className={styles.layout3} >
                <form >
                    <div className={styles.head}>
                        <label htmlFor="layout2_image1">
                            <Image src="/assets/admin/dummyImage.jpg" name="image1" height={1000} width={1000} alt="dummyImage" />
                        </label>
                        <input type="file" id="layout2_image1" />
                        <div className={styles.title} >
                            <input type="text" placeholder='Title'/>
                            <input type="date" />
                        </div>
                    </div>
                    <div className={styles.content}>
                        <textarea placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea>
                        <textarea placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea>
                    </div>
                    <button type='submit'>Post</button>
                </form>
            </div>
        </AdminLayout>
    )
}

export default Index