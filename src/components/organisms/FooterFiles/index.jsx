import React from 'react';
import { Icons, Text } from '../../Atoms';

export const FooterFiles = () => {
    return (
        <div>
            <div className='pb-6 flex items-center justify-center gap-12'>
                <Icons name="fa-brands_facebook" />

                <Icons name="fa-brands_instagram" />


                <Icons name="fa-brands_twitter" />


                <Icons name="fa-brands" />
            </div>

            <div className='pb-8 flex items-center text-sm font-medium justify-center gap-12'>
                <Text type="p" text="Condition of Use" />
                <Text type="p" text="Privacy & policy" />
                <Text type="p" text="Press Room" />
            </div>

            <div className='pb-16 flex items-center text-sm text-gray-400 font-medium justify-center'>
                <Text type="p" text="&#169; 2021 MovieBox by Omayuku Oritsetsolayemi" />
            </div>
        </div>
    )
}
