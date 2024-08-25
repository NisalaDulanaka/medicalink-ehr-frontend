import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function TabBar() {

    return (
        <div className="flex bg-gray-100 items-stretch h-[35px]">
            <button className='flex items-center px-2'>
                <ArrowBackIosIcon className='!text-[12px]' />
            </button>

            <div className="tabs flex items-stretch [&>div]:flex [&>div]:items-center [&>div]:gap-x-[10px] 
            [&>div]:px-4 [&>div]:text-[13px] [&>div]:leading-[13px] text-[#00000093] [&>div]:font-medium">

                <div className='bg-white border-b-[2.5px] border-[#2196F3] text-[#2196F3]'>
                    <span>Home</span>
                    <button className='hidden'>
                        <CloseIcon className='!text-[16px]' />
                    </button>
                </div>
                <div>
                    <span>Seneli 20 yrs, Female, Radiology</span>
                    <button className=''>
                        <CloseIcon className='!text-[16px]' />
                    </button>
                </div>
                <div>
                    <span>Clendar</span>
                    <button className=''>
                        <CloseIcon className='!text-[16px]' />
                    </button>
                </div>
                <div>
                    <span>Settings</span>
                    <button className=''>
                        <CloseIcon className='!text-[16px]' />
                    </button>
                </div>

            </div>

            <button className='ms-auto flex items-center px-2'>
                <ArrowForwardIosIcon className='!text-[12px]' />
            </button>
        </div>
    );
}

