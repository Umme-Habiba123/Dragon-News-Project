import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex w-10/12 gap-3 bg-base-200 items-center p-3 mt-3 mx-auto'>
            <button className='btn btn-secondary'>Latest</button>
            <Marquee pauseOnHover={true}>
                <p className='font-bold'>Dhaka Engages with Myanmar Junta and Arakan Army
                    National Security Adviser Khalilur Rahman announced that Bangladesh is in contact with Myanmar's junta government in Naypyidaw and the Arakan Army in Rakhine State to discuss stability, humanitarian aid, and Rohingya repatriation.
                    Chattogram Customs Seizes Tk 15 Crore Worth of Fake Banderoles
                    Authorities seized a substantial quantity of counterfeit and used banderoles from an underground bunker in a factory owned by former Chattogram City Corporation councillor Abdur Sabur Liton. 
                    Masud Ali Khan Passes Away
                    Renowned actor Masud Ali Khan, a towering figure in Bangladeshi performing arts, passed away at his home in Dhaka’s Green Road, leaving behind a remarkable legacy spanning over seven decades.

                </p>
            </Marquee>
        </div>
    );
};

export default Latest;
