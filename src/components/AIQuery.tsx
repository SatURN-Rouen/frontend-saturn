import "./styles/AIQuery.css"

interface AIQueryProps {
    query: string
}

export default function AIQuery(e: AIQueryProps) {
    return (
        <div className={"AIQuery"}>
            <img src="/choupette.svg" alt="Choupette"/>
            <div>
                <p>{e.query}</p>
            </div>
        </div>
    )
}