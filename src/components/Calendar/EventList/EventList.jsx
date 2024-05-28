import { PropTypes } from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Tooltip } from '@mui/material';
import { format, parseISO } from 'date-fns';

import './EventList.scss';

// card model
const EventCard = ({
  title,
  image,
  content,
  date,
  eyeUrl,
  binocularUrl,
  telescopeUrl,
  glassesUrl,
}) => {
  const dateISO = parseISO(date);

  const day = format(dateISO, 'dd');
  const month = format(dateISO, 'MMM').toUpperCase();

  return (
    <Card className="event-card">
      <div className="event-card-span">
        <span>{day}</span>
        <span>{month}</span>
      </div>
      <CardMedia component="img" height="140" image={image} alt="" />
      <CardContent>
        <div className="event-card-container">
          <Typography
            className="event-card-container-title"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <div className="event-card-container-logo">
            {eyeUrl && (
              <Tooltip title="Visible à l'oeil nu" arrow enterTouchDelay={0}>
                <img src={eyeUrl} alt="Logo oeil" />
              </Tooltip>
            )}
            {binocularUrl && (
              <Tooltip title="Jumelles recommandées" arrow enterTouchDelay={0}>
                <img src={binocularUrl} alt="Logo jumelles" />
              </Tooltip>
            )}
            {telescopeUrl && (
              <Tooltip title="Matériel avancé requis" arrow enterTouchDelay={0}>
                <img src={telescopeUrl} alt="Logo téléscope" />
              </Tooltip>
            )}
            {glassesUrl && (
              <Tooltip
                title="Port de lunettes spécifiques conseillé"
                arrow
                enterTouchDelay={0}
              >
                <img src={glassesUrl} alt="Logo lunettes" />
              </Tooltip>
            )}
          </div>
        </div>
        <Typography
          className="event-card-content"
          variant="body2"
          color="text.secondary"
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions className="event-card-button">
        {/* <Button size="small" color="primary">
          Participer
        </Button> */}
      </CardActions>
    </Card>
  );
};

// component calling several cards via map function
const EventList = ({ events }) => {
  return (
    <div className="event">
      {events.map((singleEvent) => (
        <EventCard key={singleEvent.id} {...singleEvent} />
      ))}
    </div>
  );
};

// proptypes
EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  eyeUrl: PropTypes.string,
  binocularUrl: PropTypes.string,
  telescopeUrl: PropTypes.string,
  glassesUrl: PropTypes.string,
};

EventCard.defaultProps = {
  eyeUrl: null,
  binocularUrl: null,
  telescopeUrl: null,
  glassesUrl: null,
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

EventList.defaultProps = {
  events: null,
};

export default EventList;
