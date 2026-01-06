import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode
}

const Card = ({ title, children }: CardProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
        </section>
    )
}

export default Card