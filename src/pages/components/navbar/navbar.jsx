import styles from '@/pages/components/navbar/navbar.module.css'
import CartButton from '@/pages/components/forms/cartButton/CartButton'

import Logo from '@/pages/components/logo/logo'
import Input from '@/pages/components/forms/input/input'

export default function Navbar ({cart, onRemove}) {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar" fullWidth />
            </div>
            <CartButton 
                cart={cart}
                onRemove={onRemove}
            />
        </nav>
    )
}
