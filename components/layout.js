import Footer from "./footer";
import Header from "./header";
import MetaHead from "./metaHead";

export default function Layout({ children, pageMeta }) {
    return (
        <div>
            <MetaHead pageMeta={pageMeta} />
            <Header />
            {children}
            <Footer/>
        </div>
    )
}
