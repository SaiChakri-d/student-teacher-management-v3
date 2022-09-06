import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export function Message({
  name,
  standard,
  contact_number,
  address,
  id,
  deleteButton,
  editButton,
}) {
  return (
    <Card
      className="teacher-container"
      sx={{ height: "min-content", textAlign: "center" }}
    >
      <img
        className="teacher-poster"
        src="http://www.galaxyskills.org/wp-content/uploads/2019/02/dummy-350x350.png"
        alt={name}
      />
      <CardContent>
        <div className="teacher-specs">
          <h3 className="teacher-name mb-4">{`Name: ${name}`} </h3>
          <p className="teacher-rating">
            <b>{`Class:`}</b> {` ${standard}`}
          </p>
          <p className="teacher-rating">
            <b> {`Address:`}</b>
            {` ${address}`}
          </p>
          <p className="teacher-rating">
            <b>{`Contact number:`}</b> {` ${contact_number}`}
          </p>
        </div>
      </CardContent>
      <CardActions>
        <div className="teacher-counter-del">
          {deleteButton}
          {editButton}
        </div>
      </CardActions>
    </Card>
  );
}
