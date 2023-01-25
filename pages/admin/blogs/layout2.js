import Image from 'next/image'
import { useState } from 'react'
import AdminLayout from '../../../components/admin/adminLayout'
import styles from '../../../styles/admin/components/layouts.module.scss'

function Index() {
    return (
        <AdminLayout>
            <div className={styles.layout2} >
                <form >
                    <div className={styles.head}>
                        <div className={styles.image}>
                            <label htmlFor="layout2_image1">
                                <Image src="/assets/admin/dummyImage.jpg" name="image1" height={1000} width={1000} alt="dummyImage" />
                            </label>
                            <input type="file" id="layout2_image1" />
                        </div>
                        <div>
                            <input type="text" placeholder='Title' />
                            <input type="date" />
                            <br />

                            <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet congue felis. Mauris ac porta massa. In hac habitasse platea dictumst. Nam nisi ex, varius nec magna at, varius malesuada tortor. In vitae mi a magna pretium tempus et quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nulla in malesuada lacus, fringilla volutpat augue. Phasellus aliquet facilisis ex ut euismod. In pellentesque et elit at finibus. Duis malesuada gravida orci, ac posuere turpis tincidunt interdum. Vestibulum molestie vehicula neque et posuere. Mauris vel enim eu nibh scelerisque porttitor. Aliquam vehicula pellentesque magna, molestie ultrices eros maximus vel. Nullam in ligula sagittis, auctor erat sit amet, luctus ligula. Ut nec urna nulla. Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci. Praesent euismod fringilla semper. Vivamus a felis euismod, facilisis mi id, euismod diam. Nulla vestibulum nisl neque, vitae rutrum mauris efficitur sed. Aliquam in quam sit amet nunc pulvinar porttitor vel vitae mi. Morbi ac neque a leo sollicitudin lobortis. Quisque elit ligula, commodo suscipit aliquet eget, molestie nec nisi. Vivamus pulvinar elementum gravida. Duis bibendum urna vitae urna elementum dictum.' cols="30" rows="10"></textarea>
                            <br />
                            <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet congue felis. Mauris ac porta massa. In hac habitasse platea dictumst. Nam nisi ex, varius nec magna at, varius malesuada tortor. In vitae mi a magna pretium tempus et quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nulla in malesuada lacus, fringilla volutpat augue. Phasellus aliquet facilisis ex ut euismod. In pellentesque et elit at finibus. Duis malesuada gravida orci, ac posuere turpis tincidunt interdum. Vestibulum molestie vehicula neque et posuere. Mauris vel enim eu nibh scelerisque porttitor. Aliquam vehicula pellentesque magna, molestie ultrices eros maximus vel. Nullam in ligula sagittis, auctor erat sit amet, luctus ligula. Ut nec urna nulla. Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci. Praesent euismod fringilla semper. Vivamus a felis euismod, facilisis mi id, euismod diam. Nulla vestibulum nisl neque, vitae rutrum mauris efficitur sed. Aliquam in quam sit amet nunc pulvinar porttitor vel vitae mi. Morbi ac neque a leo sollicitudin lobortis. Quisque elit ligula, commodo suscipit aliquet eget, molestie nec nisi. Vivamus pulvinar elementum gravida. Duis bibendum urna vitae urna elementum dictum.' cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <label htmlFor="layout2_image2">

                            <Image src="/assets/admin/dummyImage.jpg" name="image2" height={1000} width={1000} alt="dummyImage" />
                        </label>
                        <input type="file" id="layout2_image2" />
                        <textarea placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                        <textarea placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                        <textarea placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                        <textarea placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                    </div>
                    <button type='submit'>Post</button>
                </form>
            </div>
        </AdminLayout>
    )
}

export default Index