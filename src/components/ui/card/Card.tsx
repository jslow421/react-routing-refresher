import style from './Card.module.scss'

export default function Card(props: any) {
    return (
        <div className={style.card}>{props.children}</div>
    )
}