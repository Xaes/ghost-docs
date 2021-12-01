import ThemeLayout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import PropTypes from "prop-types";
import "./"

export default function Layout({
    children,
    disableTableOfContents,
    title,
    headings,
}) {
    return (
        <Layout />
    )
}


Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    disableTableOfContents: PropTypes.bool,
    title: PropTypes.string,
    headings: PropTypes.array,
};

Layout.defaultProps = {
    disableTableOfContents: false,
    title: '',
    headings: null,
};