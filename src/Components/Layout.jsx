import Header from './Header'

const Layout = ({children, cartCount }) => {
  
  return (
    <div className='layout_container'>
      <Header cartCount={cartCount}/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
