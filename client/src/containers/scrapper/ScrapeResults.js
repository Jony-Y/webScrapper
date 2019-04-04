import React from 'react';
import List from "../../components/list/List";

const ScrapeResults = ({children}) => (
    <List className="flexbox-fill flex-center-start flex-column h-fill overflow-y-auto">
        {children}
    </List>
);

export default ScrapeResults;