import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

interface TabProps {
    className?: String | undefined;
}

export default function TabNavigator() {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState([
        { title: 'Home', element: HomeTab },
        { title: 'Seneli 20 yrs, Female, Radiology', element: PatientTab },
        { title: 'Settings', element: SettingsTab },
        { title: 'Counter Tab', element: HomeTab }
    ]);

    const removeTab = (index: number) => {
        let newTabs = tabs.slice(0,index).concat(tabs.slice(index + 1, tabs.length));
        console.log(newTabs);
        setTabs(newTabs);
    }

    return (
        <div className="w-full h-full">
            <div className="flex bg-gray-100 items-stretch h-[35px]">
                <button className='flex items-center px-2'>
                    <ArrowBackIosIcon className='!text-[12px]' />
                </button>

                <div className="tabs flex items-stretch [&>div]:flex [&>div]:items-center [&>div]:gap-x-[10px] 
            [&>div]:px-4 [&>div]:text-[13px] [&>div]:leading-[13px] [&>div]:cursor-pointer text-[#00000093] [&>div]:font-medium">

                    {
                        tabs.map((tab, index) => {
                            return (
                                <div key={index} className={index == activeTab ? 'bg-white border-b-[2.5px] border-[#2196F3] text-[#2196F3]' : ''}
                                    onClick={() => setActiveTab(index)}>
                                    <span>{tab.title}</span>
                                    <button className='' onClick={() => removeTab(index)}>
                                        <CloseIcon className='!text-[16px]' />
                                    </button>
                                </div>
                            );
                        })
                    }
                    {/* <div className='bg-white border-b-[2.5px] border-[#2196F3] text-[#2196F3]'>
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
                    </div> */}

                </div>

                <button className='ms-auto flex items-center px-2'>
                    <ArrowForwardIosIcon className='!text-[12px]' />
                </button>
            </div>

            <div className="bg-white">
                {
                    tabs.map((tab, index) => {
                        return (
                            <tab.element key={index} className={index != activeTab ? 'hidden' : ''} />
                        );
                    })
                }
            </div>
        </div>
    )
}

function HomeTab({ className }: TabProps) {
    const [count, setCount] = useState(0);

    return (
        <div className={`flex flex-col justify-center items-center py-20 ${className}`}>
            <div>Home Tab</div>
            <p>{count}</p>
            <button className='bg-red-400 rounded-lg px-4 py-2' onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
        </div>
    )
}

function SettingsTab({ className }: TabProps) {
    const [count, setCount] = useState(0);

    return (
        <div className={`flex flex-col justify-center items-center py-20 ${className}`}>
            <div>Settings Tab</div>
            <p>{count}</p>
            <button className='bg-red-400 rounded-lg px-4 py-2' onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
        </div>
    )
}

function PatientTab({ className }: TabProps) {
    const [count, setCount] = useState(0);

    return (
        <div className={`flex flex-col justify-center items-center py-20 ${className}`}>
            <div>Patient Tab</div>
            <input type="text" placeholder='Enter patients name....' />
            <p>{count}</p>
            <button className='bg-red-400 rounded-lg px-4 py-2' onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
        </div>
    )
}