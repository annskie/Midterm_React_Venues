
import useFetch from "./useFetch";
import {Link} from 'react-router-dom'


const AllVenues = () => {
  const { data, loading, error } = useFetch(
    "https://sis.materdeicollege.com/api/venues"
  );


  return (
    <>
      <h1 className="text-center mt-3 text-dark shadow-lg">
        Mater Dei College Venues<hr />
      </h1>
      {error && (
        <p className="text-danger text-center">Something wrong from the API</p>
      )}
      {loading && (
        <div className="text-center bg-primary text-white">
          Loading Venues...
        </div>
      )}
      <div><h2 className="text-center bg-secondary text-info p-1">List of Venues</h2></div>
      <table className="table table-striped table-bordered shadow-sm">
        <thead className=" bg-success">
          <tr className="text-white text-center">
            <th>#</th>
            <th>Name</th>
            <th>Building</th>
            <th>Capacity</th>
            <th>---</th>
          </tr>
        </thead>
        <tbody className="text-center bg-warning bg-opacity-25">
          {Object.keys(data)?.map((venue, index) => {
            return (
              <tr key={index} className="hover-effect">
                <td>{data[venue].id}</td>
                <td>{data[venue].name}</td>
                <td>{data[venue].building}</td>
                <td>{data[venue].capacity}</td>
                <td>
                <Link to={`/venues/${data[venue].id}`} className="btn btn-sm btn-outline-success mt-1">
                        Show
                </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllVenues;