import { ClockIcon, CurrencyDollarIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { classNames } from '../../utils/classNames'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { truncate } from '../../utils/string';
// calling this function from string.js to truncate the public key to 5 characters
require('@solana/wallet-adapter-react-ui/styles.css')

const NavMenu = ({ connected, publicKey }) => {
    const menus = [
        {
            icon: ClockIcon,
            item: 'Activity',
            current: true,
        },
        {
            icon: CurrencyDollarIcon,
            item: 'Cash Card',
            current: false,
        },
        {
            icon: Cog6ToothIcon,
            item: 'Settings',
            current: false,
        },
    ]

    console.log(connected, publicKey);
    return (
        <nav className="flex flex-1 items-center justify-center">
            <ul className="flex flex-col space-y-10">
                {menus.map(({ icon, item, current, action }, i) => (
                    <NavMenuItem key={i} Icon={icon} item={item} current={current} action={action} />
                ))}
                <li>
                    <WalletMultiButton className="phantom-button" startIcon={<UserCircleIcon />} style={{height: 24,width: 24}}>
                            {/* if connected render the truncated public key  */}
                            <span className="text-white font-semibold"> {connected ? truncate(publicKey.toString()) : "Connect wallet"}</span>
                    </WalletMultiButton>
                </li>
            </ul>
        </nav >
    )
}

const NavMenuItem = ({ Icon, item, current, action }) => {
    return (
        <li onClick={action} className={classNames('flex cursor-pointer space-x-3 transition-all hover:text-gray-100', current ? 'text-white' : 'text-[#15ec3c]', 'font-semibold')}>
            <Icon className="h-6 w-6 " />
            <span>{item}</span>
        </li>
    )
}

export default NavMenu
