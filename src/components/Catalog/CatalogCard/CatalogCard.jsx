import s from './CatalogCard.module.css'

export function CatalogCard() {
    return (
        <article className={s.card}>
            <div className={s.imageWrap}>
                <img
                    src="https://cdn1.tenchat.ru/static/vbc-gostinder/2026-03-16/4c3664af-9c1b-4553-81c5-6ede70a0d6e0.PNG?width=2094&height=1245&fmt=webp"
                    alt="Товар 1"
                    className={s.image}
                    loading="lazy"
                />
            </div>
            <div className={s.body}>
                <h3 className={s.name}>Название товара</h3>
                <p className={s.desc}>Короткое описание в одну строку</p>
                <div className={s.footer}>
                    <span className={s.price}>2 490 ₽</span>
                    <button className={s.buy} type="button">
                        Купить
                    </button>
                </div>
            </div>
        </article>
    )
}