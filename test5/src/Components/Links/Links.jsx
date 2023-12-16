import MenuItem from "../MenuItem/MenuItem"


function Links(){
    return(
        <>
        <MenuItem linktext="Home" linkurl="/"/>
        <MenuItem linktext="Blog" linkurl="/blog"/>
        <MenuItem linktext="About Us" linkurl="/about"/>
        <MenuItem linktext="Contact Us" linkurl="/contact"/>
        </>
    )
}

export default Links