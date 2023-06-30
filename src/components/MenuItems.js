import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCogs, faHome, faImages, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const MenuItems = [
    {
        title:"Home",
        url:"/",
        cName:"nav-links",
        icon:{faHome}
    },
    {
        title:"KhusiManagement",
        url:"/",
        cName:"nav-links",
        icon:faEnvelope
    },
    {
        title:"Tenant",
        url:"/Tenant",
        cName:"nav-links",
        icon:"faCogs"
    },
    {
        title:"SuperAdmin",
        url:"/",
        cName:"nav-links",
        icon:faCogs
    }

    // Make a list of Navlinks & their properties.
  ];

