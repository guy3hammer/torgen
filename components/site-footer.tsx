import Link from "next/link";


export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <Link href="/" className="flex items-center gap-2">

	          <img
           		src={'/torgen-ai-logo.png'} 
        	  />
              
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Torgen AI
              </span>
            </Link>
            <p className="max-w-xs">Everyone wins when AI is Open Source</p>
          </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">

          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Torgen AI
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      {/*   <SiteBanner /> */}
    </footer>
  );
}
