import React from 'react';

class Distributor extends React.Component
{
    constructor (data) {
        super(data);
        this.distributor = data;
    }

    render () {


        return (
            <tr>
                <td>{distributor.name}</td>
                <td>{distributor.address}</td>
                <td>{distributor.phone}</td>
                <td>{distributor.additional}</td>
            </tr>
        );
    }
}

export default Distributor;
