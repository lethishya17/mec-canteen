import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface MenuItem {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Idli Sambar",
    price: 40,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Idli_Sambar.JPG",
    description: "Soft idlis served with hot sambar and chutney",
    category: "Breakfast"
  },
  {
    name: "Masala Dosa",
    price: 60,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Dosa_with_chutney_and_sambar.JPG",
    description: "Golden crispy dosa stuffed with spicy potato masala",
    category: "Breakfast"
  },
  {
    name: "Veg Fried Rice",
    price: 80,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Vegfriedrice.jpg",
    description: "Fried rice with fresh vegetables and soy sauce",
    category: "Lunch"
  },
  {
    name: "Chicken Biryani",
    price: 120,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Chicken_Biryani.jpg",
    description: "Delicious biryani cooked with tender chicken and spices",
    category: "Lunch"
  },
  {
    name: "Filter Coffee",
    price: 25,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Filter_coffee.jpg",
    description: "Authentic South Indian filter coffee",
    category: "Beverages"
  },
  {
    name: "Lemon Juice",
    price: 20,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Lemonade.jpg",
    description: "Refreshing lemon drink with a pinch of salt",
    category: "Beverages"
  },
  {
    name: "Paneer Butter Masala",
    price: 110,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Paneer_butter_masala.jpg",
    description: "Rich and creamy paneer curry with butter and spices",
    category: "Dinner"
  },
  {
    name: "Chicken Curry",
    price: 130,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Indian_Chicken_Curry.jpg",
    description: "Tender chicken cooked in aromatic curry sauce",
    category: "Dinner"
  },
  {
    name: "Roti with Dal",
    price: 70,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Dal_Roti.jpg",
    description: "Soft rotis served with flavorful dal tadka",
    category: "Dinner"
  },
  {
    name: "Fish Fry",
    price: 150,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Fish_fry_1.jpg",
    description: "Crispy fried fish with spicy masala coating",
    category: "Dinner"
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { toast } = useToast();
  
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Beverages"];
  
  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item: MenuItem) => {
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Welcome to Lethishya's Canteen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Delicious homemade food made with love. Fresh ingredients, authentic taste, and affordable prices!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Order Now
                </Button>
                <Button size="lg" variant="outline">
                  View Menu
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
            <p className="text-muted-foreground text-lg">Explore our delicious offerings</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-secondary">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-semibold">4.5</span>
                    </div>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                  <Button onClick={() => addToCart(item)} className="gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍽️</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Fresh Ingredients</h3>
                <p className="text-muted-foreground">We use only the freshest ingredients in all our dishes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Quick Service</h3>
                <p className="text-muted-foreground">Fast preparation and delivery to save your time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Affordable Prices</h3>
                <p className="text-muted-foreground">Great taste at prices that won't break the bank</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
