import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vSGdYzCFHhQRJwmbIjFxJQOllYVZI6rE-ZLtPSS-x1ZrTY3b9QgUZAHo3aVW9w0ccYPZkF22ux5IFdu/pub?w=50&h=50",
    profileUrl: "Odin",
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


export default function AvatarCirclesDemo() {
  return ( 
    <div
      className="relative flex h-[50px] w-full items-center justify-center overflow-hidden p-10">
      <AvatarCircles numPeople={99} avatarUrls={avatars} />
      </div>
    )
}
