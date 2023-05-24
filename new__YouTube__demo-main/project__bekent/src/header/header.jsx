import { Tooltip } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { WrapItem } from "@chakra-ui/react";

function Header() {
    return(
        <Box as="header">
            <Box className="header__menu" as="div">
            <div className="menu__header">
                <div className="burger__manu">
                    <div className="linia__burger_1"></div>
                    <div className="linia__burger_2"></div>
                    <div className="linia__burger_3"></div>
                </div>
                <img className="youtube" src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png" width={"100px"} alt=""/>
            </div>
            <div className="linia__search">
            <div className="menu__search">
                <input type="text" placeholder="search"/>
                <Tooltip hasArrow label='Search' bg='gray.300' color='blackAlpha.600'>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" width={"20px"} alt=""/>
                </div>
                </Tooltip>
            </div>
            <Tooltip hasArrow label='Search places' bg='gray.300' color='blackAlpha.600'>
                <img className="img__micra" src="https://cdn4.iconfinder.com/data/icons/multimedia-icons-5/100/multimedia_microphone-13-512.png" width={"40px"} alt="" />
            </Tooltip>
            </div>
            <div className="icons">
            <Tooltip hasArrow label='notification' bg='gray.300' color='blackAlpha.600'>
                <img src="https://cdn-icons-png.flaticon.com/512/107/107822.png" width={"40px"} alt=""/>
            </Tooltip>
            <WrapItem>
                <Avatar cursor="pointer" size="sm" name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
            </WrapItem>
            </div>
            </Box>
        </Box>
    )
}
export default Header