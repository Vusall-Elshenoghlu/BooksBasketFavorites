import UserRoot from "../pages/User/UserRoot";
import Home from "../pages/User/Home";
import Products from "../pages/User/Products";
import ProductDetail from "../pages/User/ProductDetail";
import Basket from "../pages/User/Basket";
import Favorites from "../pages/User/Favorites";
import NotFound from "../pages/User/NotFound";
import AdminRoot from "../pages/Admin/AdminRoot";
import DashBoard from "../pages/Admin/DashBoard";
import AdminProducts from "../pages/Admin/AdminProducts";
import AddProduct from "../pages/Admin/AddProduct";
import AdminProductDetail from "../pages/Admin/AdminProductDetail";
import EditProduct from "../pages/Admin/EditProduct";


const ROUTES = [
    {
        path:'/',
        element:<UserRoot/>,
        children:[
            {
                path: "",
                element:<Home/>
            },
            {
                path: "/products",
                element:<Products/>,
            },
            {
                path:"/products/:id",
                element:<ProductDetail/>
            },
            {
                path: "/basket",
                element:<Basket/>
            },
            {
                path: "/favorites",
                element:<Favorites/>
            }
            

        ]
    },{
        path: "*",
        element:<NotFound/>
    },
    {
        path: "/admin",
        element:<AdminRoot/>,
        children:[
            {
                path: "",
                element:<DashBoard/>
            },
            {
                path: "products",
                element:<AdminProducts/>
            },
            {
                path: "products/:id",
                element:<AdminProductDetail/>
            },
            {
                path: "addproduct",
                element:<AddProduct/>
            },
            {
                path: "editproduct",
                element:<EditProduct/>
            },
        ]
    }
]
export default ROUTES 