import TextShimmer from "@/components/magicui/text-shimmer";

export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
			<h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            World Class Resources
			</h2>

			<p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Torgen&apos;s <i>Open-Source-first</i> approach to AI transformation is driven by 
            US citizens with a proven track record for innovation spanning finance, healthcare, 
            manufacturing, logistics, retail/e-comm, digital media and SaaS
			</p>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Flexible Solutions for Companies of All Sizes
			</h4>

				<br></br>
				<br></br>
				
				<div>
				<TextShimmer className="inline-flex items-center justify-center">
				<span><h2><strong>AI Workshop/Bootcamp</strong></h2></span>
				</TextShimmer>
				</div>
				
				<br></br>
				<p><span><i>practical open source centric use case training for</i></span></p>
				<p><span><i>technical and non-technical audiences</i></span></p>

				<br></br>
				<br></br>
			
				<div className="mt-6">
				<ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              
				<TextShimmer className="inline-flex items-center justify-center">
				<span><h2><strong>AI Workshop/Bootcamp</strong></h2></span>
				</TextShimmer>
				
				<br></br>
				<p><span><i>practical open source centric use case training for</i></span></p>
				<p><span><i>technical and non-technical audiences</i></span></p>
              
				</ul>
				</div>
				
        </div>
      </div>
    </section>
  );
}
