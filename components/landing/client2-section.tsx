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
		

			<p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Torgen&apos;s <i>Open-Source-first</i> approach to AI transformation is grounded by a proven track record for innovation spanning finance, healthcare, 
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
				<TextShimmer className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
				OSAI Training Workshop
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>practical open source centric use case training for</i></span></p>
				<p><span><i>technical and non-technical audiences</i></span></p>
				<br></br>
				<br></br>
			
				<div>
				<TextShimmer className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
				<strong>OSAI Strategy Consulting</strong>
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>alignment with future state drivers, use case</i></span></p>
				<p><span><i>productivity/cost-savings analysis, roadmap</i></span></p>
				<br></br>
				<br></br>
				
				<div>
				<TextShimmer className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
				<strong>OSAI Security Assessment</strong>
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>data security, identity/access, logging, governance,</i></span></p>
				<p><span><i>regulatory compliance, risk/gap analysis</i></span></p>
				<br></br>
				<br></br>
				
				<div>
				<TextShimmer className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
				<strong>OSAI Project Consulting</strong>
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>mobile/ai-first app dev; predictive modeling; data viz;</i></span></p>
				<p><span><i>legacy code modernization, re-arch, re-platform, migration</i></span></p>
				<br></br>
				<br></br>
				
				<div>
				<TextShimmer className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
				<strong>OSAI Innovation Center</strong>
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
