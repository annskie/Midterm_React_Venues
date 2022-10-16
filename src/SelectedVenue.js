import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const SelectedVenue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // destructuring the data response from api
        const {
          venue
          
        } = data;

        setLoading(false);
        setVenue(venue);
        setSchedule(data.schedules);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center mt-3 text-dark shadow-lg">
          Mater Dei College [{venue.building}]
        </h1>
        {error && (
          <p className="text-danger text-center">
            Something's wrong fetching the API...
          </p>
        )}
        {loading && (
          <p className="text-white bg-primary text-center">
            Loading building and schedule record ....
          </p>
        )}
        <table className="table table-striped table-bordered shadow-sm mt-3" >
        <thead className=" bg-success">
          <tr className="text-white text-center">
            <th>#</th>
            <th>Name</th>
            <th>Building</th>
            <th>Capacity</th>
          </tr>
        </thead>
          <tbody className="text-center bg-warning bg-opacity-25">
            <tr>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
        <h2
          className={
            schedule
              ? "text-center"
              : " text-center "
          }
        >
          {schedule ? "S C H E D U L E S " : "No Schedule Found"}
        </h2>
        </div>
        {schedule && (
          <table className="table table-striped table-bordered shadow-sm text-center">
            <thead className="bg-secondary">
            <tr className="text-center">
              <th>ID</th>
              <th>Course No</th>
              <th>Description</th>
              <th>Teacher</th>
              <th>Schedule</th>
              <th>Size</th>
            </tr>
            </thead>
            <tbody className="text-center bg-info bg-opacity-10">
              {Object.keys(schedule)?.map((sched, index) => {
                return (
                  <tr key={index}>
                    <td>{schedule[sched].id}</td>
                    <td>{schedule[sched].course_no}</td>
                    <td>{schedule[sched].description}</td>
                    <td>{schedule[sched].teacher}</td>
                    <td>{schedule[sched].schedule}</td>
                    <td>{schedule[sched].size}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <Link to="/venues" className="btn btn-md btn-primary">
          Go Back
      </Link>
    </>
  );
};

export default SelectedVenue;