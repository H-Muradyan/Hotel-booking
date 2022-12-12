import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";
import { getHotelById, updateHotel } from "../../api/datas/allHotels";
import HotelInput from "../shared/HotelInput";
import LocationInput from "../shared/LocationInput";
import RangeInput from "../shared/RangeInput";
import { useLocation } from "react-router";
import SelectInput from "../shared/SelectInput";

import dayjs from "dayjs";
import "dayjs/locale/hy-am";
import locale from "antd/es/date-picker/locale/en_US";
import { validators } from "../shared/validators";

const EditHotel = () => {
  const location = useLocation();

  const [locationValue, setLocationValue] = useState("");
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const [values, setValues] = useState(null);

  const [preview, setPreview] = useState(
    `${import.meta.env.VITE_APP_API}/hotel/image/${location.state.id}`
  );
  const [errorMessage, setErrorMessage] = useState({});

  const getHotel = async () => {
    try {
      const res = await getHotelById(location.state.id);
      delete res.data.image;
      setLocationValue(res.data.location);
      setValues(res.data);

    } catch (err) {
      console.error(err);
    }
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(validators(values))
    if (Object.values(validators(values)).length === 1) {
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);
        formData.append("location", locationValue);
        formData.append("price", values.price);
        formData.append("bed", values.bed);
        formData.append("from", values.from);
        formData.append("to", values.to);
        values.image && formData.append("image", values.image);

        const res = await updateHotel(token, formData, location.state.id);
        toast.success("Hotel is updated!");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getHotel();
  }, []);

  return (
    <>
      {values && (
        <div className="mt-24 w-full px-3 md:px-10">
          <div className="grid grid-cols-4 gap-x-8 md:grid-cols-8 lg:grid-cols-12 max-w-screen-2xl m-auto">
            <div className="col-span-2 col-start-2 md:flex md:col-start-1 md:col-span-4 lg:col-start-2 lg:col-span-5">
              <label className="cursor-pointer w-full">
                <h1 className="text-3xl font-bold">Hotel Photo</h1>

                <img className="w-full h-48 md:h-80" src={preview} alt="preview_image" />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
                <p className="text-red-700 font-bold">
                  {errorMessage?.image && "The photo is required"}
                </p>
              </label>
            </div>
            <form
              className="col-span-4 space-y-7 mt-5 md:mt-0 w-full lg:col-start-7 lg:col-span-5 [&>div]:w-full"
              onSubmit={handleSubmit}
            >
              <HotelInput
                name="title"
                type="text"
                text="title"
                value={values.title}
                onChange={handleChange}
                errorMessage={errorMessage}

              />

              <HotelInput
                name="content"
                type="text"
                text="content"
                value={values.content}
                onChange={handleChange}
                errorMessage={errorMessage}

              />
              <LocationInput
                name="location"
                text="Location"
                apiKey={import.meta.env.VITE_APP_GOOGLE_AUTOCOMPLETE}
                onPlaceSelected={(place) => {
                  setLocationValue(place.formatted_address);
                }}
                defaultValue={locationValue}
              />
              <HotelInput
                name="price"
                type="number"
                text="price"
                value={values.price}
                onChange={handleChange}
                errorMessage={errorMessage}

              />
              <SelectInput
                text="bed"
                name="bed"
                type="text"
                value={values.bed}
                onChange={handleChange}
                errorMessage={errorMessage}

              />
              <RangeInput
                text="Date"
                name="date"
                onChange={(date, dateString) => {
                  setValues({
                    ...values,
                    from: dateString[0],
                    to: dateString[1],
                  });
                }}
                defaultValue={[dayjs(values.from, "YYYY-MM-DD"), dayjs(values.to, "YYYY-MM-DD")]}
                format="YYYY-MM-DD"
                errorMessage={errorMessage}

              />
              <div className="flex justify-center">
                <button
                  className="button1 mb-10 h-12 w-28 rounded text-white hover:text-white bg-black/70 hover:border-2 border-white active:border-2 hover:bg-black active:bg-black"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditHotel;
