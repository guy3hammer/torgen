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
    profileUrl: "Emery",
  }, 
  {
    imageUrl: "https://docs.google.com/dhttps://docs.google.com/drawings/d/e/2PACX-1vT0QxeVHJ8TAo8bGadYgiAEsxt3mS_W2639Ti6Oo_KoJ3-5j8ITP1Q4fTpSpvWquY4_3-BMUml2oTGb/pub?w=261&h=262rawings/d/e/2PACX-1vTBRLx8Ja2yyBiGVwz6abEWckHqC_K_LojjzwPrspytSywC-Ut5nkoigrTZNiFu-kCIpyQsyW874nTG/pub?w=200&h=199",
    profileUrl: "Pat",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/https://docs.google.com/drawings/d/e/2PACX-1vQZ1S4iDsHp5EFzjpPpkSoPAfwYK6VbZoqVmgNgbuD6EGQqPXMqLjolgLM_f4WbC_5EvDpd25jhA8Or/pub?w=75&h=75",
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
