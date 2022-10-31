import TableCell from './TableCell';
import TableHead from './TableHead';
import PropTypes from 'prop-types';

function Table({ tableTitle, dataCells, tableHeaders, grade }) {
    return (
        <div class="source__tablecontainer" role="region" aria-labelledby="Cap1" tabIndex="0">
            <table class="table-list col-row-headers">
                <caption>{ tableTitle }</caption>
                <tbody>
                    <tr>
                        {tableHeaders.map(item => (
                            <TableHead key={item.id} item={item} />
                        ))}
                    </tr>
                    {/* <tr>
                        {dataCells.map(data => (
                            <TableCell key={data.id} data={data} />
                        ))}
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
    // <>
    //     {(headers === 'Col Headers') ? (
    //     <div class="source__tablecontainer" role="region" aria-labelledby="Cap1" tabIndex="0">
    //         <table class="table-list col-row-headers">
    //             <caption>{ tableTitle }</caption>
    //             <tbody>
    //                 <tr>
    //                     <th scope="col">{ columnHeads }</th>
    //                     <th scope="col">{ columnHeads }</th>
    //                     <th scope="col">{ columnHeads }</th>
    //                     <th scope="col">{ columnHeads }</th>
    //                 </tr>
    //                 <tr>
    //                     {cellData.map(data => (
    //                         <TableCell key={data.id} data={data} />
    //                     ))}
    //                 </tr>
    //                 <tr>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                 </tr>
    //                 <tr>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                 </tr>
    //                 <tr>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>)
    //     :
    //     <div class="source__tablecontainer" role="region" aria-labelledby="Cap1" tabIndex="0">
    //         <table class="table-list col-row-headers">
    //             <caption>{ tableTitle }</caption>
    //             <tbody>
    //                 <tr>
    //                     <th scope="col"></th>
    //                     <th scope="col">{ columnHeads }</th>
    //                     <th scope="col">{ columnHeads }</th>
    //                     <th scope="col">{ columnHeads }</th>
    //                     <th scope="col">{ columnHeads }</th>
    //                 </tr>
    //                 <tr>
    //                     <th scope="row">{ rowHeads }</th>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                 </tr>
    //                 <tr>
    //                     <th scope="row">{ rowHeads }</th>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                 </tr>
    //                 <tr>
    //                     <th scope="row">{ rowHeads }</th>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                 </tr>
    //                 <tr>
    //                     <th scope="row">{ rowHeads }</th>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                     <td>{ cellData }</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>
    //     }
    // </>
    // );
}

Table.propTypes = {
    tableTitle: PropTypes.string,
    columnHeads: PropTypes.string,
    rowHeads: PropTypes.string,
    cells: PropTypes.shape ({
        id: PropTypes.string,
        text: PropTypes.string,
    }),
    headers: PropTypes.oneOf(['Col Headers', 'Col and Row Headers']),
    grade: PropTypes.oneOf(['gradek', 'grade1', 'grade23', 'grade45', 'grade68', 'grade912']),
};
  
// Table.defaultProps = {
//     tableTitle: 'Table Title',
//     columnHeads: 'Column Headers',
//     rowHeads:  'Row Headers',
//     cellData: 'Cell Data',
//     headers: 'Col Headers',
//     grade: 'grade68',
// };

export default Table;