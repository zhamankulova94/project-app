import cl from './Header.module.css'

const Header = () => {
 return(
  <header className={cl.header}>
    <img className={cl.header__img} src='https://www.adobe.com/express/create/logo/media_180f84d2230ee00e9a080d8f2c1a31146b6e743bd.png?width=400&format=png&optimize=medium' />
  </header>
 )
}

export default Header