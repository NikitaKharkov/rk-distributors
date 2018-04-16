import React, {Component} from 'react';
import Distributor from './Distributor';

class Distributors extends Component
{
    render () {
        const {dist} = this.props;
        return (
            <table className={ui }>
                <thead>
                    <th>Имя распространителя</th>
                    <th>Адрес</th>
                    <th>Номер телефона</th>
                    <th>Дополнительные сведения</th>
                </thead>
                <tbody>
                    <tr>
                    {
                        distributors.map((distributor) => {
                            return <Distributor data={distributor} />
                        })
                    }
                    </tr>
                </tbody>

            </table>
        )
    }
}
