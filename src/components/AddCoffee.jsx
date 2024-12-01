import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee=e=>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value 
        const quantity=form.quantity.value 
        const supplier=form.supplier.value 
        const taste=form.taste.value 
        const category=form.category.value 
        const details=form.details.value 
        const photo=form.photo.value 
        const newCoffee={name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)

        // sent data to the server

        fetch("http://localhost:5000/coffee",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Success',
                    icon: 'success',
                    confirmButtonText: 'Cancel'
                  })
            }
        })


    }

  return (
    <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-semibold ">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        <div className=" flex gap-4 mb-5 ">
        <div className=" w-1/2">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <input type="text" placeholder="Coffee Name" 
          name="name" className=" w-full input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" placeholder="Available" 
          name="quantity" className=" w-full  input input-bordered" required />
        </div>
        </div>
        <div className=" flex gap-4 mb-5">
        <div className=" w-1/2">
          <label className="label ">
            <span className="label-text">Supplier Name</span>
          </label>
          <input type="text" placeholder="Supplier Name" 
          name="supplier" className=" w-full  input input-bordered" required />
        </div>
        <div className="w-1/2 ">
          <label className="label ">
            <span className="label-text">taste</span>
          </label>
          <input type="text" placeholder="Taste" 
          name="taste" className=" w-full  input input-bordered" required />
        </div>
        </div>
        <div className="flex gap-4 mb-5">
        <div className=" w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="Category" 
          name="category" className=" w-full  input input-bordered" required />
        </div>
        <div className="w-1/2 ">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Details" 
          name="details" className=" w-full input input-bordered" required />
        </div>
        </div>
        <div className=" mb-5">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" 
          name="photo" className=" w-full input input-bordered" required />
        </div>
       
        </div>
        <div className="form-control ">
          <input type="submit" value="Submit" className="w-full btn" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
