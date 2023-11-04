'use client'
import Link from "next/link";
import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { getProductsCount } from '@/actions';

export default function HomeHeader() {
    const [count, setCount] = useState(null)

    useEffect(() => {
        getProductsCount().then((res) => setCount(res.count)).catch((error) => console.log(error))
    }, [])

    return <nav className={`top-0 z-10 mx-auto fixed bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-95 backdrop-blur-xl w-screen flex items-center justify-between py-4 px-8  border-b border-b-black border-opacity-10 dark:border-b-zinc-800`} style={{ maxWidth: 1920 }}>
        <div className="flex flex-row items-center gap-6 justify-start text-neutral-500 text-sm font-normal">
            <Link href="/" className="flex">
                {/* <Image src="promly.svg" width={80} height={23} alt="Promly logo" /> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="23"
                    fill="none"
                    viewBox="0 0 80 23"
                    className='fill-black dark:fill-white'
                >
                    <path
                        d="M0 17.546V.948h7.403c1.08 0 2.035.238 2.869.712a5.31 5.31 0 012.01 1.944c.507.822.76 1.747.76 2.774 0 1.075-.253 2.04-.76 2.893a5.432 5.432 0 01-2.01 1.992c-.834.49-1.79.735-2.869.735H4.168v5.548H0zm4.094-9.081h2.721c.36 0 .687-.087.98-.26.295-.175.532-.412.712-.712.18-.3.27-.648.27-1.044 0-.41-.09-.758-.27-1.043a1.882 1.882 0 00-.711-.664 2.038 2.038 0 00-.98-.237H4.093v3.96zm10.495 9.081V4.956h3.726l.172 4.102-.736-.783c.197-.68.515-1.288.956-1.826a5.315 5.315 0 011.594-1.28 4.12 4.12 0 011.937-.474c.294 0 .563.024.809.071.261.047.498.103.71.166L22.68 9.129c-.18-.11-.425-.198-.735-.261a3.577 3.577 0 00-.932-.119c-.36 0-.695.064-1.005.19a2 2 0 00-.785.498 2.64 2.64 0 00-.515.783c-.114.3-.171.64-.171 1.02v6.306h-3.947zm15.508.238c-1.356 0-2.565-.285-3.628-.854a6.69 6.69 0 01-2.5-2.324c-.605-.98-.907-2.102-.907-3.367 0-1.264.302-2.387.907-3.367a6.69 6.69 0 012.5-2.324c1.063-.569 2.272-.853 3.628-.853 1.357 0 2.558.284 3.604.853 1.063.57 1.896 1.344 2.5 2.324.605.98.908 2.103.908 3.367 0 1.265-.303 2.387-.907 3.367-.605.98-1.438 1.755-2.5 2.324-1.047.569-2.248.854-3.604.854zm0-3.273c.589 0 1.112-.142 1.57-.426a3.006 3.006 0 001.078-1.162c.262-.49.384-1.052.368-1.684.016-.632-.106-1.193-.368-1.683a2.966 2.966 0 00-1.079-1.186 2.909 2.909 0 00-1.569-.427c-.588 0-1.119.143-1.593.427-.457.285-.817.68-1.079 1.186-.261.49-.384 1.05-.367 1.683-.017.632.106 1.194.367 1.684.262.49.622.877 1.079 1.162a3.036 3.036 0 001.593.426zm8.326 3.035V4.956h3.727l.122 2.276-.514.024c.195-.411.44-.775.735-1.091a4.39 4.39 0 011.03-.783 5.214 5.214 0 011.2-.497c.426-.111.85-.166 1.276-.166.637 0 1.217.094 1.74.284.523.19.98.498 1.373.925.392.41.703.972.931 1.683l-.612-.047.196-.38c.212-.379.482-.719.809-1.019a4.922 4.922 0 011.127-.783 5.452 5.452 0 011.275-.497c.441-.111.866-.166 1.275-.166 1.03 0 1.888.197 2.574.592.687.38 1.201.957 1.544 1.731.36.775.54 1.715.54 2.822v7.682h-3.947v-7.374c0-.506-.074-.925-.22-1.257a1.488 1.488 0 00-.663-.735c-.278-.173-.629-.26-1.054-.26-.343 0-.662.055-.956.166-.278.11-.523.26-.735.45a2.049 2.049 0 00-.638 1.518v7.492h-3.947V10.15c0-.475-.073-.878-.22-1.21a1.614 1.614 0 00-.662-.759 1.986 1.986 0 00-1.03-.26c-.343 0-.662.055-.956.166a2.46 2.46 0 00-.735.45c-.196.19-.352.411-.466.664-.115.253-.172.53-.172.83v7.516h-3.947zm22.405 0V0h3.922v17.546h-3.922zM68.306 23l2.967-6.758.049 1.945-6.276-13.231h4.437l2.746 6.33c.147.317.286.657.417 1.02.13.364.228.712.294 1.044l-.54.308c.098-.237.205-.53.32-.878l.416-1.162 2.402-6.662H80l-5.54 12.59L72.204 23h-3.898z"
                    ></path>
                </svg>
            </Link>

            <div className='hidden md:flex flex-row gap-6 items-center'>
                <div>
                    <Link href='/promotions'>
                        Promocje
                        {Boolean(count) && <div className='inline-block rounded-full bg-neutral-600 px-1.5 ml-1 text-xs font-medium text-white dark:text-black dark:bg-neutral-300'>{count}</div>}
                    </Link>

                </div>
                <Link href='/contact'>Kontakt</Link>
            </div>

        </div>

        <div className="hidden md:flex gap-1 gmd:ap-2" >
            <a href='https://play.google.com/store/apps/details?id=pl.promly.promly'
                target='_blank'
            >
                <img src="/as_pl-cropped.svg" className="h-8 md:h-10 opacity-50" />
            </a>

            <a href='https://play.google.com/store/apps/details?id=pl.promly.promly'
                target='_blank'
            >
                <img src="/gp_pl-cropped.svg" className="h-8 md:h-10" />
            </a>
        </div>


        <Menu as="div" className="relative inline-block md:hidden text-left z-10">
            <div>
                <Menu.Button className="inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className=" absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-black  ring-1 ring-black ring-opacity-5 focus:outline-none dark:border dark:border-zinc-800 divide-y divide-gray-100 dark:divide-zinc-800">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href='/promotions'
                                    className={`bg-gray-10 text-black dark:text-white
                                         group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <span>Promocje</span>
                                    {count && <div className='inline-block rounded-full bg-neutral-600 px-1.5 ml-1 text-xs text-white dark:text-black dark:bg-neutral-300'>{count}</div>}
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href='/contact'
                                    className={`  text-black dark:text-white
                                        group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <span>Kontakt</span>
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href='/privacy-policy'
                                    className={`  'text-black dark:text-white'
                                         group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    <span>Polityka Prywatności</span>
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1 flex flex-row">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href='https://play.google.com/store/apps/details?id=pl.promly.promly'
                                    target='_blank'
                                    className={`  text-white'text-black dark:text-white'
                                         group flex w-full items-center rounded-md px-1 py-1 text-sm`}
                                >
                                    <img src="/as_pl-cropped.svg" className="h-full opacity-50"
                                    />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href='https://play.google.com/store/apps/details?id=pl.promly.promly'
                                    target='_blank'
                                    className={`text-black dark:text-white
                                         group flex w-full items-center rounded-md px-1 py-1 text-sm`}
                                >
                                    <img src="/gp_pl-cropped.svg" className="h-full"
                                    />
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>

    </nav >
}