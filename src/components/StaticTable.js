import PropTypes from 'prop-types';

function Table({ headers, tableTitle, columnHeads, rowHeads, cellData, grade }) {
    return (
    <>
        {(headers === 'Col Headers') ? (
        <div class="source__tablecontainer" role="region" aria-labelledby="Cap1" tabIndex="0">
            <table class="table-list col-row-headers">
                <caption>{ tableTitle }</caption>
                <tbody>
                    <tr>
                        <th scope="col">{ columnHeads }</th>
                        <th scope="col">{ columnHeads }</th>
                        <th scope="col">{ columnHeads }</th>
                        <th scope="col">{ columnHeads }</th>
                    </tr>
                    <tr>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                    </tr>
                    <tr>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                    </tr>
                    <tr>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                    </tr>
                </tbody>
            </table>
        </div>)
        :
        <div class="source__tablecontainer" role="region" aria-labelledby="Cap1" tabIndex="0">
            <table class="table-list col-row-headers">
                <caption>{ tableTitle }</caption>
                <tbody>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">{ columnHeads }</th>
                        <th scope="col">{ columnHeads }</th>
                        <th scope="col">{ columnHeads }</th>
                        <th scope="col">{ columnHeads }</th>
                    </tr>
                    <tr>
                        <th scope="row">{ rowHeads }</th>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                    </tr>
                    <tr>
                        <th scope="row">{ rowHeads }</th>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                    </tr>
                    <tr>
                        <th scope="row">{ rowHeads }</th>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                    </tr>
                    <tr>
                        <th scope="row">{ rowHeads }</th>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                        <td>{ cellData }</td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
    </>
    );
}

Table.propTypes = {
    tableTitle: PropTypes.string,
    columnHeads: PropTypes.string,
    rowHeads: PropTypes.string,
    cellData: PropTypes.string,
    headers: PropTypes.oneOf(['Col Headers', 'Col and Row Headers']),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
Table.defaultProps = {
    tableTitle: 'Table Title',
    columnHeads: 'Column Headers',
    rowHeads:  'Row Headers',
    cellData: 'Cell Data',
    headers: 'Col Headers',
    grade: 'grade68',
};

export default Table;