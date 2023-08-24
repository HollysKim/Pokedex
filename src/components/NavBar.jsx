const NavBar = ({setNavBarOption}) => {
    const navBarOptionClicked = (option) => {
        if(option == 'abilities') {
          setNavBarOption('abilities')
        }
        else if(option == 'moves') {
          setNavBarOption('moves')
        }
        else {
          setNavBarOption('default')
        }
        
      }
    return ( 
        <header className="navbar">
            <p className="navOption" onClick={()=>navBarOptionClicked('default')}>Default</p>
            <p className="navOption" onClick={()=>navBarOptionClicked('abilities')}>Abilities</p>
            <p className="navOption" onClick={()=>navBarOptionClicked('moves')}>Moves</p>
        </header>
     );
}
 
export default NavBar;