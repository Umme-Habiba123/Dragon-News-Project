import React, { Suspense } from 'react';
import SocialLogin from '../SocialLogin';
import FingUsOn from '../FingUsOn';
import QZone from '../QZone';
import BgImg from '../BgImg';

const RightAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
            <SocialLogin></SocialLogin>
            <FingUsOn></FingUsOn>
            <QZone></QZone>
            <BgImg></BgImg>
            </Suspense>
        </div>
    );
};

export default RightAside;