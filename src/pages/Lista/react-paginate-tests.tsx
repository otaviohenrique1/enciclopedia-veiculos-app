import * as React from 'react';
import ReactPaginate from 'react-paginate';

class Test extends React.Component {
    render() {
        return (
            <ReactPaginate
                pageCount={1}
                pageRangeDisplayed={10}
                marginPagesDisplayed={2}
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'break-me'}
                breakClassName={'break-class'}
                breakLinkClassName={'break-link'}
                onPageChange={(selectedItem: {selected: number}) => null}
                initialPage={2}
                forcePage={3}
                disableInitialCallback={false}
                containerClassName={'container'}
                pageClassName={'page-li'}
                pageLinkClassName={'page-a'}
                pageLabelBuilder={(page: number) => `${page}`}
                activeClassName={'active'}
                activeLinkClassName={'active'}
                previousClassName={'previous-li'}
                nextClassName={'next-li'}
                previousLinkClassName={'previous-a'}
                nextLinkClassName={'next-a'}
                disabledClassName={'disabled'}
                hrefBuilder={(pageIndex: number) => null}
                extraAriaContext={'aria'}
                ariaLabelBuilder={(page, selected) => selected ? 'Current page' : 'Goto page ' + page}
                eventListener={'onMouseOver'}
            />
        );
    }
}