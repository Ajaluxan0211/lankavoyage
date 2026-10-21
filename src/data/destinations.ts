import sigiriyaImage from "../assets/sigiriya-hero.jpg";
import ellaImage from "../assets/ella-bridge.jpg";
import mirissaImage from "../assets/mirissa-beach.jpg";
import nuwaraImage from "../assets/nuwara-eliya.jpg";
import type { Destination } from "../types/destination";

export const destinations: Destination[] = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    image: sigiriyaImage,
    description: "Ancient rock fortress and golden-hour views",
    searchTerm: "Sigiriya",
  },
  {
    id: "ella",
    name: "Ella",
    image: ellaImage,
    description: "Scenic mountain views and the Nine Arch Bridge",
    searchTerm: "Ella",
  },
  {
    id: "mirissa",
    name: "Mirissa",
    image: mirissaImage,
    description: "Palm-lined beaches and coastal sunsets",
    searchTerm: "Mirissa",
  },
  {
    id: "nuwaraeliya",
    name: "Nuwara Eliya",
    image: nuwaraImage,
    description: "Cool highlands, gardens and tea plantations",
    searchTerm: "Nuwara Eliya",
  },
];
