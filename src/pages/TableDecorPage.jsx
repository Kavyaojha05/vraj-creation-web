import CategoryLayout from "../components/CategoryLayout";

// Table Decor Images Import
import Elephant_Phone_Stand from "../assets/table-decor/elephant-phone-stand.jpeg";
import Vintage_Bike_Clock from "../assets/table-decor/Handpainted Decorative Bike Table Clock Showpiece _ Vintage Motorcycle Design _ Home & Office Decor.jpg";
import Iron_Cycle_Pen_Stand from "../assets/table-decor/iron-cycle-pen-stand.jpg";
import Ganesha_Tealight_Holder from "../assets/table-decor/Lord Ganesha Tealight Candle Holder – Handpainted Ethnic Home Decor.jpg";
import Moonshine_Boat from "../assets/table-decor/moonshine boat for table decor.jpg";
import Trio_Metal_Dancers from "../assets/table-decor/Trio Rajasthani Metal Dancers.jpg";

export default function TableDecorPage() {
  const products = [
    {
      id: "table-1",
      name: "Elephant Phone Stand",
      category: "Table Décor",
      description: "Adorable handcrafted wooden elephant desk mobile phone holder, combining functional utility with ethnic table artistry.",
      image: Elephant_Phone_Stand,
      features: ["Solid Wooden Craft", "Handcrafted Finish"]
    },
    {
      id: "table-2",
      name: "Vintage Decorative Bike Table Clock",
      category: "Table Décor",
      description: "Classic vintage motorcycle design metal table clock showpiece, perfect for sophisticated home and office desk decor.",
      image: Vintage_Bike_Clock,
      features: ["Pure Wrought Iron", "Vintage Design"]
    },
    {
      id: "table-3",
      name: "Iron Cycle Pen Stand",
      category: "Table Décor",
      description: "Artistic miniature iron cycle pen and stationery holder designed to add a creative and rustic touch to your study or workspace table.",
      image: Iron_Cycle_Pen_Stand,
      features: ["Pure Wrought Iron", "Anti-Rust Lacquer"]
    },
    {
      id: "table-4",
      name: "Lord Ganesha Tealight Candle Holder",
      category: "Table Décor",
      description: "Handpainted ethnic Lord Ganesha tealight candle holder designed to spread spiritual warmth and divine festive glow on your tables.",
      image: Ganesha_Tealight_Holder,
      features: ["Handcrafted Artifact", "Spiritual Design"]
    },
    {
      id: "table-5",
      name: "Moonshine Boat for Table Decor",
      category: "Table Décor",
      description: "Unique moonshine decorative boat showpiece crafted meticulously to elevate center tables and living room display showcases.",
      image: Moonshine_Boat,
      features: ["Artisanal Decor", "Handcrafted Finish"]
    },
    {
      id: "table-6",
      name: "Trio Rajasthani Metal Dancers",
      category: "Table Décor",
      description: "Exquisite trio of Rajasthani metal dancer figurines depicting vibrant cultural folk art and traditional craftsmanship.",
      image: Trio_Metal_Dancers,
      features: ["Pure Wrought Iron", "Anti-Rust Lacquer"]
    },
  ];

  return (
    <CategoryLayout
      title="Table Décor"
      keywords={[
        "table decor", 
        "boat", 
        "moonshine", 
        "tealight", 
        "candle", 
        "bike clock",
        "pen stand"
      ]}
      products={products}
    />
  );
}