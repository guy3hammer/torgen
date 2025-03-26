import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "/Nick.jpg",
    profileUrl: "Nick",
  },
  {
    imageUrl: "/Guy.jpg",
    profileUrl: "Guy",
  },
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vT6x3sk0xRzwmMOIs6KweqQN20-HRBeKCeoVdRyGk8GcZXTznN-2_nQfTVYKaCClOz9oB6TAWrQjeei/pub?w=100&h=100",
    profileUrl: "Katya",
  },
  {
    imageUrl: "/Peter.jpg",
    profileUrl: "Peter",
  },
  {
    imageUrl: "/Kenji.jpg",
    profileUrl: "Kenji",
  },
  {
    imageUrl: "Isla.jpg",
    profileUrl: "Isla",
  }, 
  {
    imageUrl: "/Fritz.png",
    profileUrl: "Fritz",
  },

  {
    imageUrl: "/Abe.jpg",
    profileUrl: "Abe",
  },
  {
    imageUrl: "/Mary.jpg",
    profileUrl: "Mary",
  },
];


export default function AvatarCirclesDemo() {
  return ( 
    <div
      className="relative flex h-[50px] w-full items-center justify-center overflow-hidden p-10">
      <AvatarCircles numPeople={99} avatarUrls={avatars} />
      </div>
    )
}
