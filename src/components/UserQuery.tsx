import "./styles/UserQuery.css"

interface UserQueryProps {
    query: string
}

export default function UserQuery(e: UserQueryProps) {
    return (
        <div className={"UserQuery"}>
            <div>
                <p>{e.query}</p>
            </div>
        </div>
    )
}