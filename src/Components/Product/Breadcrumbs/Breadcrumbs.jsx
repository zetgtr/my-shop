import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { ROUTER } from "../../../Router/constants"
import { goodsSelector } from "../../../Store/Goods/selector"

export const Breadcrumbs = () => {
    const {productId} = useParams()
    const {goods} = useSelector(goodsSelector)

  const productFilter = goods.filter((id)=>id.id === productId)

  const catalogId = productFilter[0].class

    return(
        <div className="hedercatalog">
        <div className="conteiner">
            <div className="hedingcatalogthumb">
            <h1 className="heading-text"> {productFilter[0].title} </h1>
           <nav>
            <div className="thumb-catalog">
            <Link className="thumbcatalog" to={ROUTER.HOME}>Главная</Link>
                    <Link className="thumbcatalog ta log" to={ROUTER.CATALOG}>Каталог</Link>
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
                    <Link className="thumbcatalog log excretion" to={ROUTER.PRODUCT + "/" + productFilter[0].id}>{productFilter[0].title}</Link>
            </div>
           </nav>
        </div>
        </div>
    </div>
    )
}