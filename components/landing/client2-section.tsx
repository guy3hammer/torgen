import { HyperText } from "@/components/magicui/hyper-text";
import { AvatarCircles } from "@/components/magicui/avatar-circles";


export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">

          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            <i>How Torgen Can Help</i>
          </h4>
		
	
            <HyperText className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
		    World Class Resources</HyperText>
				
        </div>
      </div>
    </section>
  );
}


