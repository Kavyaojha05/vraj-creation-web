import CategoryLayout from "../components/CategoryLayout";

// Home Decor Images Import
import Camel_Napkin_Stand from "../assets/home-decor/Camel_Napkin_Stand.jpeg";
import Handpainted_Elephant_Stool_01 from "../assets/home-decor/Handpainted_Elephant_Stool_01.png";
import Handpainted_Elephant_Stool_03 from "../assets/home-decor/Handpainted_Elephant_Stool_03.png";
import Handpainted_Elephant_Stool_04 from "../assets/home-decor/Handpainted_Elephant_Stool_04.png";
import Handpainted_Elephant_Stool_With_Glass_Top from "../assets/home-decor/Handpainted_Elephant_Stool_With_Glass_Top.png";
import Handpainted_Round_Stool from "../assets/home-decor/Handpainted_Round_Stool.png";
import Handpainted_Square_Chowki_Table_Decor from "../assets/home-decor/Handpainted_Square_Chowki_Table_Decor.png";
import Musician_Figures_Boat_Showpiece from "../assets/home-decor/Musician_Figures_Boat_Showpiece.png";
import Musician_Figures_Set_of_5 from "../assets/home-decor/Musician_Figures_Set_of_5.png";
import Musician_Figures_Tea_Light_Holders_Set from "../assets/home-decor/Musician_Figures_Tea_Light_Holders_Set.png";
import Peacock_Tea_Light_Holder from "../assets/home-decor/Peacock_Tea_Light_Holder.png";
import Peacock_Wall_Decor from "../assets/home-decor/Peacock_Wall_Decor.png";
import Trishul_Tea_Light_Holder from "../assets/home-decor/Trishul_Tea_Light_Holder.png";

export default function HomeDecorPage() {
  const products = [
    {
      id: "home-1",
      name: "Camel Napkin Stand",
      category: "Home Décor",
      description: "Exquisite handcrafted wooden and metallic camel figurine napkin stand, blending traditional Rajasthani art with utility for your dining table.",
      image: Camel_Napkin_Stand,
      features: ["Solid Wooden Craft", "Handcrafted Finish"]
    },
    {
      id: "home-2",
      name: "Handpainted Elephant Stool 01",
      category: "Home Décor",
      description: "Vibrant hand-painted wooden elephant stool featuring intricate ethnic motifs, adding a royal and colorful touch to your living room seating.",
      image: Handpainted_Elephant_Stool_01,
      features: ["Solid Wooden Craft", "Hand-Painted Finish"]
    },
    {
      id: "home-3",
      name: "Handpainted Elephant Stool 03",
      category: "Home Décor",
      description: "Artisanal decorative wooden elephant stool adorned with traditional Indian folk art patterns, built with durable solid wood.",
      image: Handpainted_Elephant_Stool_03,
      features: ["Solid Wooden Craft", "Hand-Painted Finish"]
    },
    {
      id: "home-4",
      name: "Handpainted Elephant Stool 04",
      category: "Home Décor",
      description: "Stunning decorative stool carved in an elephant shape, meticulously painted by skilled artisans to elevate your interior aesthetics.",
      image: Handpainted_Elephant_Stool_04,
      features: ["Solid Wooden Craft", "Hand-Painted Finish"]
    },
    {
      id: "home-5",
      name: "Handpainted Elephant Stool With Glass Top",
      category: "Home Décor",
      description: "Unique hand-painted wooden elephant accent stool topped with a sleek protective glass finish, serving as a functional small coffee table.",
      image: Handpainted_Elephant_Stool_With_Glass_Top,
      features: ["Solid Wooden Craft", "Tempered Glass Top"]
    },
    {
      id: "home-6",
      name: "Handpainted Round Stool",
      category: "Home Décor",
      description: "Traditional round wooden stool featuring rich hand-painted cultural artwork, designed for versatile usage as a mini seat or decorative base.",
      image: Handpainted_Round_Stool,
      features: ["Solid Wooden Craft", "Hand-Painted Finish"]
    },
    {
      id: "home-7",
      name: "Handpainted Square Chowki Table Decor",
      category: "Home Décor",
      description: "Classic low-height square wooden chowki table intricately painted with traditional heritage motifs for puja spaces and ethnic home decor.",
      image: Handpainted_Square_Chowki_Table_Decor,
      features: ["Solid Wooden Craft", "Traditional Chowki Art"]
    },
    {
      id: "home-8",
      name: "Musician Figures Boat Showpiece",
      category: "Home Décor",
      description: "Fascinating boat-shaped showpiece carrying miniature traditional Indian musician figurines, symbolizing rich cultural heritage.",
      image: Musician_Figures_Boat_Showpiece,
      features: ["Handcrafted Artifact", "Detailed Artistry"]
    },
    {
      id: "home-9",
      name: "Musician Figures Set of 5",
      category: "Home Décor",
      description: "Exclusive set of 5 traditional handcrafted musician statues playing classical Indian instruments, perfect for display shelves.",
      image: Musician_Figures_Set_of_5,
      features: ["Set of 5 Statues", "Handcrafted Finish"]
    },
    {
      id: "home-10",
      name: "Musician Figures Tea Light Holders Set",
      category: "Home Décor0",
      description: "Artistic set combining traditional musician figures with functional tea light candle holders to create a warm, spiritual ambiance.",
      image: Musician_Figures_Tea_Light_Holders_Set,
      features: ["Tea Light Compatible", "Handcrafted Finish"]
    },
    {
      id: "home-11",
      name: "Peacock Tea Light Holder",
      category: "Home Décor",
      description: "Graceful peacock-themed metallic and wooden tea light holder designed to bring ethnic elegance and soft glowing light to your corners.",
      image: Peacock_Tea_Light_Holder,
      features: ["Decorative Tea Light", "Artisanal Design"]
    },
    {
      id: "home-12",
      name: "Peacock Wall Decor",
      category: "Home Décor",
      description: "Majestic peacock-inspired decorative art piece capturing the beauty of traditional Indian motifs for graceful home embellishment.",
      image: Peacock_Wall_Decor,
      features: ["Traditional Wall Art", "Handcrafted Finish"]
    },
    {
      id: "home-13",
      name: "Trishul Tea Light Holder",
      category: "Home Décor",
      description: "Spiritual Trishul design tea light candle holder crafted with fine artistic detailing to bring divine positive energy to your altar or room.",
      image: Trishul_Tea_Light_Holder,
      features: ["Spiritual Artifact", "Matte Finish"]
    },
  ];

  return (
    <CategoryLayout
      title="Home Décor"
      keywords={[
        "handpainted elephant stool", 
        "wooden chowki table", 
        "musician figures showpiece", 
        "peacock tea light holder",
        "traditional handicraft home decor"
      ]}
      products={products}
    />
  );
}