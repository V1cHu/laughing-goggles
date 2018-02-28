import React from 'react';
import { connect } from 'react-redux';
import { getAvengers } from '../actions/homeActions';
import AvengerTableRow from './AvengerTableRow';

const AvengerTable = (props) => {
    const tableRows = props.avengers.map(avenger => (
        <AvengerTableRow key={avenger.id} avenger={avenger} />)
    )

    return (<div><h2>Avengers List</h2>
        <table className="table table-sm table-hover">
            <thead className="thead-dark">
                <tr>
                    <th className="col-md-2">Name</th>
                    <th className="col-md-2">Avenger Name</th>
                    <th className="col-md-2" style={{ textAlign: "center" }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    </div >)
}


const mapStateToProps = state => {
    return { avengers: state.homeReducer.avengers }
};

export default connect(mapStateToProps)(AvengerTable);