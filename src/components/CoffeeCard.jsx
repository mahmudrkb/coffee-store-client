import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, _id, photo, taste } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-server-gamma-three.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-slate-600  m-5 shadow-xl">
      <figure>
        <img src={photo} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name:{name}!</h2>
        <p>{taste}</p>
        <div className="card-actions flex-row justify-end">
          <button className="btn btn-primary">View</button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn btn-primary"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
