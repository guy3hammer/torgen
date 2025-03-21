import { AvatarCircles } from "@/registry/magicui/avatar-circles";
import { HyperText } from "@/components/magicui/hyper-text";
import TextShimmer from "@/components/magicui/text-shimmer";

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


const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={99} avatarUrls={avatars} />;
}


		

			<p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Torgen&apos;s <i>Open-Source-first</i> approach to AI transformation is grounded by innovation track records spanning finance, healthcare, 
            manufacturing, logistics, retail/e-comm, digital media and SaaS
			</p>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Flexible Solutions for Teams of All Sizes
			</h4>

				<br></br>
				<br></br>
				
				<div>
				<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
				OSAI Training Workshop
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>practical open source centric use case training for</i></span></p>
				<p><span><i>technical and non-technical audiences</i></span></p>
				<br></br>
				<br></br>
			
				<div>
				<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
				OSAI Strategy Consulting
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>alignment with future state drivers, use case</i></span></p>
				<p><span><i>productivity/cost-savings analysis, roadmap</i></span></p>
				<br></br>
				<br></br>
				
				<div>
				<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
				OSAI Security Assessment
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>data security, identity/access, logging, governance,</i></span></p>
				<p><span><i>regulatory compliance, risk/gap analysis</i></span></p>
				<br></br>
				<br></br>
				
				<div>
				<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
				OSAI Project Consulting
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>mobile/ai-first app dev; predictive modeling; data viz;</i></span></p>
				<p><span><i>legacy code modernization, re-arch, re-platform, migration</i></span></p>
				<br></br>
				<br></br>
				
				<div>
				<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
				OSAI Innovation Center
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>private high-performance environment for OSAI model/tool</i></span></p>
				<p><span><i>provisioning, tuning, testing and use case prototyping</i></span></p>
				<br></br>
				<br></br>
				
        </div>
      </div>
    </section>
  );
}
