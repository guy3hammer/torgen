import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vQCPb8by2JobzWHMOmXisYqPvX7eYktfLKLLnWxUkMe25Ieh92RqYWaohtU2FB6kaZSP7cu1qvYmuwl/pub?w=165&h=166",
    profileUrl: "Guy",
  },
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vT6x3sk0xRzwmMOIs6KweqQN20-HRBeKCeoVdRyGk8GcZXTznN-2_nQfTVYKaCClOz9oB6TAWrQjeei/pub?w=100&h=100",
    profileUrl: "Katya",
  },
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vSGdYzCFHhQRJwmbIjFxJQOllYVZI6rE-ZLtPSS-x1ZrTY3b9QgUZAHo3aVW9w0ccYPZkF22ux5IFdu/pub?w=50&h=50",
    profileUrl: "Odin",
  },
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vQFxsW2QwV_2g5YOnzCfqHdaK5raoor6oPGROjBYAgsoM1_UgUGBVO7jDUnqKhGZTJHqt7R_XqcEdte/pub?w=200&h=200",
    profileUrl: "Emery",
  },
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vRYTnoLWFLVbCoCgJz0NxGq6ph6ymI3PVfLYQ2hTeXJN3aeiWhg8C6Cb6m_I5xHvvzbm76ItI3uUOx4/pub?w=100&h=100",
    profileUrl: "Yegor",
  }, 
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vS5PkiFh5s2lo0PqbDTgkAU4U12c-tIMYmvFaV_J2riJAUl21H3cfm3YvU6Mt8X2lJ-QMrujumkQBEr/pub?w=223&h=224",
    profileUrl: "Carlos",
  },
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vSYk4clufW4MJgu9VFtPQ7TDHiYxMWbw6Neat7r7nWSt__CaZ9m5ZghoUznH8_mppIkwrEyaItBLhqk/pub?w=338&h=343",
    profileUrl: "Nick",
  },
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vQiIfWuJj6qhTraG3vH-2l9ZoXFihUzgeoi0k62fMinpALETMNOOUVcqg8dLspTxjMkFYpox76IUfa4/pub?w=257&h=258",
    profileUrl: "Abe",
  },
  {
    imageUrl: "https://docs.google.com/drawings/d/e/2PACX-1vS9N5HeHnzS9c3fdJN3LzSo805wVs0HD7adxeqdBfSX_I-IeFchhrJWJQFmy6CpuLZlfHt5xfJLab1_/pub?w=75&h=75",
    profileUrl: "Fritz",
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
