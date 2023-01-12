import React, {useEffect, useState} from 'react'
import styles from './Header.module.css'

export const Header = () => {

    const [EUR, setEUR] = useState(0);
    const [USD, setUSD] = useState(0);

    useEffect(() => {
        getEuroToUah('EUR');
        getEuroToUah('USD');
    }, [])

    async function getEuroToUah(currency) {
        const url = `https://v6.exchangerate-api.com/v6/0f82ff28ada404e94b172016/pair/${currency}/UAH`;
        const response = await fetch(url);
        const data = await response.json();

        if(data.base_code === 'USD') {
           setUSD(data.conversion_rate)
        } else {
            setEUR(data.conversion_rate)
        }
    }


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__currencies}>
                    <div className={styles.header__label}>USD/UAH</div>
                    <div className={styles.header__currency}>{USD}</div>
                </div>
                <div className={styles.header__currencies}>
                    <div className={styles.header__label}>EUR/UAH</div>
                    <div className={styles.header__currency}>{EUR}</div>
                </div>
            </div>
        </header>
    )
}
