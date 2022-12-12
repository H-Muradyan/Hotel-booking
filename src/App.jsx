import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bookings from "./components/dashboard/Bookings";
import Seller from "./components/dashboard/Seller";
import AddHotel from "./components/hotels/AddHotel";
import EditHotel from "./components/hotels/EditHotel";
import SingleHotel from "./components/hotels/SingleHotel";
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/shared/PrivateRoute";
import StripeCallback from "./components/stripe/StripeCallback";
import StripeCancel from "./components/stripe/StripeCancel";
import StripeSuccess from "./components/stripe/StripeSuccess";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <>
      <Layout>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard/bookings" element={<Bookings />} />
            <Route path="/dashboard/seller" element={<Seller />} />
          </Route>
          <Route path="/hotels/:id" element={<SingleHotel />} />
          <Route
            path="/hotels/new"
            element={
              <PrivateRoute>
                <AddHotel />
              </PrivateRoute>
            }
          />
          <Route
            path="/hotels/edit"
            element={
              <PrivateRoute>
                <EditHotel />
              </PrivateRoute>
            }
          />
          <Route
            path="/stripe/success/:hotelId"
            element={
              <PrivateRoute>
                <StripeSuccess />
              </PrivateRoute>
            }
          />
          <Route
            path="/stripe/cancel"
            element={
              <PrivateRoute>
                <StripeCancel />
              </PrivateRoute>
            }
          />
          <Route path="/search-result" element={<SearchResult />} />
          <Route
            path="/stripe/callback"
            element={
              <PrivateRoute>
                <StripeCallback />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
