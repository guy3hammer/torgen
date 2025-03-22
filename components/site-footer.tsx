import Link from "next/link";


export function SiteFooter() {
  return (
    <footer>
      <div className="flex items-center justify-center">

	          <img
           		src={'/torgen-ai-logo.png'} 
        	  />
            </div>
<br></br>
<div className="text-xl flex items-center justify-center">Accelerate Your Roadmap: Join the Open Source AI Revolution</div>
<br></br>
<div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Torgen AI
            </Link>
            . All Rights Reserved.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      {/*   <SiteBanner /> */}
    </footer>
  );
}
