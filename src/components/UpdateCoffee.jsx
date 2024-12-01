import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, _id, photo, taste, quantity, supplier, category, details } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    // sent data to the server

    fetch(`https://coffee-server-gamma-three.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Update Success",
            icon: "success",
            confirmButtonText: "Cancel",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-5xl text-black text-center  font-bold ">
        Update Coffee :{name}
      </h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className=" flex gap-4 mb-5 ">
          <div className=" w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Coffee Name"
              name="name"
              className=" w-full input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              defaultValue={quantity}
              placeholder="Available"
              name="quantity"
              className=" w-full  input input-bordered"
              required
            />
          </div>
        </div>
        <div className=" flex gap-4 mb-5">
          <div className=" w-1/2">
            <label className="label ">
              <span className="label-text">Supplier Name</span>
            </label>
            <input
              type="text"
              defaultValue={supplier}
              placeholder="Supplier Name"
              name="supplier"
              className=" w-full  input input-bordered"
              required
            />
          </div>
          <div className="w-1/2 ">
            <label className="label ">
              <span className="label-text">taste</span>
            </label>
            <input
              type="text"
              defaultValue={taste}
              placeholder="Taste"
              name="taste"
              className=" w-full  input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-4 mb-5">
          <div className=" w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              defaultValue={category}
              placeholder="Category"
              name="category"
              className=" w-full  input input-bordered"
              required
            />
          </div>
          <div className="w-1/2 ">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              defaultValue={details}
              placeholder="Details"
              name="details"
              className=" w-full input input-bordered"
              required
            />
          </div>
        </div>
        <div className=" mb-5">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              defaultValue={photo}
              placeholder="Photo URL"
              name="photo"
              className=" w-full input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control ">
          <input type="submit" value="Update Coffee" className="w-full btn" />
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
