import styels from "../styles/components/heading.module.scss"

export default function Heading({ heading, line=false }) {
    return (
        <div className={styels.heading} >
            <h1>{heading}</h1>
            {
                line && <hr/>
            }
        </div>
    )
}
