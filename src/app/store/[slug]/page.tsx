import Banner from "@/components/store/Banner"
import CategorySection from "@/components/store/Category"
import Footer from "@/components/store/Footer"
import FeaturedProducts from "@/components/store/Products"

const page = () => {
  return (
    <div>
      <Banner />
      <CategorySection/>
      <FeaturedProducts/>
      <Footer/>
    </div>
  )
}

export default page
