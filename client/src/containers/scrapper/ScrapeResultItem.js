import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "../../components/list/ListItem";

const ScrapeResultItem = ({result}) => (
    <ListItem className="flexbox-fill bg-lighter-gray">{result}</ListItem>
);

ScrapeResultItem.propTypes = {
    result : PropTypes.string.isRequired
};
export default ScrapeResultItem;