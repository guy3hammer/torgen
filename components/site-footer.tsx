import Link from "next/link";


export function SiteFooter() {
  return (
    <footer>
      <div className="center">

	          <img
           		src={'/torgen-ai-logo.png'} 
        	  />

            <p className="max-w-xs">Everyone wins with Open Source AI</p>

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
