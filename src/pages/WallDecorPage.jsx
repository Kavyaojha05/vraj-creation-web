import CategoryLayout from "../components/CategoryLayout";

// Wall Decor Images Import
import Green_Jharokha from "../assets/wall-decor/green-jharokha.jpg";
import Wooden_Jharokha_Decor from "../assets/wall-decor/Handcrafted Wooden Jharokha Decor _ Indian Palace Window Wall Hanging.jpg";
import Radha_Krishna_Jhoola from "../assets/wall-decor/Hanging Radha Krishna Jhoola.jpg";
import Krishna_Flute_Wall_Decor from "../assets/wall-decor/Krishna Flute Wall Decor_ Wrought Iron Spiritual Art - Etsy.jpg";
import Metal_Wall_Sculpture from "../assets/wall-decor/Metal wall sculpture, traditional Indian couple art.jpg";
import Guitar_Musicians_Wall_Hanging from "../assets/wall-decor/Red & Blue Guitar Musicians Wall Hanging – Artistic Music Wall Decor for Living Room.jpg";
import Krishna_Tree_Of_Life from "../assets/wall-decor/Stunning Metal Krishna Tree of Life Wall Art _ Traditional Home Decor  affiliate marketing ad.jpg";
import Wooden_Elephant_Head from "../assets/wall-decor/Wooden elephant head hand-painted.jpg";

export default function WallDecorPage() {
  const products = [
    {
      id: "wall-1",
      name: "Green Jharokha",
      category: "Wall Décor",
      description: "Traditional hand-painted ethnic green solid wooden jharokha wall hanging designed to give a royal vintage palace look to your living space.",
      image: Green_Jharokha,
    },
    {
      id: "wall-2",
      name: "Handcrafted Wooden Jharokha Decor",
      category: "Wall Décor",
      description: "Intricately carved pure wooden palace window wall hanging featuring classic heritage motifs, rich artistic craftsmanship, and fine traditional wood detailing.",
      image: Wooden_Jharokha_Decor,
    },
    {
      id: "wall-3",
      name: "Hanging Radha Krishna Jhoola",
      category: "Wall Décor",
      description: "Spiritual and decorative hanging swing showpiece depicting Lord Krishna and Radha, crafted with traditional fine art for festive home styling.",
      image: Radha_Krishna_Jhoola,
    },
    {
      id: "wall-4",
      name: "Krishna Flute Wall Decor",
      category: "Wall Décor",
      description: "Exquisite spiritual art piece highlighting Lord Krishna's divine flute and peacock feather motifs with fine artisanal detailing.",
      image: Krishna_Flute_Wall_Decor,
    },
    {
      id: "wall-5",
      name: "Metal Wall Sculpture Couple Art",
      category: "Wall Décor",
      description: "Traditional metal art sculpture portraying ethnic couple aesthetics, ideal for modern and rustic interior walls.",
      image: Metal_Wall_Sculpture,
    },
    {
      id: "wall-6",
      name: "Guitar Musicians Wall Hanging",
      category: "Wall Décor",
      description: "Vibrant red and blue artistic music wall decor featuring traditional musicians playing instruments, crafted for living rooms.",
      image: Guitar_Musicians_Wall_Hanging,
    },
    {
      id: "wall-7",
      name: "Krishna Tree of Life Wall Art",
      category: "Wall Décor",
      description: "Stunning Tree of Life wall sculpture combined with divine Krishna elements, offering a harmonious blend of nature and spirituality.",
      image: Krishna_Tree_Of_Life,
    },
    {
      id: "wall-8",
      name: "Wooden Elephant Head Hand-Painted",
      category: "Wall Décor",
      description: "Majestic hand-painted solid wooden elephant head wall mount adorned with traditional royal patterns, fine carving, and vibrant colors.",
      image: Wooden_Elephant_Head,
    },
  ];

  return (
    <CategoryLayout
      title="Wall Décor"
      keywords={[
        "wall decor", 
        "peacock wall decor", 
        "wall hanging", 
        "jharokha", 
        "mural", 
        "tree of life",
        "wall sculpture"
      ]}
      products={products}
    />
  );
}