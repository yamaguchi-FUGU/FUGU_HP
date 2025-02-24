
interface Props {
    textContent: string
}

const Sample = (props: Props) => {
    return (
        <div>
            これはテストです
            {props.textContent}
        </div>
    )
}

export default Sample
