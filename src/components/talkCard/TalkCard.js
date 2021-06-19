import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';  
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import "./TalkCard.css";



const useStyles = makeStyles({
  root: {
    maxWidth: 1245,
  },
  media: {
    height: 410,
  },
});



export default function TalkCard({ talkDetails }) {
  const classes = useStyles();
  return (
    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image="./laptop.jpg"
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {talkDetails.title}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //       {talkDetails.subtitle}
    //     </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //    <div className="btn-con">

    //     <Button href={talkDetails.slides_url} target="_" variant="contained" size="medium" color="primary" className={classes.margin}>
    //       Email
    //     </Button>

    //     <Button href={talkDetails.event_url} target="_" variant="contained" size="medium" color="primary" className={classes.margin}>
    //       Linkedin
    //     </Button>
    //    </div>

    //   </CardActions>
    // </Card>


    <div>
      <div className="container">
        <div
          className={talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"}
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Email
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
