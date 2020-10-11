import React from 'react';

import { faClock, faMapMarker, faPhone  } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary',
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn,NY 10003 USA',
        icon: faMapMarker,
        background: 'dark',
    },
    {
        title: 'Call us now',
        description: '+2372189467139',
        icon: faPhone,
        background: 'primary',
    }
]

const Buisnessinfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default Buisnessinfo;