import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main_Page from './Componnents/My_Account/Main_Page/Main_Page';
import YourOrders from './Componnents/My_Account/YourOrders/YourOrders';
import Name from './Componnents/My_Account/SecurityLogin/Name/Name';
import SecurityLogin from './Componnents/My_Account/SecurityLogin/SecurityLoginPage/SecurityLogin';
import Email from './Componnents/My_Account/SecurityLogin/Email/Email';
import EmailOTP from './Componnents/My_Account/SecurityLogin/EmailOTP/EmailOTP';
import MailChangeConfirm from './Componnents/My_Account/SecurityLogin/MailChangeConfirm/MailChangeConfirm';
import Mobile from './Componnents/My_Account/SecurityLogin/Mobile/Mobile';
import MobileOTP from './Componnents/My_Account/SecurityLogin/MobileOTP/MobileOTP';
import Password from './Componnents/My_Account/SecurityLogin/Password/Password';
import Country from './Componnents/My_Account/SecurityLogin/Country/Country';
import TwoStepVerification from './Componnents/My_Account/SecurityLogin/TwoStepVerification/TwoStepVerification';
import Address from './Componnents/My_Account/SecurityLogin/Address/Address';
import Step1 from './Componnents/My_Account/SecurityLogin/Step1/Step1';
import TwoStepMobileOTP from './Componnents/My_Account/SecurityLogin/TwoStepMobileOTP/TwoStepMobileOTP';
import Step2 from './Componnents/My_Account/SecurityLogin/Step2/Step2';
import SecureYourAccount from './Componnents/My_Account/SecurityLogin/SecureYourAccount/SecureYourAccount';
import Vouchers from './Componnents/My_Account/Voucher/Vouchers/Vouchers';
import YourPayments from './Componnents/My_Account/Payments/YourPayments/YourPayments';
import YourProfiles from './Componnents/My_Account/Profiles/YourProfiles/YourProfiles';
import ManageYourProfiles from './Componnents/My_Account/Profiles/ManageYourProfiles/ManageYourProfiles';
import Devices from './Componnents/My_Account/DeviceAndContents/Devices/Devices';
import ManageDevices from './Componnents/My_Account/DeviceAndContents/ManageDevices/ManageDevices';
import Navbar from './Componnents/Home/Navbar/Navbar';
import Home_Page from './Componnents/Home/Home_Page/Home_Page';
import Banner from './Componnents/Home/Banner/Banner';
import Products from './Componnents/Home/Products/Products';
import AllCategories from './Componnents/Categories/AllCategories/AllCategories';
import DetailsPage from './Componnents/DetailsPage/DetailsPage';
import Footer from './Componnents/Home/Footer/Footer';
import Categories from './Componnents/Home/Categories/Categories';
import Cart from './Componnents/Cart/Cart/Cart';
import Checkout from './Componnents/Cart/Checkout/Checkout';
import Shipment from './Componnents/Cart/Shipment/Shipment';
import SwitchToSellerPage from './Componnents/Seller/SwitchToSellerPage/SwitchToSellerPage';
import SellerInfo from './Componnents/Seller/SellerInfo/SellerInfo';
import Bikes from './Componnents/Home/Categories/Bikes/Bikes';
import Scooter from './Componnents/Home/Categories/Scooter/Scooter';
import MobileData from './Componnents/Home/Categories/Mobile/MobileData';
import Laptop from './Componnents/Home/Categories/Laptop/Laptop';
import Groceries from './Componnents/Home/Categories/Groceries/Groceries';
import Suzuki from './Componnents/Home/Categories/Suzuki/Suzuki';
import Honda from './Componnents/Home/Categories/Honda/Honda';
import Hero from './Componnents/Home/Categories/Hero/Hero';
import TVS from './Componnents/Home/Categories/TVS/TVS';
import Yamaha from './Componnents/Home/Categories/Yamaha/Yamaha';
import Comuter from './Componnents/Home/Categories/Comuter/Comuter';
import Sportsb from './Componnents/Home/Categories/Sports-bike/Sportsb';
import Nacbike from './Componnents/Home/Categories/Nacked-Bike/Nacbike';
import Oil from './Componnents/Home/Categories/Groceries/Oil/Oil';
import Chal from './Componnents/Home/Categories/Groceries/Chal/Chal';
import Spices from './Componnents/Home/Categories/Groceries/Spices/Spices';
import Df from './Componnents/Home/Categories/Groceries/Dryfruits/Df';
import Nokia from './Componnents/Home/Categories/Mobile/Nokia/Nokia';
import Blackberry from './Componnents/Home/Categories/Mobile/BlackBerry/Blackberry';
import Realme from './Componnents/Home/Categories/Mobile/Realme/Realme';
import Samsung from './Componnents/Home/Categories/Mobile/Samsung/Samsung';
import Walton from './Componnents/Home/Categories/Mobile/Walton/Walton';
import Iphone from './Componnents/Home/Categories/Mobile/Iphone/Iphone';
import Android from './Componnents/Home/Categories/Mobile/Android/Android';
import Asus from './Componnents/Home/Categories/Laptop/Asus/Asus';
import Dell from './Componnents/Home/Categories/Laptop/Dell/Dell';
import Hp from './Componnents/Home/Categories/Laptop/Hp/Hp';
import Lenovo from './Componnents/Home/Categories/Laptop/Lenovo/Lenovo';
import Macbook from './Componnents/Home/Categories/Laptop/Macbook/Macbook';
import Television from './Componnents/Home/Categories/Television/Television';
import HealthBeauty from './Componnents/Home/Categories/HealthandBeauty/HealthBeauty';
import ManFashion from './Componnents/Home/Categories/MansFashion/ManFashion';
import WomenFashion from './Componnents/Home/Categories/WomensFashion/WomenFashion';
import SecurityCam  from './Componnents/Home/Categories/SecurityCamera/SecurityCam';
import SmartGadgets from './Componnents/Home/Categories/SmartGadgets/SmartGadgets';
import Sports from './Componnents/Home/Categories/Sports/Sports';
import Touring from './Componnents/Home/Categories/Touring/Touring';
import Babytoy from './Componnents/Home/Categories/BabiesandToys/Babytoy'
import Blender from './Componnents/Home/Categories/HomeandLifestyle/Blender/Blender';
import ChairTable from './Componnents/Home/Categories/HomeandLifestyle/ChairandTable/ChairTable';
import Doormat from './Componnents/Home/Categories/HomeandLifestyle/DoorMats/Doormat';
import WaterFilter from './Componnents/Home/Categories/HomeandLifestyle/Water Filter/WaterFilter';
import Homeaccess from './Componnents/Home/Categories/HomeandLifestyle/Home Accecories/Homeaccess';
import Kitchen from './Componnents/Home/Categories/HomeandLifestyle/Kitchen Items/Kitchen';
import Aboutecomdi from './Componnents/Footerpages/About/Aboutecomdi'
import InvestRelation from './Componnents/Footerpages/InvRel/InvRel'
import SellonProduct from './Componnents/Footerpages/SellProduct/Sellpro'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/navbar">
          <Navbar />
        </Route>
        <Route path="/mainHome">
          <Home_Page />
        </Route>
        <Route path="/banner">
          <Banner />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/bikes">
          <Bikes />
        </Route>
        <Route path="/scooter">
          <Scooter />
        </Route>
        <Route path="/tvs">
          <TVS />
        </Route>
        <Route path="/suzuki">
          <Suzuki />
        </Route>
        <Route path="/yamaha">
          <Yamaha />
        </Route>
        <Route path="/honda">
          <Honda />
        </Route>  
        <Route path="/hero">
          <Hero />
        </Route>
        <Route path="/comuter-bike">
          <Comuter />
        </Route>
        <Route path="/sports-bike">
          <Sportsb />
        </Route>
        <Route path="/nacked-bike">
          <Nacbike />
        </Route>
        <Route path="/mobile">
          <MobileData />
        </Route>
        <Route path="/nokia">
          <Nokia />
        </Route>
        <Route path="/blackberry">
          <Blackberry />
        </Route>
        <Route path="/realme">
          <Realme />
        </Route>
        <Route path="/samsung">
          <Samsung />
        </Route>
        <Route path="/walton">
          <Walton />
        </Route>
        <Route path="/iphone">
          <Iphone />
        </Route>
        <Route path="/android">
          <Android />
        </Route>
        <Route path="/laptop">
          <Laptop />
        </Route>
        <Route path="/asus">
          <Asus />
        </Route>
        <Route path="/dell">
          <Dell />
        </Route>
        <Route path="/lenovo">
          <Lenovo />
        </Route>
        <Route path="/macbook">
          <Macbook />
        </Route>
        <Route path="/hp">
          <Hp />
        </Route>
        <Route path="/groceries">
          <Groceries />
        </Route>
        <Route path="/oil">
          <Oil />
        </Route>
        <Route path="/chal">
          <Chal />
        </Route>
        <Route path="/spices">
          <Spices />
        </Route>
        <Route path="/dry-fruits">
          <Df />
        </Route>
        <Route path="/television">
          <Television />
        </Route>
        <Route path="/security-camera">
          <SecurityCam />
        </Route>
        <Route path="/health-and-beauty">
          <HealthBeauty />
        </Route>
        <Route path="/men-fashion">
          <ManFashion />
        </Route>
        <Route path="/women-fashion">
          <WomenFashion />
        </Route>
        <Route path="/blender">
          <Blender />
        </Route>
        <Route path="/chair-table">
          <ChairTable />
        </Route>
        <Route path="/doormats">
          <Doormat />
        </Route>
        <Route path="/home-accecories">
          <Homeaccess />
        </Route>
        <Route path="/kitchen">
          <Kitchen />
        </Route>
        <Route path="/water-filter">
          <WaterFilter />
        </Route>
        <Route path="/babies-toys">
          <Babytoy />
        </Route>
        <Route path="/smart-gadgets">
          <SmartGadgets />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
        <Route path="/touring">
          <Touring />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
        <Route path="/home">
          <Main_Page />
        </Route>
        <Route path="/categories">
          <AllCategories />
        </Route>
        <Route path="/categorie">
          <Categories />
        </Route>
        <Route path="/detailsPage">
          <DetailsPage />
        </Route>
        <Route path="/yourOrders">
          <YourOrders />
        </Route>
        <Route path="/switchToSellerPage">
          <SwitchToSellerPage />
        </Route>
        <Route path="/securityLogin">
          <SecurityLogin />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/sellerInfo">
          <SellerInfo />
        </Route>
        <Route path="/name">
          <Name />
        </Route>
        <Route path="/email">
          <Email />
        </Route>
        <Route path="/emailOTP">
          <EmailOTP />
        </Route>
        <Route path="/mailChangeConfirm">
          <MailChangeConfirm />
        </Route>
        <Route path="/mobile">
          <Mobile />
        </Route>
        <Route path="/mobileOTP">
          <MobileOTP />
        </Route>
        <Route path="/password">
          <Password />
        </Route>
        <Route path="/country">
          <Country />
        </Route>
        <Route path="/twoStepVerification">
          <TwoStepVerification />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
        <Route path="/step1">
          <Step1 />
        </Route>
        <Route path="/twoStepMobileOTP">
          <TwoStepMobileOTP />
        </Route>
        <Route path="/step2">
          <Step2 />
        </Route>
        <Route path="/secureYourAccount">
          <SecureYourAccount />
        </Route>
        <Route path="/vouchers">
          <Vouchers />
        </Route>
        <Route path="/payments">
          <YourPayments />
        </Route>
        <Route path="/profiles">
          <YourProfiles />
        </Route>
        <Route path="/manageYourProfiles">
          <ManageYourProfiles />
        </Route>
        <Route path="/devices">
          <Devices />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/shipment">
          <Shipment />
        </Route>
        <Route path="/manageDevices">
          <ManageDevices />
        </Route>
        {/* footer navigation start */}
        <Route path="/about-ecomdi">
          <Aboutecomdi />
        </Route>
        <Route path="/investor-relation">
          <InvestRelation />
        </Route>
        <Route path='/sell-on-product'>
          <SellonProduct />
        </Route>
        <Route path="/">
          <Home_Page />
        </Route> 
      </Switch>
      
      <Footer />
    </Router>
  );
}

export default App;
