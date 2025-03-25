import { MagicCard } from "@/components/magicui/magic-card";
import TextShimmer from "@/components/magicui/text-shimmer";



export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">

			<p className="max-width: 400px mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Torgen&apos;s <i>Open-Source-first</i> approach to AI transformation is grounded by professionals with proven track records spanning finance, healthcare, manufacturing, logistics, digital media, and SaaS
			</p>

			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Flexible Solutions <br />
			for Teams of All Sizes
			</h4>
			<br></br>
			<br></br>



			<div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
		

			<li className="h-200 w-100">


		<MagicCard>
		<img src={'/strategy3.gif'} 
        	  />
			<br></br>
		<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
				Strategy Consulting
				</TextShimmer>
				<br></br>
				<p><i>alignment with goals and core drivers,<br></br>
				use case triage, future state roadmap</i></p><br></br></MagicCard>
</li>

              	<li className="h-200 w-100">
				  <MagicCard>
				<img src={'/workshop.gif'} 
        	  />
					  <br></br>
				<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
				Hands-on Workshops
				</TextShimmer>
				<br></br>
				<p><i>practical use-case specific training<br></br>
				for technical and non-technical audiences</i></p><br></br></MagicCard>
		</li>

		<li className="h-200 w-100">
		<MagicCard>
		<img src={'/aiproject.gif'} 
        	  />
			<br></br>
		<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
		Project Consulting
				</TextShimmer>
				<br></br>
				<p><i>mobile/ai-first app dev; predictive modeling;<br></br>
				data viz; legacy code re-arch, migration</i></p><br></br></MagicCard>
</li>


		<li className="h-200 w-100">
		<MagicCard>
		<img src={'/cybersecurity2.gif'} 
        	  />
			<br></br>
		<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
		Security Assessments
				</TextShimmer>
				<br></br>
				<p><i>data security, identity/access, governance,<br></br>
				regulatory compliance, risk/gap analysis</i></p><br></br></MagicCard>
</li>



<li className="h-200 w-100">
		<MagicCard>
		<img src={'/innovation2.gif'} 
        	  />
			<br></br>
		<TextShimmer className="text-3xl font-bold tracking-tight sm:text-3xl">
		Innovation Center
				</TextShimmer>
				<br></br>
				<p><i>secure private hosting for OSAI model/tool<br></br>
				provisioning, tuning, testing and prototyping</i></p><br></br></MagicCard>
</li>

</ul>
</div>

				<br></br>
				<br></br>
				
        </div>
      </div>
    </section>
  );
}
