import Blog_list from "@/Components/Blog_items/Blog_list";
import Footer from "@/Components/Foooter/Footer";
import Header from "@/Components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <Blog_list/>
      <Footer/>
    </div>
  );
}
