import CategoryLayout from "../components/CategoryLayout";

// =====================================================
// HOME DECOR IMAGES
// =====================================================
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

// =====================================================
// HOME DECOR COLLECTION
// =====================================================
const products = [
  {
    id: "home-1",
    name: "Camel Napkin Stand",
    category: "Home Décor",
    description:
      "A charming camel-inspired tabletop accent designed to bring an artistic Indian touch to your dining setup. Its sculptural form makes it useful as well as decorative.",
    image: Camel_Napkin_Stand,
    features: [
      "Camel Inspired",
      "Tabletop Accent",
      "Traditional Style",
      "Dining Decor",
    ],
    style: "Rajasthani Inspired",
    usage: "Dining & Table Styling",
    highlight: "Handcrafted Character",
  },

  {
    id: "home-2",
    name: "Handpainted Elephant Stool 01",
    category: "Home Décor",
    description:
      "A vibrant elephant-shaped accent stool featuring detailed hand-painted artwork. The colorful traditional character makes it a striking addition to ethnic and contemporary interiors.",
    image: Handpainted_Elephant_Stool_01,
    features: [
      "Elephant Form",
      "Hand-Painted",
      "Decorative Seating",
      "Folk Artwork",
    ],
    style: "Traditional Indian",
    usage: "Seating & Display",
    highlight: "Colorful Handwork",
  },

  {
    id: "home-3",
    name: "Handpainted Elephant Stool 03",
    category: "Home Décor",
    description:
      "A decorative elephant-form stool enriched with traditional painted detailing. Its distinctive silhouette creates an attractive focal point in living rooms and cultural interiors.",
    image: Handpainted_Elephant_Stool_03,
    features: [
      "Elephant Design",
      "Hand-Painted Finish",
      "Ethnic Decor",
      "Accent Furniture",
    ],
    style: "Ethnic Craft",
    usage: "Home Styling",
    highlight: "Artisan Painted Detail",
  },

  {
    id: "home-4",
    name: "Handpainted Elephant Stool 04",
    category: "Home Décor",
    description:
      "A statement elephant-shaped decorative stool showcasing colorful traditional artwork and handcrafted detailing. Designed to add personality and heritage character to your space.",
    image: Handpainted_Elephant_Stool_04,
    features: [
      "Elephant Shape",
      "Folk Art",
      "Hand-Painted",
      "Decorative Furniture",
    ],
    style: "Indian Folk Art",
    usage: "Living Room & Display",
    highlight: "Statement Craft",
  },

  {
    id: "home-5",
    name: "Handpainted Elephant Stool With Glass Top",
    category: "Home Décor",
    description:
      "A distinctive elephant-shaped accent table combining colorful handcrafted artwork with a practical glass tabletop. A perfect blend of traditional character and modern functionality.",
    image: Handpainted_Elephant_Stool_With_Glass_Top,
    features: [
      "Elephant Base",
      "Hand-Painted",
      "Glass Top",
      "Accent Table",
    ],
    style: "Heritage Contemporary",
    usage: "Side Table & Display",
    highlight: "Glass Top Finish",
  },

  {
    id: "home-6",
    name: "Handpainted Round Stool",
    category: "Home Décor",
    description:
      "A compact round stool decorated with traditional hand-painted artwork. Its versatile size allows it to work as seating, a plant stand or a decorative display base.",
    image: Handpainted_Round_Stool,
    features: [
      "Round Form",
      "Hand-Painted",
      "Multi-Purpose",
      "Decorative Accent",
    ],
    style: "Traditional Craft",
    usage: "Seat / Plant Stand",
    highlight: "Versatile Design",
  },

  {
    id: "home-7",
    name: "Handpainted Square Chowki Table Decor",
    category: "Home Décor",
    description:
      "A traditional square chowki-style accent table featuring decorative painted motifs. Its heritage-inspired appearance works beautifully in puja spaces and ethnic home interiors.",
    image: Handpainted_Square_Chowki_Table_Decor,
    features: [
      "Square Chowki",
      "Traditional Motifs",
      "Hand-Painted",
      "Puja Decor",
    ],
    style: "Heritage Indian",
    usage: "Puja & Display",
    highlight: "Traditional Artwork",
  },

  {
    id: "home-8",
    name: "Musician Figures Boat Showpiece",
    category: "Home Décor",
    description:
      "An artistic boat-shaped showpiece featuring miniature musician figures. The detailed composition celebrates Indian cultural artistry and creates a beautiful tabletop focal point.",
    image: Musician_Figures_Boat_Showpiece,
    features: [
      "Boat Showpiece",
      "Musician Figures",
      "Cultural Artwork",
      "Tabletop Display",
    ],
    style: "Indian Heritage",
    usage: "Shelf & Table Display",
    highlight: "Miniature Detailing",
  },

  {
    id: "home-9",
    name: "Musician Figures Set of 5",
    category: "Home Décor",
    description:
      "A coordinated collection of five musician figures designed to create a rich cultural display. Their individual poses and traditional styling bring character to shelves and consoles.",
    image: Musician_Figures_Set_of_5,
    features: [
      "Set of 5",
      "Musician Theme",
      "Traditional Figures",
      "Display Collection",
    ],
    style: "Cultural Craft",
    usage: "Shelf & Console",
    highlight: "Five-Piece Set",
  },

  {
    id: "home-10",
    name: "Musician Figures Tea Light Holders Set",
    category: "Home Décor",
    description:
      "A decorative combination of musician-inspired figures and tea-light holders. The artistic silhouettes become even more atmospheric when paired with warm candlelight.",
    image: Musician_Figures_Tea_Light_Holders_Set,
    features: [
      "Musician Design",
      "Tea Light Holder",
      "Ambient Lighting",
      "Decorative Set",
    ],
    style: "Traditional Decorative",
    usage: "Ambient Home Styling",
    highlight: "Light & Art",
  },

  {
    id: "home-11",
    name: "Peacock Tea Light Holder",
    category: "Home Décor",
    description:
      "A graceful peacock-inspired decorative holder designed to combine traditional Indian beauty with soft ambient lighting. Ideal for festive corners and elegant tabletop styling.",
    image: Peacock_Tea_Light_Holder,
    features: [
      "Peacock Motif",
      "Tea Light",
      "Ambient Decor",
      "Indian Inspired",
    ],
    style: "Peacock Art",
    usage: "Table & Corner Decor",
    highlight: "Decorative Lighting",
  },

  {
    id: "home-12",
    name: "Peacock Wall Decor",
    category: "Home Décor",
    description:
      "A statement peacock-inspired wall artwork featuring traditional decorative character. Designed to create an artistic focal point on living room, bedroom or entryway walls.",
    image: Peacock_Wall_Decor,
    features: [
      "Peacock Artwork",
      "Wall Accent",
      "Traditional Motif",
      "Statement Decor",
    ],
    style: "Indian Wall Art",
    usage: "Feature Wall",
    highlight: "Statement Piece",
  },

  {
    id: "home-13",
    name: "Trishul Tea Light Holder",
    category: "Home Décor",
    description:
      "A spiritual Trishul-inspired decorative piece combining devotional symbolism with ambient tea-light illumination. Well suited for puja areas and peaceful decorative corners.",
    image: Trishul_Tea_Light_Holder,
    features: [
      "Trishul Design",
      "Tea Light",
      "Spiritual Decor",
      "Traditional Art",
    ],
    style: "Devotional Craft",
    usage: "Puja & Spiritual Space",
    highlight: "Sacred Symbolism",
  },
];

// =====================================================
// PAGE
// =====================================================
export default function HomeDecorPage() {
  return (
    <CategoryLayout
      title="Home Décor"
      keywords={[
        "handpainted elephant stool",
        "wooden chowki table",
        "musician figures showpiece",
        "peacock tea light holder",
        "traditional handicraft home decor",
      ]}
      products={products}
    />
  );
}