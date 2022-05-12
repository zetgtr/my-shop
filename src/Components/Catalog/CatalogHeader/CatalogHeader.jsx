import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { ROUTER } from "../../../Router/constants"

export const CatalogHeader = () => {
    const {catalogId} = useParams()
    const {discontId} = useParams()
    return(
        <div className="hedercatalog">
        <div className="conteiner">
            <div className="hedingcatalogthumb">
                <h1 className="heading-text">Каталог </h1>
                <nav>
                <div className="thumb-catalog">
                    <Link className="thumbcatalog" to={ROUTER.HOME}>Главная</Link>
                    <Link className="thumbcatalog ta log" to={ROUTER.CATALOG}>Каталог</Link>
                    {discontId === "gerl" && <Link className="thumbcatalog ta log" to={ROUTER.DISCONT + discontId}>Акция для женщин</Link>}
                    {discontId === "men" && <Link className="thumbcatalog ta log" to={ROUTER.DISCONT + discontId}>Акция для мужчин</Link>}
                    {discontId === "child" && <Link className="thumbcatalog ta log" to={ROUTER.DISCONT + discontId}>Акция для детей</Link>}
                    {catalogId && catalogId[0] === "a" && <Link className="thumbcatalog ta log" to={ROUTER.CATALOG + "/" + catalogId[0]}>Аксесуары</Link>}
                    {catalogId && catalogId[0] === "M" && <Link className="thumbcatalog ta log" to={ROUTER.CATALOG + "/" + catalogId[0]}>Мужчинам</Link>}
                    {catalogId && catalogId[0] === "J" && <Link className="thumbcatalog ta log" to={ROUTER.CATALOG + "/" + catalogId[0]}>Женщинам</Link>}
                    {catalogId && catalogId[0] === "R" && <Link className="thumbcatalog ta log" to={ROUTER.CATALOG + "/" + catalogId[0]}>Детям</Link>}
                    {catalogId === "MA" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Аксесуары</Link>}
                    {catalogId === "MK" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Куртки</Link>}
                    {catalogId === "MD" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Джинсы</Link>}
                    {catalogId === "MP" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Пуловеры</Link>}
                    {catalogId === "JA" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Аксесуары</Link>}
                    {catalogId === "JK" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Куртки и пальто</Link>}
                    {catalogId === "JP" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Футболки и поло</Link>}
                    {catalogId === "JB" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Блузки</Link>}
                    {catalogId === "RP" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Ползунки и Боди</Link>}
                    {catalogId === "RK" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Куртки и пальто</Link>}
                    {catalogId === "RF" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Футболки</Link>}
                    {catalogId === "RD" && <Link className="thumbcatalog log excretion" to={ROUTER.CATALOG + "/" + catalogId}>Джинсы</Link>}
                </div>
                </nav>
            </div>
        </div>
    </div>
    )
}