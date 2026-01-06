import type { Chai } from "../type" // just to ensure we are not importing the functionality but the type
import Card from "./Card1"

interface ChaiListProps {
    items: Chai[]
}

const Chailist = ({ items }: ChaiListProps) => {
    return (
        <div>
            {items.map((item) => {
                return (
                    <Card
                        key={item.id}
                        name={item.name}
                        price={item.price}
                    />
                )
            })}
        </div>
    )
}

export default Chailist