import { ListItemText, ListSubheader,  ListItemIcon, ListItemButton} from '@mui/material';

import { MdOutlineAssignmentInd, MdOutlineDashboardCustomize, MdAddShoppingCart } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineBarChart } from 'react-icons/ai';
import { IoLayers } from 'react-icons/io5';

export const mainListItems = (
    <>
        <ListItemButton>
            <ListItemIcon>
                <MdOutlineDashboardCustomize />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <MdAddShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <BsFillPeopleFill />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AiOutlineBarChart />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <IoLayers />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItemButton>
    </>
);

export const secondaryListItems = (
    <>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <MdOutlineAssignmentInd />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <MdOutlineAssignmentInd />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <MdOutlineAssignmentInd />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </>
);