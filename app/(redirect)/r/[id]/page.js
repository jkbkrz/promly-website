"use client"

import { generateTrackingLink } from "@/server-actions";
import { useEffect } from "react";


export default function Page({ searchParams, params }) {
    const id = params.id
    const { targetUrl } = searchParams;

    let domain = (new URL(targetUrl));
    domain = domain.hostname;

    useEffect(() => {
        redirect();
    })

    const redirect = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        try {
            const url = await generateTrackingLink(id, targetUrl);
            window.location.href = url;
        } catch {
            window.location.href = targetUrl;
        }
    }

    return (
        <div className="flex flex-col items-center w-full my-20 gap-10 px-10">
            <div className="bg-green-200 rounded-full p-6 w-20 h-20 flex justify-center items-center">
                <img src="/lock.png" className="w-14" />
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="106.6"
                height="30.6"
                fill="none"
                viewBox="0 0 80 23"
                className='fill-black dark:fill-white'
            >
                <path
                    d="M0 17.546V.948h7.403c1.08 0 2.035.238 2.869.712a5.31 5.31 0 012.01 1.944c.507.822.76 1.747.76 2.774 0 1.075-.253 2.04-.76 2.893a5.432 5.432 0 01-2.01 1.992c-.834.49-1.79.735-2.869.735H4.168v5.548H0zm4.094-9.081h2.721c.36 0 .687-.087.98-.26.295-.175.532-.412.712-.712.18-.3.27-.648.27-1.044 0-.41-.09-.758-.27-1.043a1.882 1.882 0 00-.711-.664 2.038 2.038 0 00-.98-.237H4.093v3.96zm10.495 9.081V4.956h3.726l.172 4.102-.736-.783c.197-.68.515-1.288.956-1.826a5.315 5.315 0 011.594-1.28 4.12 4.12 0 011.937-.474c.294 0 .563.024.809.071.261.047.498.103.71.166L22.68 9.129c-.18-.11-.425-.198-.735-.261a3.577 3.577 0 00-.932-.119c-.36 0-.695.064-1.005.19a2 2 0 00-.785.498 2.64 2.64 0 00-.515.783c-.114.3-.171.64-.171 1.02v6.306h-3.947zm15.508.238c-1.356 0-2.565-.285-3.628-.854a6.69 6.69 0 01-2.5-2.324c-.605-.98-.907-2.102-.907-3.367 0-1.264.302-2.387.907-3.367a6.69 6.69 0 012.5-2.324c1.063-.569 2.272-.853 3.628-.853 1.357 0 2.558.284 3.604.853 1.063.57 1.896 1.344 2.5 2.324.605.98.908 2.103.908 3.367 0 1.265-.303 2.387-.907 3.367-.605.98-1.438 1.755-2.5 2.324-1.047.569-2.248.854-3.604.854zm0-3.273c.589 0 1.112-.142 1.57-.426a3.006 3.006 0 001.078-1.162c.262-.49.384-1.052.368-1.684.016-.632-.106-1.193-.368-1.683a2.966 2.966 0 00-1.079-1.186 2.909 2.909 0 00-1.569-.427c-.588 0-1.119.143-1.593.427-.457.285-.817.68-1.079 1.186-.261.49-.384 1.05-.367 1.683-.017.632.106 1.194.367 1.684.262.49.622.877 1.079 1.162a3.036 3.036 0 001.593.426zm8.326 3.035V4.956h3.727l.122 2.276-.514.024c.195-.411.44-.775.735-1.091a4.39 4.39 0 011.03-.783 5.214 5.214 0 011.2-.497c.426-.111.85-.166 1.276-.166.637 0 1.217.094 1.74.284.523.19.98.498 1.373.925.392.41.703.972.931 1.683l-.612-.047.196-.38c.212-.379.482-.719.809-1.019a4.922 4.922 0 011.127-.783 5.452 5.452 0 011.275-.497c.441-.111.866-.166 1.275-.166 1.03 0 1.888.197 2.574.592.687.38 1.201.957 1.544 1.731.36.775.54 1.715.54 2.822v7.682h-3.947v-7.374c0-.506-.074-.925-.22-1.257a1.488 1.488 0 00-.663-.735c-.278-.173-.629-.26-1.054-.26-.343 0-.662.055-.956.166-.278.11-.523.26-.735.45a2.049 2.049 0 00-.638 1.518v7.492h-3.947V10.15c0-.475-.073-.878-.22-1.21a1.614 1.614 0 00-.662-.759 1.986 1.986 0 00-1.03-.26c-.343 0-.662.055-.956.166a2.46 2.46 0 00-.735.45c-.196.19-.352.411-.466.664-.115.253-.172.53-.172.83v7.516h-3.947zm22.405 0V0h3.922v17.546h-3.922zM68.306 23l2.967-6.758.049 1.945-6.276-13.231h4.437l2.746 6.33c.147.317.286.657.417 1.02.13.364.228.712.294 1.044l-.54.308c.098-.237.205-.53.32-.878l.416-1.162 2.402-6.662H80l-5.54 12.59L72.204 23h-3.898z"
                ></path>
            </svg>
            <span className="text-center">Przekierowywanie do strony docelowej produktu na <b>{domain}</b></span>
            <div role="status mx-auto">
                <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-neutral-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <span className="text-xs mt-32">Trwa to zbyt długo? <a href={targetUrl} className="font-bold underline">Kliknij tutaj</a></span>
                <span className="text-xs text-neutral-500">Product ID: {id}</span>
            </div>
        </div>
    )
}